import type { ApiResponse, ApiError } from '@social-cms/types';

/**
 * API client configuration
 */
export interface ApiClientConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

/**
 * Create API client
 */
export function createApiClient(config: ApiClientConfig) {
  const { baseUrl, timeout = 30000, headers = {} } = config;

  return {
    async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
      return request<T>('GET', endpoint, undefined, options);
    },

    async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
      return request<T>('POST', endpoint, data, options);
    },

    async put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
      return request<T>('PUT', endpoint, data, options);
    },

    async patch<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
      return request<T>('PATCH', endpoint, data, options);
    },

    async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
      return request<T>('DELETE', endpoint, undefined, options);
    },
  };

  async function request<T>(
    method: string,
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...options?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
        signal: controller.signal,
        ...options,
      });

      clearTimeout(timeoutId);

      const json = await response.json();

      if (!response.ok) {
        const error: ApiError = {
          status: response.status,
          name: json.error?.name || 'ApiError',
          message: json.error?.message || 'An error occurred',
          details: json.error?.details,
        };
        return { data: null as T, error };
      }

      return { data: json.data || json, meta: json.meta };
    } catch (error) {
      clearTimeout(timeoutId);
      
      const apiError: ApiError = {
        status: 0,
        name: 'NetworkError',
        message: error instanceof Error ? error.message : 'Network request failed',
      };
      
      return { data: null as T, error: apiError };
    }
  }
}

/**
 * Build query string from object
 */
export function buildQueryString(params: Record<string, string | number | boolean | undefined>): string {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');

  return query ? `?${query}` : '';
}

/**
 * Parse query string to object
 */
export function parseQueryString(query: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(query);
  
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  
  return params;
}

/**
 * Handle API error
 */
export function handleApiError(error: ApiError): string {
  switch (error.status) {
    case 400:
      return 'Bad request. Please check your input.';
    case 401:
      return 'Unauthorized. Please log in again.';
    case 403:
      return 'Forbidden. You do not have permission to perform this action.';
    case 404:
      return 'Not found. The requested resource does not exist.';
    case 429:
      return 'Too many requests. Please try again later.';
    case 500:
      return 'Server error. Please try again later.';
    default:
      return error.message || 'An unexpected error occurred.';
  }
}

/**
 * Retry failed requests with exponential backoff
 */
export async function retryRequest<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }

  throw lastError!;
}

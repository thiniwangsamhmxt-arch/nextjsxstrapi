import { format, formatDistanceToNow, isAfter, isBefore, addDays, addHours } from 'date-fns';

/**
 * Format date for display
 */
export function formatDate(date: Date | string, formatString = 'PPP'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatString);
}

/**
 * Get relative time string (e.g., "2 hours ago")
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
}

/**
 * Check if a date is in the future
 */
export function isFutureDate(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return isAfter(dateObj, new Date());
}

/**
 * Check if a date is in the past
 */
export function isPastDate(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return isBefore(dateObj, new Date());
}

/**
 * Add days to a date
 */
export function addDaysToDate(date: Date | string, days: number): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return addDays(dateObj, days);
}

/**
 * Add hours to a date
 */
export function addHoursToDate(date: Date | string, hours: number): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return addHours(dateObj, hours);
}

/**
 * Get timezone offset string (e.g., "+05:30")
 */
export function getTimezoneOffset(): string {
  const offset = new Date().getTimezoneOffset();
  const hours = Math.abs(Math.floor(offset / 60));
  const minutes = Math.abs(offset % 60);
  const sign = offset <= 0 ? '+' : '-';
  return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

/**
 * Convert UTC date to local timezone
 */
export function utcToLocal(date: Date | string): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000);
}

/**
 * Convert local date to UTC
 */
export function localToUtc(date: Date | string): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60000);
}

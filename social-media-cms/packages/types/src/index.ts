/**
 * Shared TypeScript types for Social Media CMS
 */

// User & Authentication Types
export interface User {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  CONTRIBUTOR = 'contributor',
  VIEWER = 'viewer',
}

// Social Media Platform Types
export enum SocialPlatform {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  TIKTOK = 'tiktok',
  YOUTUBE = 'youtube',
}

export interface SocialAccount {
  id: string;
  platform: SocialPlatform;
  platformUserId: string;
  platformUsername: string;
  accessToken: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
  isActive: boolean;
  connectedAt: Date;
}

// Content & Post Types
export interface Post {
  id: string;
  title: string;
  content: string;
  status: PostStatus;
  platforms: SocialPlatform[];
  scheduledAt?: Date;
  publishedAt?: Date;
  author: User;
  campaign?: Campaign;
  media: Media[];
  tags: string[];
  metadata: PostMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  PUBLISHED = 'published',
  FAILED = 'failed',
  ARCHIVED = 'archived',
}

export interface PostMetadata {
  [SocialPlatform.FACEBOOK]?: FacebookMetadata;
  [SocialPlatform.INSTAGRAM]?: InstagramMetadata;
  [SocialPlatform.TWITTER]?: TwitterMetadata;
  [SocialPlatform.LINKEDIN]?: LinkedInMetadata;
  [SocialPlatform.TIKTOK]?: TikTokMetadata;
  [SocialPlatform.YOUTUBE]?: YouTubeMetadata;
}

export interface FacebookMetadata {
  pageId?: string;
  postType: 'link' | 'photo' | 'video' | 'status';
  targeting?: Record<string, unknown>;
}

export interface InstagramMetadata {
  accountId?: string;
  postType: 'feed' | 'story' | 'reel';
  location?: string;
}

export interface TwitterMetadata {
  inReplyTo?: string;
  pollOptions?: string[];
  pollDuration?: number;
}

export interface LinkedInMetadata {
  organizationId?: string;
  visibility: 'public' | 'connections';
}

export interface TikTokMetadata {
  privacy: 'public' | 'private' | 'friends';
  allowComments: boolean;
  allowDuet: boolean;
  allowStitch: boolean;
}

export interface YouTubeMetadata {
  channelId?: string;
  privacy: 'public' | 'private' | 'unlisted';
  category?: string;
  madeForKids: boolean;
}

// Media Types
export interface Media {
  id: string;
  url: string;
  type: MediaType;
  filename: string;
  mimeType: string;
  size: number;
  width?: number;
  height?: number;
  duration?: number;
  thumbnailUrl?: string;
  alt?: string;
  tags: string[];
  createdAt: Date;
}

export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  GIF = 'gif',
  DOCUMENT = 'document',
}

// Campaign Types
export interface Campaign {
  id: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  status: CampaignStatus;
  posts: Post[];
  tags: string[];
  budget?: number;
  goals: CampaignGoal[];
  createdBy: User;
  createdAt: Date;
  updatedAt: Date;
}

export enum CampaignStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export interface CampaignGoal {
  metric: string;
  target: number;
  current: number;
}

// Analytics Types
export interface Analytics {
  postId: string;
  platform: SocialPlatform;
  impressions: number;
  reach: number;
  engagement: number;
  likes: number;
  comments: number;
  shares: number;
  clicks: number;
  videoViews?: number;
  lastUpdated: Date;
}

export interface AnalyticsSummary {
  period: {
    start: Date;
    end: Date;
  };
  totalPosts: number;
  totalImpressions: number;
  totalEngagement: number;
  platformBreakdown: Record<SocialPlatform, Analytics>;
  topPosts: Post[];
}

// Workflow Types
export interface Workflow {
  id: string;
  name: string;
  steps: WorkflowStep[];
  isActive: boolean;
  createdAt: Date;
}

export interface WorkflowStep {
  id: string;
  name: string;
  type: WorkflowStepType;
  assignedTo?: User[];
  requiredApprovals: number;
  order: number;
}

export enum WorkflowStepType {
  DRAFT = 'draft',
  REVIEW = 'review',
  APPROVAL = 'approval',
  SCHEDULE = 'schedule',
  PUBLISH = 'publish',
}

// API Response Types
export interface ApiResponse<T = unknown> {
  data: T;
  meta?: {
    pagination?: PaginationMeta;
  };
  error?: ApiError;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiError {
  status: number;
  name: string;
  message: string;
  details?: Record<string, unknown>;
}

// Webhook Types
export interface Webhook {
  id: string;
  url: string;
  events: WebhookEvent[];
  secret: string;
  isActive: boolean;
  createdAt: Date;
}

export enum WebhookEvent {
  POST_CREATED = 'post.created',
  POST_UPDATED = 'post.updated',
  POST_PUBLISHED = 'post.published',
  POST_FAILED = 'post.failed',
  CAMPAIGN_CREATED = 'campaign.created',
  CAMPAIGN_COMPLETED = 'campaign.completed',
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  data?: Record<string, unknown>;
  createdAt: Date;
}

export enum NotificationType {
  POST_PUBLISHED = 'post_published',
  POST_FAILED = 'post_failed',
  APPROVAL_REQUIRED = 'approval_required',
  MENTION = 'mention',
  CAMPAIGN_MILESTONE = 'campaign_milestone',
}

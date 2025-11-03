# Social Media CMS - Strapi Backend

Strapi v5 CMS backend for managing social media content.

## Features

- 🎨 Custom content types for social media posts
- 🔌 Social media API integrations
- 📅 Content scheduling system
- 📊 Analytics tracking
- 🔐 Role-based access control
- 🔄 Workflow management
- 📦 Rich media library

## Getting Started

```bash
# Install dependencies
yarn install

# Setup environment variables
cp .env.example .env

# Run in development mode
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## Environment Setup

### Database Setup (PostgreSQL)

```bash
# Create database
createdb social_cms

# Or using psql
psql -U postgres
CREATE DATABASE social_cms;
```

### Redis Setup (Optional)

```bash
# Install Redis
# macOS: brew install redis
# Ubuntu: sudo apt-get install redis-server

# Start Redis
redis-server
```

## Content Types

### Social Media Post

Fields:
- Title (string)
- Content (rich text)
- Status (enum: draft, scheduled, published, failed)
- Platforms (enumeration: multiple)
- Scheduled Date (datetime)
- Media (media: multiple)
- Campaign (relation)
- Tags (json)
- Platform Metadata (json)

### Campaign

Fields:
- Name (string)
- Description (text)
- Start Date (date)
- End Date (date)
- Status (enum)
- Posts (relation)
- Goals (json)

### Social Account

Fields:
- Platform (enum)
- Platform User ID (string)
- Platform Username (string)
- Access Token (string, encrypted)
- Refresh Token (string, encrypted)
- Token Expires At (datetime)
- Is Active (boolean)

## Custom Plugins

### Social Media Connector

Handles API integrations with social platforms:
- Facebook & Instagram
- Twitter/X
- LinkedIn
- TikTok
- YouTube

### Content Scheduler

Manages scheduled content:
- Cron jobs for publishing
- Timezone handling
- Retry logic for failed posts

### Analytics Dashboard

Tracks performance metrics:
- Post engagement
- Platform-specific analytics
- Campaign performance

### Workflow Management

Approval workflows:
- Multi-step approval process
- Role-based permissions
- Comment system

## API Endpoints

### Posts

```
GET    /api/posts
GET    /api/posts/:id
POST   /api/posts
PUT    /api/posts/:id
DELETE /api/posts/:id
```

### Campaigns

```
GET    /api/campaigns
GET    /api/campaigns/:id
POST   /api/campaigns
PUT    /api/campaigns/:id
DELETE /api/campaigns/:id
```

### Social Accounts

```
GET    /api/social-accounts
POST   /api/social-accounts/connect
DELETE /api/social-accounts/:id
```

### Analytics

```
GET    /api/analytics/posts/:id
GET    /api/analytics/campaigns/:id
GET    /api/analytics/summary
```

## Testing

```bash
# Run unit tests
yarn test

# Run integration tests
yarn test:integration

# Run with coverage
yarn test:coverage
```

## Deployment

See [deployment documentation](../../docs/deployment.md) for production setup.

## Learn More

- [Strapi Documentation](https://docs.strapi.io/dev-docs/intro)
- [Strapi Cloud](https://strapi.io/cloud)

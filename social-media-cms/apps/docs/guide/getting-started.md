# Getting Started

Welcome to the Social Media CMS documentation! This guide will help you get up and running quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18 or later
- Yarn 1.22 or later
- PostgreSQL 14 or later (for Strapi)
- Redis (optional, for caching)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd social-media-cms
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Configure Environment Variables

Copy the example environment files and update with your values:

```bash
# Web application
cp apps/web/.env.example apps/web/.env.local

# Strapi backend
cp apps/strapi/.env.example apps/strapi/.env

# Mobile app
cp apps/mobile/.env.example apps/mobile/.env
```

### 4. Setup Database

Create a PostgreSQL database for Strapi:

```bash
createdb social_cms
```

### 5. Start Development Servers

Start all applications in development mode:

```bash
yarn dev
```

Or start individual applications:

```bash
# Web app (http://localhost:3000)
yarn dev --filter=@social-cms/web

# Strapi CMS (http://localhost:1337)
yarn dev --filter=@social-cms/strapi

# Mobile app
yarn dev --filter=@social-cms/mobile

# Documentation (http://localhost:5173)
yarn dev --filter=@social-cms/docs
```

## Next Steps

- [Configuration](/guide/configuration) - Configure your applications
- [Multi-Platform Support](/guide/multi-platform) - Connect social media accounts
- [API Reference](/api/introduction) - Explore the API documentation

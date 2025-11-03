---
layout: home
hero:
  name: Social Media CMS
  text: Manage Your Social Content
  tagline: Enterprise-grade content management system for multiple social platforms
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/strapi/LaunchPad

features:
  - icon: 📱
    title: Multi-Platform Support
    details: Manage content for Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from a single dashboard.
  
  - icon: 📅
    title: Advanced Scheduling
    details: Schedule posts with timezone support, automated publishing, and smart retry logic.
  
  - icon: 📊
    title: Real-Time Analytics
    details: Track performance across all platforms with comprehensive analytics and custom reports.
  
  - icon: 🔄
    title: Workflow Management
    details: Create approval workflows with multi-step processes and role-based permissions.
  
  - icon: 🎨
    title: Rich Media Library
    details: CDN integration with advanced filtering, tagging, and optimization tools.
  
  - icon: 🌐
    title: Internationalization
    details: Multi-language support for global teams and audiences.
---

## Quick Start

::: code-group

```bash [yarn]
# Clone the repository
git clone <repository-url>
cd social-media-cms

# Install dependencies
yarn install

# Start all applications
yarn dev
```

```bash [npm]
# Clone the repository
git clone <repository-url>
cd social-media-cms

# Install dependencies
npm install

# Start all applications
npm run dev
```

:::

## Architecture

This monorepo contains:

- **Web App**: Next.js 14 with TypeScript
- **Mobile App**: Expo React Native
- **Backend**: Strapi v5 CMS
- **Docs**: VitePress documentation
- **Shared Packages**: UI components, utilities, and types

## Technology Stack

- 🚀 Turborepo for monorepo management
- ⚡ Next.js 14 for web application
- 📱 Expo for mobile apps
- 🎨 Strapi v5 for CMS backend
- 💎 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 🐘 PostgreSQL for database
- 🔴 Redis for caching

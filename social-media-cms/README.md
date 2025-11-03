# Social Media Content Management System - Turborepo Monorepo

<div align="center">
  <h3>🚀 Enterprise-Grade Social Media CMS with Next.js, Expo, and Strapi v5</h3>
  <p>A comprehensive monorepo for managing social media content across multiple platforms</p>
</div>

## 📦 Monorepo Structure

This Turborepo monorepo contains the following packages and applications:

### Applications (`/apps`)

- **`web`**: Next.js 14+ web application with TypeScript
  - Admin dashboard for content management
  - Social media post scheduling interface
  - Analytics and reporting dashboard
  - Multi-platform content preview
  
- **`mobile`**: Expo React Native mobile application
  - iOS and Android support
  - On-the-go content management
  - Push notifications for scheduled posts
  - Offline content drafting
  
- **`strapi`**: Strapi v5 CMS backend
  - Social media content management
  - Custom plugins for platform integrations
  - Advanced workflow management
  - RESTful and GraphQL APIs
  
- **`docs`**: VitePress documentation site
  - API documentation
  - User guides and tutorials
  - Developer setup instructions
  - Architecture documentation

### Shared Packages (`/packages`)

- **`ui`**: Shared React component library
  - Design system components
  - Platform-specific UI elements
  - Storybook documentation
  
- **`config`**: Shared configuration files
  - ESLint, TypeScript, Tailwind configs
  - Build and bundler configurations
  
- **`utils`**: Shared utility functions
  - Date/time helpers
  - Validation functions
  - API client utilities
  
- **`types`**: Shared TypeScript type definitions
  - Common interfaces and types
  - API response types
  - Database schema types

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Yarn 1.22+
- PostgreSQL 14+ (for Strapi)
- Redis (optional, for caching)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd social-media-cms

# Install dependencies
yarn install

# Copy environment files
cp .env.example .env
```

### Development

```bash
# Start all applications in development mode
yarn dev

# Start specific application
yarn dev --filter=web
yarn dev --filter=mobile
yarn dev --filter=strapi
yarn dev --filter=docs

# Build all applications
yarn build

# Run tests
yarn test

# Lint code
yarn lint
```

## 🏗️ Architecture

### Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Mobile**: Expo SDK 50+, React Native, TypeScript
- **Backend**: Strapi v5, Node.js, TypeScript
- **Database**: PostgreSQL with TypeORM
- **Cache**: Redis
- **Monorepo**: Turborepo
- **Testing**: Jest, React Testing Library, Playwright
- **CI/CD**: GitHub Actions
- **Containerization**: Docker, Docker Compose

### Key Features

✅ **Multi-Platform Support**: Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube
✅ **Content Scheduling**: Advanced scheduling with timezone support
✅ **Analytics Dashboard**: Real-time metrics and performance tracking
✅ **Workflow Management**: Approval workflows and team collaboration
✅ **Rich Media Library**: CDN integration with advanced filtering
✅ **Multi-Language**: i18n support for global teams
✅ **Role-Based Access**: Granular permission controls
✅ **A/B Testing**: Content variation testing capabilities

## 📚 Documentation

Detailed documentation is available in the `/apps/docs` directory:

- [Getting Started Guide](./apps/docs/getting-started.md)
- [API Documentation](./apps/docs/api-reference.md)
- [Deployment Guide](./apps/docs/deployment.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 🧪 Testing

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test --coverage

# Run tests in watch mode
yarn test --watch

# Run E2E tests
yarn test:e2e
```

## 🐳 Docker

```bash
# Build and run all services
docker-compose up -d

# Build specific service
docker-compose up web

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

## 🔧 Environment Configuration

Create `.env` files for each application:

- `/apps/web/.env.local`
- `/apps/mobile/.env`
- `/apps/strapi/.env`

See `.env.example` files for required variables.

## 📈 Roadmap

- [x] Turborepo monorepo setup
- [x] Next.js web application
- [x] Expo mobile application
- [x] Strapi v5 CMS backend
- [x] Shared packages infrastructure
- [ ] Social media API integrations
- [ ] Analytics dashboard
- [ ] Workflow management system
- [ ] E2E testing suite
- [ ] Production deployment

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 👥 Team

Built with ❤️ by the Social Media CMS team

## 🔗 Links

- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev)
- [Turborepo Documentation](https://turbo.build/repo/docs)

---

<div align="center">
  <strong>Made with Turborepo</strong>
</div>

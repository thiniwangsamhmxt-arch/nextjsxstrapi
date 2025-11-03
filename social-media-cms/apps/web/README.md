# Social Media CMS - Web Application

Next.js web application for managing social media content.

## Features

- 📱 Multi-platform content management
- 📅 Advanced content scheduling
- 📊 Real-time analytics dashboard
- 🎨 Modern UI with Tailwind CSS
- 🔐 Role-based access control
- 🌐 Internationalization support

## Getting Started

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
└── types/           # TypeScript types
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)

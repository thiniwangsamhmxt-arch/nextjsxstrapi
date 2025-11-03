/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@social-cms/ui', '@social-cms/utils', '@social-cms/types'],
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL || 'http://localhost:1337',
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;

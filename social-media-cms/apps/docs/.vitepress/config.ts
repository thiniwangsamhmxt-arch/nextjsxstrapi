import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Social Media CMS',
  description: 'Documentation for Social Media Content Management System',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/introduction' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
        {
          text: 'Features',
          items: [
            { text: 'Multi-Platform Support', link: '/guide/multi-platform' },
            { text: 'Content Scheduling', link: '/guide/scheduling' },
            { text: 'Analytics', link: '/guide/analytics' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Introduction', link: '/api/introduction' },
            { text: 'Posts', link: '/api/posts' },
            { text: 'Campaigns', link: '/api/campaigns' },
            { text: 'Social Accounts', link: '/api/social-accounts' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/strapi/LaunchPad' },
    ],
  },
});

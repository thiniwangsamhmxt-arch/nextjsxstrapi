import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@social-cms/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">
          Social Media CMS
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Manage your social media content across multiple platforms
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>📱 Multi-Platform</CardTitle>
              <CardDescription>
                Manage content for Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📅 Schedule Posts</CardTitle>
              <CardDescription>
                Schedule your content with timezone support and automated publishing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Schedule Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 Analytics</CardTitle>
              <CardDescription>
                Track performance with real-time analytics and custom reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View Analytics</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Built with Next.js, Strapi v5, and Expo
          </p>
        </div>
      </div>
    </main>
  );
}

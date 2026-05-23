import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">RevRank.ai v2</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button>Admin Login</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Google Business Profile Management Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive SaaS platform for managing Google Business Profiles, tracking rankings,
            generating AI content, and analyzing competitor performance.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Client Management */}
            <Card>
              <CardHeader>
                <CardTitle>Client Management</CardTitle>
                <CardDescription>Connect and manage Google Business Profiles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• GBP connection and verification</li>
                  <li>• Multi-location management</li>
                  <li>• Profile optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Rank Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>35-Point Geo-Grid Ranking</CardTitle>
                <CardDescription>Comprehensive local search tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 35-point geo-grid analysis</li>
                  <li>• Real-time rank monitoring</li>
                  <li>• Historical performance data</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Content */}
            <Card>
              <CardHeader>
                <CardTitle>AI Content Generation</CardTitle>
                <CardDescription>Claude-powered content creation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AI-generated posts</li>
                  <li>• SEO-optimized content</li>
                  <li>• Brand voice consistency</li>
                </ul>
              </CardContent>
            </Card>

            {/* Review Management */}
            <Card>
              <CardHeader>
                <CardTitle>Review Management</CardTitle>
                <CardDescription>Automated review responses and monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AI-powered responses</li>
                  <li>• Review sentiment analysis</li>
                  <li>• Response automation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Competitor Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Competitor Analysis</CardTitle>
                <CardDescription>Track and analyze competitor performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Competitor ranking tracking</li>
                  <li>• Performance benchmarking</li>
                  <li>• Market share analysis</li>
                </ul>
              </CardContent>
            </Card>

            {/* LeadRank Sales Tool */}
            <Card>
              <CardHeader>
                <CardTitle>LeadRank Sales Tool</CardTitle>
                <CardDescription>Built-in lead generation and sales tools</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Lead scoring and ranking</li>
                  <li>• Sales pipeline management</li>
                  <li>• Conversion tracking</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2026 RevRank.ai v2. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

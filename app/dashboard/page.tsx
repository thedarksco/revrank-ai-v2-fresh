'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">RevRank.ai v2</h1>
              <div className="hidden md:flex items-center space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                  Admin Dashboard
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <span>Welcome, Administrator</span>
              </div>
              <Button variant="outline" asChild>
                <a href="/">Logout</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Google Business Profile Management Platform</h2>
          <p className="text-gray-600 mt-2">Comprehensive platform for managing client profiles, tracking rankings, and generating AI content</p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Total Clients</CardTitle>
              <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">0</div>
              <p className="text-xs text-blue-600 mt-1">Ready for onboarding</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Active GBP Profiles</CardTitle>
              <div className="h-4 w-4 bg-green-600 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">0</div>
              <p className="text-xs text-green-600 mt-1">Connected and verified</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">Rank Tracking</CardTitle>
              <div className="h-4 w-4 bg-orange-600 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">0</div>
              <p className="text-xs text-orange-600 mt-1">Keywords being monitored</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">AI Content Generated</CardTitle>
              <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">0</div>
              <p className="text-xs text-purple-600 mt-1">Posts created this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Platform Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {/* Client & Profile Management */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <span>🏢</span>
                <span>Client Management</span>
              </CardTitle>
              <CardDescription className="text-blue-100">
                Connect and manage Google Business Profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Add New Client</Button>
                <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">Import Client Data</Button>
                <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">Bulk Profile Setup</Button>
              </div>
            </CardContent>
          </Card>

          {/* Rank Tracking */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <span>📍</span>
                <span>35-Point Geo-Grid</span>
              </CardTitle>
              <CardDescription className="text-orange-100">
                Comprehensive local search ranking
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Configure Tracking</Button>
                <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">View Live Rankings</Button>
                <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">Historical Reports</Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Content Generation */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <span>🤖</span>
                <span>AI Content Engine</span>
              </CardTitle>
              <CardDescription className="text-purple-100">
                Claude-powered content creation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Generate Content</Button>
                <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">Content Library</Button>
                <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">Brand Voice Setup</Button>
              </div>
            </CardContent>
          </Card>

          {/* Review Management */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <span>⭐</span>
                <span>Review Management</span>
              </CardTitle>
              <CardDescription className="text-green-100">
                Automated responses and monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">Review Dashboard</Button>
                <Button variant="outline" className="w-full border-green-300 text-green-600 hover:bg-green-50">AI Response Setup</Button>
                <Button variant="outline" className="w-full border-green-300 text-green-600 hover:bg-green-50">Sentiment Analysis</Button>
              </div>
            </CardContent>
          </Card>

          {/* Competitor Analysis */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <span>🎯</span>
                <span>Competitor Analysis</span>
              </CardTitle>
              <CardDescription className="text-red-100">
                Track and analyze competitor performance
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700">Add Competitors</Button>
                <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">Analysis Reports</Button>
                <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">Market Share Data</Button>
              </div>
            </CardContent>
          </Card>

          {/* LeadRank Sales Tool */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <span>📈</span>
                <span>LeadRank Sales</span>
              </CardTitle>
              <CardDescription className="text-indigo-100">
                Lead generation and sales pipeline
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Lead Dashboard</Button>
                <Button variant="outline" className="w-full border-indigo-300 text-indigo-600 hover:bg-indigo-50">Sales Pipeline</Button>
                <Button variant="outline" className="w-full border-indigo-300 text-indigo-600 hover:bg-indigo-50">Conversion Tracking</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for platform management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg">📊</span>
                <span className="text-xs">Analytics</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg">⚙️</span>
                <span className="text-xs">Settings</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg">📁</span>
                <span className="text-xs">Export Data</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg">👥</span>
                <span className="text-xs">User Management</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg">🔧</span>
                <span className="text-xs">API Config</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg">💬</span>
                <span className="text-xs">Support</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
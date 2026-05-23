'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-semibold text-gray-900">RevRank.ai v2</h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-purple-900 font-medium border-b-2 border-purple-900 pb-4">Dashboard</a>
                <a href="#" className="text-gray-500 hover:text-purple-900">Clients</a>
                <a href="#" className="text-gray-500 hover:text-purple-900">Rankings</a>
                <a href="#" className="text-gray-500 hover:text-purple-900">Content</a>
                <a href="#" className="text-gray-500 hover:text-purple-900">Reports</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">Administrator</div>
              <Button variant="outline" asChild>
                <a href="/">Sign Out</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="mt-2 text-sm text-gray-600">
            Overview of your Google Business Profile management platform
          </p>
        </div>

        {/* Stats Overview */}
        <div className="px-4 sm:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white overflow-hidden shadow">
              <CardContent className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-lg font-medium text-gray-900">0</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Clients
                      </dt>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow">
              <CardContent className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-lg font-medium text-gray-900">0</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Profiles
                      </dt>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow">
              <CardContent className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-lg font-medium text-gray-900">0</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Keywords Tracked
                      </dt>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow">
              <CardContent className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-lg font-medium text-gray-900">0</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Content Generated
                      </dt>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Sections */}
        <div className="mt-8 px-4 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Client Management */}
            <Card className="bg-white shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900">
                  Client Management
                </CardTitle>
                <CardDescription>
                  Connect and manage Google Business Profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  Add New Client
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Import Client Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View All Clients
                </Button>
              </CardContent>
            </Card>

            {/* 35-Point Geo-Grid Ranking */}
            <Card className="bg-white shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900">
                  35-Point Geo-Grid Ranking
                </CardTitle>
                <CardDescription>
                  Comprehensive local search tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  Configure Tracking
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Rankings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Historical Data
                </Button>
              </CardContent>
            </Card>

            {/* AI Content Generation */}
            <Card className="bg-white shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900">
                  AI Content Generation
                </CardTitle>
                <CardDescription>
                  Claude-powered content creation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  Generate Content
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Content Library
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Brand Voice Setup
                </Button>
              </CardContent>
            </Card>

            {/* Review Management */}
            <Card className="bg-white shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900">
                  Review Management
                </CardTitle>
                <CardDescription>
                  Automated review responses and monitoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  Review Dashboard
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  AI Response Setup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Sentiment Analysis
                </Button>
              </CardContent>
            </Card>

            {/* Competitor Analysis */}
            <Card className="bg-white shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900">
                  Competitor Analysis
                </CardTitle>
                <CardDescription>
                  Track and analyze competitor performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  Add Competitors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Analysis Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Market Share Data
                </Button>
              </CardContent>
            </Card>

            {/* LeadRank Sales Tool */}
            <Card className="bg-white shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900">
                  LeadRank Sales Tool
                </CardTitle>
                <CardDescription>
                  Lead generation and sales pipeline
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  Lead Dashboard
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Sales Pipeline
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Conversion Tracking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
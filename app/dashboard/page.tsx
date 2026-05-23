'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">RevRank.ai v2</h1>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            <div className="px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-purple-900 rounded-md">
                <span className="ml-3">Dashboard</span>
              </a>
            </div>
            <div className="mt-1 px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-900 hover:bg-gray-50 rounded-md">
                <span className="ml-3">Client Management</span>
              </a>
            </div>
            <div className="mt-1 px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-900 hover:bg-gray-50 rounded-md">
                <span className="ml-3">35-Point Geo-Grid</span>
              </a>
            </div>
            <div className="mt-1 px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-900 hover:bg-gray-50 rounded-md">
                <span className="ml-3">AI Content</span>
              </a>
            </div>
            <div className="mt-1 px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-900 hover:bg-gray-50 rounded-md">
                <span className="ml-3">Review Management</span>
              </a>
            </div>
            <div className="mt-1 px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-900 hover:bg-gray-50 rounded-md">
                <span className="ml-3">Competitor Analysis</span>
              </a>
            </div>
            <div className="mt-1 px-3">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-900 hover:bg-gray-50 rounded-md">
                <span className="ml-3">LeadRank Sales</span>
              </a>
            </div>
          </nav>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
            <Button variant="outline" asChild className="w-full">
              <a href="/">Sign Out</a>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                  <p className="text-sm text-gray-600">Overview of your Google Business Profile management platform</p>
                </div>
                <div className="text-sm text-gray-600">
                  Welcome, Administrator
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-gray-900">0</div>
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

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-gray-900">0</div>
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

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-gray-900">0</div>
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

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-gray-900">0</div>
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

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Client Management */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Client Management
                  </CardTitle>
                  <CardDescription>
                    Connect and manage Google Business Profiles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    Add New Client
                  </Button>
                  <Button variant="outline" className="w-full">
                    Import Client Data
                  </Button>
                </CardContent>
              </Card>

              {/* 35-Point Geo-Grid */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    35-Point Geo-Grid Ranking
                  </CardTitle>
                  <CardDescription>
                    Comprehensive local search tracking
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    Configure Tracking
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Rankings
                  </Button>
                </CardContent>
              </Card>

              {/* AI Content */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    AI Content Generation
                  </CardTitle>
                  <CardDescription>
                    Claude-powered content creation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    Generate Content
                  </Button>
                  <Button variant="outline" className="w-full">
                    Content Library
                  </Button>
                </CardContent>
              </Card>

              {/* Review Management */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Review Management
                  </CardTitle>
                  <CardDescription>
                    Automated review responses and monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    Review Dashboard
                  </Button>
                  <Button variant="outline" className="w-full">
                    AI Response Setup
                  </Button>
                </CardContent>
              </Card>

              {/* Competitor Analysis */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Competitor Analysis
                  </CardTitle>
                  <CardDescription>
                    Track and analyze competitor performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    Add Competitors
                  </Button>
                  <Button variant="outline" className="w-full">
                    Analysis Reports
                  </Button>
                </CardContent>
              </Card>

              {/* LeadRank Sales */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    LeadRank Sales Tool
                  </CardTitle>
                  <CardDescription>
                    Lead generation and sales pipeline
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    Lead Dashboard
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sales Pipeline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
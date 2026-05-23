'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">RevRank.ai v2</h1>
              <span className="ml-4 text-sm text-gray-500">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
          <p className="text-gray-600 mt-2">Manage your Google Business Profile platform</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-500">No clients yet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-500">GBP profiles connected</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rank Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-500">Keywords tracked</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-500">Posts generated</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Client Management */}
          <Card>
            <CardHeader>
              <CardTitle>Client Management</CardTitle>
              <CardDescription>Add and manage client Google Business Profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Add New Client</Button>
              <Button variant="outline" className="w-full">Import Clients</Button>
            </CardContent>
          </Card>

          {/* Rank Tracking Setup */}
          <Card>
            <CardHeader>
              <CardTitle>35-Point Geo-Grid Ranking</CardTitle>
              <CardDescription>Set up local search rank tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Configure Tracking</Button>
              <Button variant="outline" className="w-full">View Rankings</Button>
            </CardContent>
          </Card>

          {/* AI Content */}
          <Card>
            <CardHeader>
              <CardTitle>AI Content Generation</CardTitle>
              <CardDescription>Create Claude-powered content for clients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Generate Content</Button>
              <Button variant="outline" className="w-full">Content Library</Button>
            </CardContent>
          </Card>

          {/* Review Management */}
          <Card>
            <CardHeader>
              <CardTitle>Review Management</CardTitle>
              <CardDescription>Monitor and respond to reviews</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Review Dashboard</Button>
              <Button variant="outline" className="w-full">AI Responses</Button>
            </CardContent>
          </Card>

          {/* Competitor Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Competitor Analysis</CardTitle>
              <CardDescription>Track competitor performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Add Competitors</Button>
              <Button variant="outline" className="w-full">Analysis Reports</Button>
            </CardContent>
          </Card>

          {/* LeadRank Sales */}
          <Card>
            <CardHeader>
              <CardTitle>LeadRank Sales Tool</CardTitle>
              <CardDescription>Lead generation and sales pipeline</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Lead Dashboard</Button>
              <Button variant="outline" className="w-full">Sales Pipeline</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
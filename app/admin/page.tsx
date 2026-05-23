'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple hardcoded admin check for in-house use
    if (email === 'admin@revrank.ai' && password === 'revrank2026') {
      window.location.href = '/dashboard'
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header matching homepage */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">RevRank.ai v2</h1>
              <span className="ml-4 text-sm text-gray-500">Admin Access</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Admin Dashboard Access
            </h2>
            <p className="text-gray-600">
              Sign in to manage your Google Business Profile platform
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Administrator Login</CardTitle>
              <CardDescription>Enter your credentials to access the RevRank.ai v2 dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@revrank.ai"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Access Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
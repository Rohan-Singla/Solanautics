"use client"

import { useState } from "react"
import { Bell, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WhaleLeaderboard } from "./Whale-Leaderboard"
import { SideNav } from "./Side-Nav"
import { StatCard } from "./Stats-Card"
import { useMobile } from "@/hooks/use-mobile"

export function DashboardPage() {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("leaderboard")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {!isMobile && <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />}

      <div className="flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-800 bg-gray-900/80 px-4 py-3 backdrop-blur-md">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 border-gray-800 bg-gray-900 p-0">
                <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
              </SheetContent>
            </Sheet>
          )}

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
              <span className="text-sm font-bold text-white">SW</span>
            </div>
            {!isMobile && <h1 className="text-lg font-bold text-white">Solana Whale Tracker</h1>}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Input
                placeholder="Search wallets..."
                className="w-full rounded-full border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-purple-500 md:w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500"></span>
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" className="hidden items-center gap-2 md:flex">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span>Connect Wallet</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <main className="px-4 py-6 md:px-6">
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <StatCard
              title="Total Whales Tracked"
              value="1,248"
              change="+12"
              changeType="positive"
              gradientFrom="from-purple-600"
              gradientTo="to-indigo-600"
            />
            <StatCard
              title="Volume Today"
              value="$42.8M"
              change="+18%"
              changeType="positive"
              gradientFrom="from-blue-600"
              gradientTo="to-cyan-600"
            />
            <StatCard
              title="Most Active Whale"
              value="sol...4x8j"
              subValue="$8.2M volume"
              gradientFrom="from-pink-600"
              gradientTo="to-purple-600"
            />
          </div>

          <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
            <CardHeader className="border-b border-gray-800 pb-3">
              <CardTitle className="text-xl font-bold text-white">Whale Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <WhaleLeaderboard />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WhaleLeaderboard } from "./Whale-Leaderboard"
import { SideNav } from "./Side-Nav"
import { useMobile } from "@/hooks/use-mobile"
import { WalletTracker } from "./Wallet-Tracker"

export function DashboardPage() {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("walletracking");

  return (
    <div className="flex min-h-screen bg-black">
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
        </header>

        <main className="px-4 py-6 md:px-6">

          <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
            <CardHeader className="border-b border-gray-800 pb-3">
              <CardTitle className="text-xl font-bold text-white">Track Wallets and Recent Txs</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <WalletTracker />
              <WhaleLeaderboard />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

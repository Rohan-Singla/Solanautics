"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WhaleLeaderboard } from "./Whale-Leaderboard"
import { SideNav } from "./Side-Nav"
import { StatCard } from "./Stats-Card"
import { useMobile } from "@/hooks/use-mobile"
import axios from 'axios'
import { WalletTracker } from "./Wallet-Tracker"

export function DashboardPage() {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("leaderboard");
  const [wallets, setWallets] = useState([]);
  const [whales, setWhales] = useState([]);

  // Function to handle adding a wallet address
  const addWallet = (walletAddress: string) => {
    setWallets((prev) => [...prev, walletAddress]);
  };

  // Function to fetch transactions for all added wallets
  const fetchWhales = async () => {
    try {
      const responses = await Promise.all(
        wallets.map(async (walletAddress) => {
          const res = await axios.post('/api/whales', { walletAddress });
          return res.data;
        })
      );

      // Update the whales state with the fetched data
      setWhales(responses);
    } catch (err) {
      console.error('Error fetching whales:', err);
    }
  };

  // Fetch whales when wallets change
  useEffect(() => {
    if (wallets.length > 0) {
      fetchWhales();
    }
  }, [wallets]);

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
              <CardTitle className="text-xl font-bold text-white">Track Wallets</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <WalletTracker onAddWallet={''}/>
              <WhaleLeaderboard />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

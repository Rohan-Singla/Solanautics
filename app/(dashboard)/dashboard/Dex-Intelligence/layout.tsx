"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SideNav } from "../components/Side-Nav"
import { StatCard } from "../components/Stats-Card"
import { WhaleLeaderboard } from "../components/Whale-Leaderboard"
import { useMobile } from "@/hooks/use-mobile"
import axios from "axios"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("all")
  const [whales, setWhales] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchWhales = async () => {
//       try {
//         setLoading(true)
//         const res = await axios.get('/api/whales')
//         setWhales(res.data)
//       } catch (err) {
//         console.error('Error fetching whales:', err)
//         setError('Failed to load whale data')
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchWhales()
//   }, [])

  const renderDefaultContent = () => {
    if (loading) {
      return <div className="text-white">Loading...</div>
    }
    if (error) {
      return <div className="text-red-500">{error}</div>
    }

    switch (activeTab) {
      case "all":
        return (
          <>
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
                <CardTitle className="text-xl font-bold text-white">All Whale Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
               
              </CardContent>
            </Card>
          </>
        )
      case "leaderboard":
        return (
          <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
            <CardHeader className="border-b border-gray-800 pb-3">
              <CardTitle className="text-xl font-bold text-white">Whale Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
             
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      {!isMobile && <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />}

      <div className="flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-800 bg-gray-900/80 px-4 py-4 backdrop-blur-md">
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
          <h1 className="text-lg font-semibold text-white">DEX Intelligence</h1>
        </header>

        <main className="px-4 py-6 md:px-6">
          {children ? children : renderDefaultContent()}
        </main>
      </div>
    </div>
  )
}
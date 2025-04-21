"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNav_price_alert } from "./side-nav";
import { StatCard_price_alert } from "./stats-card";
import { Leaderboard_price_alerts } from "./leaderboard-tokens";
import { useMobile } from "@/hooks/use-mobile";
import { LiveDataCard_price_alert } from "./live-data"; // ✅ NEW IMPORT
import LiveChart from "./live-chart"; // ✅ Updated Import

export function DashboardPage_priceAlerts() {
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState("leaderboard");

  const solPrice = "$158.34";
  const solPriceChange = "+2.5%";

  return (
    <div className="flex min-h-screen bg-black text-white">
      {!isMobile && <SideNav_price_alert activeTab={activeTab} setActiveTab={setActiveTab} />}

      <div className="flex-1">
        {/* Header */}
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
                <SideNav_price_alert activeTab={activeTab} setActiveTab={setActiveTab} />
              </SheetContent>
            </Sheet>
          )}
          <h1 className="text-xl font-bold text-white">Price Alerts Dashboard</h1>
        </header>

        {/* Main Content */}
        <main className="px-4 py-6 md:px-6 space-y-6">
          {activeTab === "live-chart" ? (
            <LiveChart /> // Show LiveChart when "Live Chart" tab is active
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatCard_price_alert
                  title="SOL Price"
                  value={solPrice}
                  change={solPriceChange}
                  changeType="positive"
                  gradientFrom="from-blue-600"
                  gradientTo="to-cyan-600"
                  sentimentTag="Bullish"
                  lastUpdated="Just now"
                  chartData={[153, 155, 157, 156, 158, 158.5, 158.34]} // 🧮 Chart Data Example
                />
                <LiveDataCard_price_alert /> {/* ✅ Updated Card */}
              </div>

              {/* Set Alerts Section */}
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 shadow-md">
                <h2 className="text-lg font-semibold text-white mb-2">Set Alerts – Don’t wanna miss out on SOL swings?</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-gray-400">Receive alerts of SOL on Telegram</p>
                  <Button className="mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700">Register Now</Button>
                </div>
                <p className="mt-4 text-sm text-gray-500">Want personalized alerts?</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-md border border-gray-700 bg-gray-800 p-4 hover:bg-gray-700 cursor-pointer transition">
                    <h4 className="text-white font-semibold mb-1">Volatility Alerts</h4>
                    <p className="text-sm text-gray-400">Massive up or dip alerts</p>
                  </div>
                  <div className="rounded-md border border-gray-700 bg-gray-800 p-4 hover:bg-gray-700 cursor-pointer transition">
                    <h4 className="text-white font-semibold mb-1">Set Price Alert</h4>
                    <p className="text-sm text-gray-400">Customize your alert thresholds</p>
                  </div>
                </div>
              </div>

              {/* Leaderboard Section */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Top Performing Tokens</h2>
                <Leaderboard_price_alerts />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

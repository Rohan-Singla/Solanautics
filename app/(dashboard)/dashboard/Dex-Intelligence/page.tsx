// pages/dex-intelligence.tsx (or your page file)
"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpDown, ExternalLink, ChevronDown, AlertTriangle, RefreshCw, Wallet } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMobile } from "@/hooks/use-mobile";

// Types for our data
interface PoolInfo {
  pool_address: string;
  program_id: string;
  token1?: string;
  token1_account?: string;
  token2?: string;
  token2_account?: string;
  total_volume_24h?: number;
  total_trade_24h?: number;
  created_time?: number;
}

interface PoolDetails {
  pool_address: string;
  program_id: string;
  tokens_info: {
    token: string;
    token_account: string;
    amount: number;
  }[];
  create_tx_hash: string;
  create_block_time: number;
  creator: string;
  lp_token: string;
}

interface PoolMetrics {
  pool_address: string;
  program_id: string;
  total_volume_24h: number;
  total_volume_change_24h: number;
  total_trades_24h: number;
  total_trades_change_24h: number;
  days: {
    day: number;
    value: number;
  }[];
}

interface DexData {
  totalLiquidity: number;
  volume24h: number;
  activePools: number;
  liquidityHistory: { time: string; liquidity: number }[];
  swapActivity: { name: string; value: number; color: string }[];
  recentAlerts: {
    time: string;
    alert: string;
    severity: "High" | "Medium" | "Low";
    dex: string;
  }[];
  topPools: PoolInfo[];
  poolDetails: Record<string, PoolDetails>;
  poolMetrics: Record<string, PoolMetrics>;
}

// Default data for initial render
const defaultDexData: DexData = {
  totalLiquidity: 256,
  volume24h: 84,
  activePools: 340,
  liquidityHistory: [
    { time: "12AM", liquidity: 200 },
    { time: "3AM", liquidity: 240 },
    { time: "6AM", liquidity: 280 },
    { time: "9AM", liquidity: 300 },
    { time: "12PM", liquidity: 320 },
    { time: "3PM", liquidity: 400 },
    { time: "6PM", liquidity: 420 },
    { time: "9PM", liquidity: 410 },
  ],
  swapActivity: [
    { name: "Buy", value: 65, color: "#4ADE80" },
    { name: "Sell", value: 35, color: "#F87171" },
  ],
  recentAlerts: [
    {
      time: "5 mins ago",
      alert: "Unusual Volume Spike",
      severity: "High",
      dex: "Raydium",
    },
    {
      time: "10 mins ago",
      alert: "Sudden Price Movement",
      severity: "Medium",
      dex: "Orca",
    },
    {
      time: "1 hour ago",
      alert: "Large Arbitrage Detected",
      severity: "High",
      dex: "Saber",
    },
  ],
  topPools: [],
  poolDetails: {},
  poolMetrics: {},
};

const dexOptions = ["Raydium", "Orca", "Saber"];
const UPDATE_NOTE = "Data is updated twice daily at 00:00 and 12:00 UTC.";

export default function DexIntelligencePage() {
  const isMobile = useMobile();
  const [selectedDex, setSelectedDex] = useState(dexOptions[0]);
  const [dexData, setDexData] = useState<DexData>(defaultDexData);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [selectedPool, setSelectedPool] = useState<string | null>(null);
  const [alertFilter, setAlertFilter] = useState<string>("all");

  // Fetch all data from API
  const fetchAllData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/fetch-dex-data");
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      const { data } = await response.json();

      const pools: PoolInfo[] = data.topPools || [];
      const poolDetails = data.poolDetails || {};
      const poolMetrics = data.poolMetrics || {};

      // Calculate totals
      const totalVolume24h = pools.reduce(
        (sum: number, pool: PoolInfo) => sum + (pool.total_volume_24h || 0),
        0
      );
      const totalTrades24h = pools.reduce(
        (sum: number, pool: PoolInfo) => sum + (pool.total_trade_24h || 0),
        0
      );

      // Get historical data from first pool's metrics
      const firstPoolMetrics = poolMetrics[pools[0]?.pool_address];
      const historyData = firstPoolMetrics?.days?.map((day: { day: { toString: () => string; }; value: number; }) => ({
        time: new Date(
          day.day.toString().replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
        ).toLocaleTimeString([], { hour: "2-digit" }),
        liquidity: day.value / 1000000,
      })) || defaultDexData.liquidityHistory;

      // Generate buy/sell ratio based on volume change
      const buyRatio =
        pools.length > 0
          ? Math.min(
              70,
              Math.max(30, 50 + (firstPoolMetrics?.total_volume_change_24h || 0) / 10)
            )
          : 65;

      setDexData((prev) => ({
        ...prev,
        totalLiquidity: totalVolume24h / 1000000,
        volume24h: totalVolume24h / 1000000,
        activePools: pools.length,
        liquidityHistory: historyData,
        swapActivity: [
          { name: "Buy", value: buyRatio, color: "#4ADE80" },
          { name: "Sell", value: 100 - buyRatio, color: "#F87171" },
        ],
        recentAlerts: generateAlerts(pools, poolMetrics),
        topPools: pools,
        poolDetails,
        poolMetrics,
      }));

      setLastUpdated(data.lastUpdated);
    } catch (error) {
      console.error("Error fetching Solana DEX data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Manual refresh trigger
  const refreshData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/fetch-dex-data", { method: "POST" });
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      const { data } = await response.json();

      const pools: PoolInfo[] = data.topPools || [];
      const poolDetails = data.poolDetails || {};
      const poolMetrics = data.poolMetrics || {};

      // Calculate totals
      const totalVolume24h = pools.reduce(
        (sum: number, pool: PoolInfo) => sum + (pool.total_volume_24h || 0),
        0
      );
      const totalTrades24h = pools.reduce(
        (sum: number, pool: PoolInfo) => sum + (pool.total_trade_24h || 0),
        0
      );

      // Get historical data from first pool's metrics
      const firstPoolMetrics = poolMetrics[pools[0]?.pool_address];
      const historyData = firstPoolMetrics?.days?.map((day: { day: { toString: () => string; }; value: number; }) => ({
        time: new Date(
          day.day.toString().replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
        ).toLocaleTimeString([], { hour: "2-digit" }),
        liquidity: day.value / 1000000,
      })) || defaultDexData.liquidityHistory;

      // Generate buy/sell ratio based on volume change
      const buyRatio =
        pools.length > 0
          ? Math.min(
              70,
              Math.max(30, 50 + (firstPoolMetrics?.total_volume_change_24h || 0) / 10)
            )
          : 65;

      setDexData((prev) => ({
        ...prev,
        totalLiquidity: totalVolume24h / 1000000,
        volume24h: totalVolume24h / 1000000,
        activePools: pools.length,
        liquidityHistory: historyData,
        swapActivity: [
          { name: "Buy", value: buyRatio, color: "#4ADE80" },
          { name: "Sell", value: 100 - buyRatio, color: "#F87171" },
        ],
        recentAlerts: generateAlerts(pools, poolMetrics),
        topPools: pools,
        poolDetails,
        poolMetrics,
      }));

      setLastUpdated(data.lastUpdated);
    } catch (error) {
      console.error("Error refreshing Solana DEX data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  // Helper to generate alerts based on metrics
  const generateAlerts = (
    pools: PoolInfo[],
    metrics: Record<string, PoolMetrics>
  ): { time: string; alert: string; severity: "High" | "Medium" | "Low"; dex: string }[] => {
    const alerts: { time: string; alert: string; severity: "High" | "Medium" | "Low"; dex: string }[] = [];

    pools.slice(0, 3).forEach((pool) => {
      const metric = metrics[pool.pool_address];
      if (!metric) return;

      if (Math.abs(metric.total_volume_change_24h) > 30) {
        alerts.push({
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          alert: `Volume ${metric.total_volume_change_24h > 0 ? "spike" : "drop"} in ${pool.token1?.slice(0, 4)}.../${
            pool.token2?.slice(0, 4)
          }...`,
          severity: Math.abs(metric.total_volume_change_24h) > 50 ? "High" : "Medium",
          dex: selectedDex,
        });
      }
    });

    return alerts.length > 0 ? alerts : defaultDexData.recentAlerts;
  };

  // Sort handling
  const handleSort = (column: string) => {
    // Implement sorting logic here if needed
  };

  // Filter alerts based on selected severity
  const filteredAlerts = dexData.recentAlerts.filter((alert) => {
    if (alertFilter === "all") return true;
    return alert.severity.toLowerCase() === alertFilter.toLowerCase();
  });

  return (
    <div className="space-y-6" id="dex-intelligence">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Solana DEX Intelligence</h2>
          <p className="text-xs text-gray-400 mt-1">{UPDATE_NOTE}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-900 border-gray-700 hover:bg-gray-800 text-white"
            onClick={refreshData}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Loading..." : "Refresh Now"}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-gray-900 border-gray-700 hover:bg-gray-800 text-white">
                {selectedDex} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white">
              {dexOptions.map((dex) => (
                <DropdownMenuItem key={dex} onClick={() => setSelectedDex(dex)} className="hover:bg-gray-800">
                  {dex}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-400">Total Liquidity</CardDescription>
            <CardTitle className="text-2xl text-white flex items-center">
              ${dexData.totalLiquidity.toFixed(2)}M
              <span className="ml-2 text-sm text-green-400 flex items-center">
                +2.4%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-gray-400">
              {lastUpdated ? `Updated: ${new Date(lastUpdated).toLocaleTimeString()}` : "Loading..."}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-400">24h Volume</CardDescription>
            <CardTitle className="text-2xl text-white flex items-center">
              ${dexData.volume24h.toFixed(2)}M
              <span className="ml-2 text-sm text-red-400 flex items-center">
                -1.2%
              </span>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-400">Active Pools</CardDescription>
            <CardTitle className="text-2xl text-white flex items-center">
              {dexData.activePools}
              <span className="ml-2 text-sm text-green-400 flex items-center">
                +5
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Activity Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Liquidity Chart */}
        <Card className="bg-gray-900 border-gray-800 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white text-lg">Liquidity Over Time</CardTitle>
            <CardDescription className="text-gray-400">24 hour overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dexData.liquidityHistory} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLiquidity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#6B7280" tick={{ fill: "#9CA3AF" }} />
                  <YAxis stroke="#6B7280" tick={{ fill: "#9CA3AF" }} tickFormatter={(value) => `$${value}M`} />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "#18181B",
                      borderColor: "#3F3F46",
                      color: "#fff",
                    }}
                    formatter={(value) => [`$${value}M`, "Liquidity"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="liquidity"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorLiquidity)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Swap Activity Pie Chart */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-lg">Swap Activity</CardTitle>
            <CardDescription className="text-gray-400">Buy vs Sell Percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dexData.swapActivity}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {dexData.swapActivity.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "#18181B",
                      borderColor: "#3F3F46",
                      color: "white",
                    }}
                    itemStyle={{
                      color: "white",
                    }}
                    labelStyle={{
                      color: "white",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pool List with Details */}
      <div className="space-y-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Top Liquidity Pools</h3>
          <Tabs
            value={selectedPool || "all"}
            onValueChange={(val) => setSelectedPool(val === "all" ? null : val)}
            className="w-auto"
          >
            <TabsList className="bg-gray-800">
              <TabsTrigger value="all" className="data-[state=active]:bg-gray-700 text-slate-100">
                All Pools
              </TabsTrigger>
              {dexData.topPools?.slice(0, 3).map((pool) => (
                <TabsTrigger
                  key={pool.pool_address}
                  value={pool.pool_address}
                  className="data-[state=active]:bg-gray-700 text-slate-100"
                >
                  {`${pool.token1?.slice(0, 4)}.../${pool.token2?.slice(0, 4)}...`}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Pool Statistics */}
        {selectedPool && dexData.poolMetrics[selectedPool] && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">24h Volume</CardDescription>
                <CardTitle className="text-2xl text-white">
                  ${(dexData.poolMetrics[selectedPool].total_volume_24h / 1000000).toFixed(2)}M
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm flex items-center">
                  {dexData.poolMetrics[selectedPool].total_volume_change_24h > 0 ? (
                    <span className="text-green-400">
                      ↑ {dexData.poolMetrics[selectedPool].total_volume_change_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-red-400">
                      ↓ {Math.abs(dexData.poolMetrics[selectedPool].total_volume_change_24h).toFixed(2)}%
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">24h Trades</CardDescription>
                <CardTitle className="text-2xl text-white">
                  {dexData.poolMetrics[selectedPool].total_trades_24h}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm flex items-center">
                  {dexData.poolMetrics[selectedPool].total_trades_change_24h > 0 ? (
                    <span className="text-green-400">
                      ↑ {dexData.poolMetrics[selectedPool].total_trades_change_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-red-400">
                      ↓ {Math.abs(dexData.poolMetrics[selectedPool].total_trades_change_24h).toFixed(2)}%
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>

            {dexData.poolDetails[selectedPool]?.tokens_info.map((token, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">Token {index + 1}</CardDescription>
                  <CardTitle className="text-xl text-white">
                    {token.token.slice(0, 4)}...{token.token.slice(-4)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-300">Amount: {token.amount.toFixed(4)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pool List Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/80 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                <th className="whitespace-nowrap px-4 py-3">Pool</th>
                <th className="whitespace-nowrap px-4 py-3">Tokens</th>
                <th className="whitespace-nowrap px-4 py-3">24h Volume</th>
                <th className="whitespace-nowrap px-4 py-3">Trades</th>
                <th className="whitespace-nowrap px-4 py-3">Change (24h)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {dexData.topPools?.map((pool) => {
                const metrics = dexData.poolMetrics[pool.pool_address];
                return (
                  <tr
                    key={pool.pool_address}
                    className={`bg-gray-900/30 text-sm text-gray-300 transition-colors hover:bg-gray-800/50 ${
                      selectedPool === pool.pool_address ? "bg-gray-800/70" : ""
                    }`}
                    onClick={() => setSelectedPool(pool.pool_address)}
                  >
                    <td className="whitespace-nowrap px-4 py-3">
                      <a
                        href={`https://solscan.io/account/${pool.pool_address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:underline flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {pool.pool_address.slice(0, 4)}...{pool.pool_address.slice(-4)}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {pool.token1
                        ? `${pool.token1.slice(0, 4)}.../${pool.token2?.slice(0, 4)}...`
                        : "Multiple tokens"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      ${pool.total_volume_24h ? (pool.total_volume_24h / 1000000).toFixed(2) : 0}M
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">{pool.total_trade_24h || 0}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {metrics ? (
                        <div className="flex items-center">
                          {metrics.total_volume_change_24h > 0 ? (
                            <span className="text-green-400">
                              ↑ {metrics.total_volume_change_24h.toFixed(2)}%
                            </span>
                          ) : (
                            <span className="text-red-400">
                              ↓ {Math.abs(metrics.total_volume_change_24h).toFixed(2)}%
                            </span>
                          )}
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Recent Alerts</h3>
        <Tabs defaultValue="all" className="w-auto" value={alertFilter} onValueChange={setAlertFilter}>
          <TabsList className="bg-gray-800">
            <TabsTrigger value="all" className="data-[state=active]:bg-gray-700 text-slate-100">
              All
            </TabsTrigger>
            <TabsTrigger value="high" className="data-[state=active]:bg-gray-700 text-slate-100">
              High
            </TabsTrigger>
            <TabsTrigger value="medium" className="data-[state=active]:bg-gray-700 text-slate-100">
              Medium
            </TabsTrigger>
            <TabsTrigger value="low" className="data-[state=active]:bg-gray-700 text-slate-100">
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 bg-gray-900/80 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
              <th className="whitespace-nowrap px-4 py-3">
                <button className="flex items-center gap-1" onClick={() => handleSort("time")}>
                  Time
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="whitespace-nowrap px-4 py-3">
                <button className="flex items-center gap-1" onClick={() => handleSort("alert")}>
                  Alert
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              {!isMobile && (
                <th className="whitespace-nowrap px-4 py-3">
                  <button className="flex items-center gap-1" onClick={() => handleSort("dex")}>
                    DEX
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
              )}
              <th className="whitespace-nowrap px-4 py-3">
                <button className="flex items-center gap-1" onClick={() => handleSort("severity")}>
                  Severity
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="whitespace-nowrap px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredAlerts.map((alert, index) => (
              <tr
                key={index}
                className="bg-gray-900/30 text-sm text-gray-300 transition-colors hover:bg-gray-800/50"
              >
                <td className="whitespace-nowrap px-4 py-3">{alert.time}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-white">{alert.alert}</span>
                  </div>
                </td>
                {!isMobile && (
                  <td className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-blue-400" />
                      <span>{alert.dex}</span>
                    </div>
                  </td>
                )}
                <td className="whitespace-nowrap px-4 py-3">
                  <Badge
                    variant="outline"
                    className={
                      alert.severity === "High"
                        ? "border-red-500 text-red-400 bg-red-950/30"
                        : alert.severity === "Medium"
                        ? "border-amber-500 text-amber-400 bg-amber-950/30"
                        : "border-blue-500 text-blue-400 bg-blue-950/30"
                    }
                  >
                    {alert.severity}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    View Details
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
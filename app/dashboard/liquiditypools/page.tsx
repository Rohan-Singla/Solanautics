"use client";

import { useState, useEffect, useMemo } from "react";
import {
    AlertCircle,
    ChevronDown,
    ExternalLink,
    Search,
    Wallet,
} from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { PoolMetricsChart } from "@/components/pool-metrics-chart";
import { PoolCard } from "@/components/pool-card";
import { PoolCardSkeleton } from "@/components/pool-card-skeleton"; // Ensure this file exists or update the path
import { useMobile } from "@/hooks/use-mobile";
import axios from "axios";

// Define types (from types/dex.ts)
interface PoolInfo {
    volume_24h: number;
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
    tokens_info: { token: string; token_account: string; amount: number }[];
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
    days: { day: number; value: number }[];
}

interface DexData {
    topPools: PoolInfo[];
    poolDetails: Record<string, PoolDetails>;
    poolMetrics: Record<string, PoolMetrics>;
    lastUpdated: string;
}

interface Alert {
    time: string;
    message: string;
    pool: string;
    severity: "High" | "Medium" | "Low";
}

export default function DashboardPage() {
    const isMobile = useMobile();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedPool, setSelectedPool] = useState<string | null>(null);
    const [alertFilter, setAlertFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [sortBy, setSortBy] = useState({ field: "volume", direction: "desc" });
    const [page, setPage] = useState(1);
    const [chartMetric, setChartMetric] = useState<"volume" | "trades">("volume");
    const poolsPerPage = 12;

    const [data, setData] = useState<DexData>({
        topPools: [],
        poolDetails: {},
        poolMetrics: {},
        lastUpdated: new Date().toISOString(),
    });

    // Get pool display name
    const getPoolName = (pool: PoolInfo, details: PoolDetails) => {
        if (pool.token1 && pool.token2) return `${shortenAddress(pool.token1)}/${shortenAddress(pool.token2)}`;
        if (details.tokens_info.length >= 2) return `${shortenAddress(details.tokens_info[0].token)}/${shortenAddress(details.tokens_info[1].token)}`;
        return shortenAddress(pool.pool_address);
    };

    // Enhanced shorten address function
    const shortenAddress = (address: string | undefined) => {
        if (!address || typeof address !== "string") return "N/A";
        if (address.length <= 10) return address;
        return `${address.slice(0, 4)}...${address.slice(-4)}`;
    };

    // Fetch data from API
    const fetchData = async (isRefresh = false) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios({
                method: "POST",
                url: "/api/fetch-dex-data",
            });
            if (response.data.success) {
                setData(response.data.data);
                if (!selectedPool && response.data.data.topPools.length > 0) {
                    setSelectedPool(response.data.data.topPools[0].pool_address);
                }
            } else {
                throw new Error("API returned unsuccessful response");
            }
        } catch (err) {
            setError("Failed to load data. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial data fetch
    useEffect(() => {
        fetchData();
    }, []);

    // Generate alerts dynamically
    const alerts = useMemo(() => {
        const generatedAlerts: Alert[] = [];
        data.topPools.forEach((pool) => {
            const metrics = data.poolMetrics[pool.pool_address];
            const poolName = getPoolName(pool, data.poolDetails[pool.pool_address] || {
                tokens_info: [],
                pool_address: "",
                program_id: "",
                create_tx_hash: "",
                create_block_time: 0,
                creator: "",
                lp_token: "",
            });
            if (metrics?.total_volume_change_24h && metrics.total_volume_change_24h > 50) {
                generatedAlerts.push({
                    time: new Date().toISOString(),
                    message: `Volume spike detected for ${poolName}`,
                    pool: poolName,
                    severity: "High",
                });
            } else if (metrics?.total_volume_change_24h && metrics.total_volume_change_24h > 20) {
                generatedAlerts.push({
                    time: new Date().toISOString(),
                    message: `Moderate volume increase for ${poolName}`,
                    pool: poolName,
                    severity: "Medium",
                });
            }
        });
        return generatedAlerts.slice(0, 10);
    }, [data]);

    // Filter pools based on search query
    const filteredPools = useMemo(() => {
        return data.topPools.filter((pool) => {
            if (!searchQuery) return true;
            const searchLower = searchQuery.toLowerCase();
            return (
                (pool.token1?.toLowerCase().includes(searchLower) || false) ||
                (pool.token2?.toLowerCase().includes(searchLower) || false) ||
                pool.pool_address.toLowerCase().includes(searchLower)
            );
        });
    }, [data.topPools, searchQuery]);

    // Sort pools
    const sortedPools = useMemo(() => {
        return [...filteredPools].sort((a, b) => {
            const direction = sortBy.direction === "asc" ? 1 : -1;
            switch (sortBy.field) {
                case "volume":
                    return ((a.total_volume_24h || a.volume_24h) - (b.total_volume_24h || b.volume_24h)) * direction;
                case "trades":
                    return ((a.total_trade_24h || 0) - (b.total_trade_24h || 0)) * direction;
                case "age":
                    return ((a.created_time || 0) - (b.created_time || 0)) * direction;
                default:
                    return 0;
            }
        });
    }, [filteredPools, sortBy]);

    // Paginate pools
    const paginatedPools = useMemo(() => {
        const start = (page - 1) * poolsPerPage;
        return sortedPools.slice(start, start + poolsPerPage);
    }, [sortedPools, page]);

    // Filter alerts
    const filteredAlerts = useMemo(() => {
        if (alertFilter === "all") return alerts;
        return alerts.filter((alert) => alert.severity.toLowerCase() === alertFilter.toLowerCase());
    }, [alerts, alertFilter]);

    // Toggle sort direction or field
    const handleSort = (field: string) => {
        if (sortBy.field === field) {
            setSortBy({ ...sortBy, direction: sortBy.direction === "asc" ? "desc" : "asc" });
        } else {
            setSortBy({ field, direction: "desc" });
        }
    };

    // Load more pools
    const loadMore = () => {
        if (page * poolsPerPage < sortedPools.length) {
            setIsLoadingMore(true);
            setTimeout(() => {
                setPage(page + 1);
                setIsLoadingMore(false);
            }, 1000);
        }
    };

    // Format time
    const formatTime = (dateString: string | number | Date) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    };

    // Get selected pool data
    const selectedPoolData = useMemo(() => {
        if (!selectedPool) return null;
        const pool = data.topPools.find((p) => p.pool_address === selectedPool);
        if (!pool) return null;
        console.log("Selected Pool:", pool);
        console.log("PoolMetrics", data.poolMetrics[pool.pool_address].days);
        return {
            pool,
            details: data.poolDetails[pool.pool_address] || {
                pool_address: pool.pool_address,
                program_id: "",
                tokens_info: [],
                create_tx_hash: "",
                create_block_time: 0,
                creator: "",
                lp_token: "",
            },
            metrics: data.poolMetrics[pool.pool_address] || {
                pool_address: pool.pool_address,
                program_id: "",
                total_volume_24h: 0,
                total_volume_change_24h: 0,
                total_trades_24h: 0,
                total_trades_change_24h: 0,
                days: [],
            },
        };
    }, [selectedPool, data]);

    // Compute chart data from API
    const chartData = useMemo(() => {
        if (!selectedPoolData || !selectedPoolData.metrics.days) return [];
        return selectedPoolData.metrics.days.map((day) => ({
            date: new Date(day.day * 1000).toISOString(),
            value: day.value,
        }));
    }, [selectedPoolData, chartMetric]);



    if (isLoading && page === 1) {
        return <div className="text-white text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="container mx-auto max-w-full">
            {/* Pool Selection Dropdown */}
            <div className="mb-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800 h-12 text-sm"
                        >
                            <span className="truncate">
                                {selectedPoolData
                                    ? getPoolName(selectedPoolData.pool, selectedPoolData.details)
                                    : "Select a Pool"}
                            </span>
                            <ChevronDown className="ml-2 h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-900 border-gray-800 text-white max-h-60 overflow-y-auto w-full">
                        {data.topPools.map((pool) => (
                            <DropdownMenuItem
                                key={pool.pool_address}
                                onClick={() => setSelectedPool(pool.pool_address)}
                                className="truncate text-sm py-2"
                            >
                                {getPoolName(pool, data.poolDetails[pool.pool_address] || {
                                    tokens_info: [],
                                    pool_address: "",
                                    program_id: "",
                                    create_tx_hash: "",
                                    create_block_time: 0,
                                    creator: "",
                                    lp_token: "",
                                })}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Pool-Specific Stats Cards */}
            {selectedPoolData ? (
                <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
                        <CardHeader className="pb-2">
                            <CardDescription className="text-gray-400 text-xs">Volume 24h</CardDescription>
                            <CardTitle className="text-lg text-white flex items-center">
                                $
                                {selectedPoolData.metrics.total_volume_24h.toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                })}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-400">
                                Last updated: {data.lastUpdated ? formatTime(data.lastUpdated) : ""}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
                        <CardHeader className="pb-2">
                            <CardDescription className="text-gray-400 text-xs">Trades 24h</CardDescription>
                            <CardTitle className="text-lg text-white flex items-center">
                                {selectedPoolData.metrics.total_trades_24h.toLocaleString()}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-400 truncate">
                                {getPoolName(selectedPoolData.pool, selectedPoolData.details)}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
                        <CardHeader className="pb-2">
                            <CardDescription className="text-gray-400 text-xs">Volume Change 24h</CardDescription>
                            <CardTitle className="text-lg text-white flex items-center">
                                {selectedPoolData.metrics.total_volume_change_24h.toFixed(1)}%
                                <span
                                    className={`ml-2 text-sm ${selectedPoolData.metrics.total_volume_change_24h >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {selectedPoolData.metrics.total_volume_change_24h >= 0 ? "↑" : "↓"}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-400">Compared to previous 24h</p>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
                        <CardHeader className="pb-2">
                            <CardDescription className="text-gray-400 text-xs">Trades Change 24h</CardDescription>
                            <CardTitle className="text-lg text-white flex items-center">
                                {selectedPoolData.metrics.total_trades_change_24h.toFixed(1)}%
                                <span
                                    className={`ml-2 text-sm ${selectedPoolData.metrics.total_trades_change_24h >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {selectedPoolData.metrics.total_trades_change_24h >= 0 ? "↑" : "↓"}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-400">Compared to previous 24h</p >
                        </CardContent>
                    </Card>
                    <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
                        <CardHeader className="pb-2">
                            <CardDescription className="text-gray-400 text-xs">Creation Transaction</CardDescription>
                            <CardTitle className="text-lg text-white">
                                {shortenAddress(selectedPoolData.details.create_tx_hash)}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-400">
                                Created: {new Date(selectedPoolData.details.create_block_time * 1000).toLocaleDateString()}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <div className="mb-6 p-4 bg-yellow-900/50 text-yellow-400 rounded-md text-center">
                    Please select a pool to view its statistics.
                </div>
            )}

            {/* Search and Filters */}
            <div className="flex flex-col gap-3 mb-6">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        placeholder="Search by token or pool address..."
                        className="pl-10 bg-gray-900/50 border-gray-800 text-white placeholder-gray-400 h-12 text-sm w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex-1 border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800 h-12 text-sm"
                            >
                                Sort by: {sortBy.field.charAt(0).toUpperCase() + sortBy.field.slice(1)}
                                <ChevronDown className="ml-2 h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-900 border-gray-800 text-white w-full">
                            <DropdownMenuItem onClick={() => handleSort("volume")} className="text-sm py-2">
                                Volume
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSort("trades")} className="text-sm py-2">
                                Trades
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSort("age")} className="text-sm py-2">
                                Age
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex-1 border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800 h-12 text-sm"
                            >
                                Filters
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-gray-900 text-white">
                            <div className="mx-auto w-full max-w-sm">
                                <DrawerHeader>
                                    <DrawerTitle className="text-white">Filter Options</DrawerTitle>
                                    <DrawerDescription className="text-gray-400">
                                        Customize your dashboard view
                                    </DrawerDescription>
                                </DrawerHeader>
                                <div className="p-4 pb-0">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-medium text-gray-300">Minimum Volume</h4>
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                className="bg-gray-900/50 border-gray-800 text-white h-12 text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-medium text-gray-300">Pool Age</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800 h-10 text-sm"
                                                >
                                                    All Time
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800 h-10 text-sm"
                                                >
                                                    Last 7 Days
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800 h-10 text-sm"
                                                >
                                                    Last 30 Days
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-gray-800 bg-gray-800 text-white hover:bg-gray-800 h-10 text-sm"
                                                >
                                                    Last 90 Days
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-300">Show Advanced Metrics</span>
                                            <Switch checked={showAdvanced} onCheckedChange={setShowAdvanced} />
                                        </div>
                                    </div>
                                </div>
                                <DrawerFooter>
                                    <Button className="bg-purple-600 hover:bg-purple-700 h-12 text-sm">
                                        Apply Filters
                                    </Button>
                                    <DrawerClose asChild>
                                        <Button
                                            variant="outline"
                                            className="border-gray-800 bg-gray-900/50 text-white h-12 text-sm"
                                        >
                                            Cancel
                                        </Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>

            {/* Pool Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {isLoading || paginatedPools.length === 0
                    ? Array.from({ length: poolsPerPage }).map((_, index) => (
                        <PoolCardSkeleton key={index} isDarkMode={true} />
                    ))
                    : paginatedPools.map((pool) => (
                        <PoolCard
                            key={pool.pool_address}
                            pool={{
                                address: shortenAddress(pool.pool_address),
                                token1: shortenAddress(
                                    pool.token1 || data.poolDetails[pool.pool_address]?.tokens_info[0]?.token || "Unknown"
                                ),
                                token2: shortenAddress(
                                    pool.token2 || data.poolDetails[pool.pool_address]?.tokens_info[1]?.token || "Unknown"
                                ),
                                volume24h: data.poolMetrics[pool.pool_address]?.total_volume_24h || pool.volume_24h,
                                volumeChange: data.poolMetrics[pool.pool_address]?.total_volume_change_24h || 0,
                                trades24h: data.poolMetrics[pool.pool_address]?.total_trades_24h || pool.total_trade_24h || 0,
                                tradesChange: data.poolMetrics[pool.pool_address]?.total_trades_change_24h || 0,
                                createdAt: pool.created_time
                                    ? new Date(pool.created_time * 1000).toISOString()
                                    : new Date().toISOString(),
                                lpToken: shortenAddress(data.poolDetails[pool.pool_address]?.lp_token) || "Unknown",
                                creator: shortenAddress(data.poolDetails[pool.pool_address]?.creator) || "Unknown",
                            }}
                            isDarkMode={true}
                            onClick={() => setSelectedPool(pool.pool_address)}
                            isSelected={selectedPool === pool.pool_address}
                        />
                    ))}
            </div>

            {page * poolsPerPage < sortedPools.length && (
                <div className="text-center mb-8">
                    <Button
                        onClick={loadMore}
                        disabled={isLoading || isLoadingMore}
                        className="bg-purple-600 hover:bg-purple-700 h-12 text-sm px-6"
                    >
                        {isLoadingMore ? (
                            <span className="flex items-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Loading...
                            </span>
                        ) : (
                            "Load More"
                        )}
                    </Button>
                </div>
            )}

            {/* Pool-Specific Chart */}
            {selectedPoolData && (
                <div className="mb-8">
                    <Card className="border-gray-800 bg-gray-900/50 shadow-lg">
                        <CardHeader>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <CardTitle className="text-lg text-white truncate">
                                        {getPoolName(selectedPoolData.pool, selectedPoolData.details)} Metrics Over Time
                                    </CardTitle>
                                    <CardDescription className="text-gray-400 text-sm">
                                        Historical data for{" "}
                                        {getPoolName(selectedPoolData.pool, selectedPoolData.details)}
                                    </CardDescription>
                                </div>
                                <Tabs
                                    value={chartMetric}
                                    onValueChange={(value) => setChartMetric(value as "volume" | "trades")}
                                    className="w-full"
                                >
                                    <TabsList className="bg-gray-800 w-full grid grid-cols-2">
                                        <TabsTrigger
                                            value="volume"
                                            className="data-[state=active]:bg-purple-600 text-gray-200 text-sm py-2"
                                        >
                                            Volume
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="trades"
                                            className="data-[state=active]:bg-purple-600 text-gray-200 text-sm py-2"
                                        >
                                            Trades
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                        </CardHeader>
                        <CardContent className="p-2 sm:p-4">
                            <div className="overflow-x-auto">
                                <div className="w-full min-w-[300px]">
                                    <PoolMetricsChart data={chartData} isDarkMode={true} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Alerts Section */}
            <div className="mb-8">
                <div className="flex flex-col gap-3 mb-4">
                    <h2 className="text-lg font-bold text-white">Alerts & Notifications</h2>
                    <Tabs defaultValue="all" value={alertFilter} onValueChange={setAlertFilter} className="w-full">
                        <TabsList className="bg-gray-800 w-full grid grid-cols-4">
                            <TabsTrigger
                                value="all"
                                className="data-[state=active]:bg-purple-600 text-gray-200 text-sm py-2"
                            >
                                All
                            </TabsTrigger>
                            <TabsTrigger
                                value="high"
                                className="data-[state=active]:bg-purple-600 text-gray-200 text-sm py-2"
                            >
                                High
                            </TabsTrigger>
                            <TabsTrigger
                                value="medium"
                                className="data-[state=active]:bg-purple-600 text-gray-200 text-sm py-2"
                            >
                                Medium
                            </TabsTrigger>
                            <TabsTrigger
                                value="low"
                                className="data-[state=active]:bg-purple-600 text-gray-200 text-sm py-2"
                            >
                                Low
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-800 bg-gray-900/80 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                                <th className="whitespace-nowrap px-3 py-2">Time</th>
                                <th className="whitespace-nowrap px-3 py-2">Alert</th>
                                {!isMobile && <th className="whitespace-nowrap px-3 py-2">Pool</th>}
                                <th className="whitespace-nowrap px-3 py-2">Severity</th>
                                <th className="whitespace-nowrap px-3 py-2"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {filteredAlerts.map((alert, index) => (
                                <tr
                                    key={index}
                                    className="text-sm transition-colors bg-gray-900/30 text-gray-300 hover:bg-gray-800/50"
                                >
                                    <td className="whitespace-nowrap px-3 py-2">{formatTime(alert.time)}</td>
                                    <td className="px-3 py-2">
                                        <div className="flex items-center gap-2">
                                            <AlertCircle
                                                className={`h-4 w-4 ${alert.severity === "High"
                                                        ? "text-red-500"
                                                        : alert.severity === "Medium"
                                                            ? "text-amber-500"
                                                            : "text-cyan-500"
                                                    }`}
                                            />
                                            <span className="font-medium text-white truncate">{alert.message}</span>
                                        </div>
                                    </td>
                                    {!isMobile && (
                                        <td className="px-3 py-2">
                                            <div className="flex items-center gap-2">
                                                <Wallet className="h-4 w-4 text-purple-500" />
                                                <span className="truncate">{alert.pool}</span>
                                            </div>
                                        </td>
                                    )}
                                    <td className="whitespace-nowrap px-3 py-2">
                                        <Badge
                                            variant="outline"
                                            className={
                                                alert.severity === "High"
                                                    ? "border-red-500 text-red-400 bg-red-950/30"
                                                    : alert.severity === "Medium"
                                                        ? "border-amber-500 text-amber-400 bg-amber-950/30"
                                                        : "border-cyan-500 text-cyan-400 bg-cyan-950/30"
                                            }
                                        >
                                            {alert.severity}
                                        </Badge>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2 text-right">
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
        </div>
    );
}
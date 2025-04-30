"use client";

import { ExternalLink, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PoolCardProps {
  pool: {
    address: string;
    token1: string;
    token2: string;
    volume24h: number;
    volumeChange: number;
    trades24h: number;
    tradesChange: number;
    createdAt: string;
    lpToken: string;
    creator: string;
  };
  isDarkMode: boolean;
  onClick: () => void;
  isSelected: boolean;
}

export function PoolCard({ pool, isDarkMode, onClick, isSelected }: PoolCardProps) {
  const timeAgo = (date: string) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";

    return Math.floor(seconds) + " seconds ago";
  };

  // Format volume for display
  const formatVolume = (volume: number) => {
    if (volume >= 1_000_000) {
      return `$${(volume / 1_000_000).toFixed(2)}M`;
    }
    if (volume >= 1_000) {
      return `$${(volume / 1_000).toFixed(2)}K`;
    }
    return `$${volume.toFixed(2)}`;
  };

  return (
    <Card
      className={`cursor-pointer transition-all w-full ${
        isDarkMode ? "bg-gray-900/50 border-gray-800 hover:border-purple-800" : "bg-white border-gray-200 hover:border-purple-300"
      } ${isSelected ? (isDarkMode ? "border-purple-600" : "border-purple-500") : ""}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2 px-4 pt-4">
        <div className="flex justify-between items-start">
          <CardTitle className={`text-base sm:text-lg truncate ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {pool.token1}/{pool.token2}
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 p-2"
                  onClick={(e) => e.stopPropagation()} // Prevent card click when clicking the button
                >
                  <Bell className={`h-5 w-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <span className="sr-only">Set alert</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className={isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}>
                <p className="text-sm">Set price/volume alert</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Volume 24h</p>
              <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {formatVolume(pool.volume24h)}
                <span className={`ml-2 text-xs ${pool.volumeChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {pool.volumeChange >= 0 ? "+" : ""}
                  {pool.volumeChange.toFixed(1)}%
                </span>
              </p>
            </div>
            <div>
              <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Trades 24h</p>
              <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {pool?.trades24h?.toLocaleString() || "0"}
                <span className={`ml-2 text-xs ${pool.tradesChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {pool.tradesChange >= 0 ? "+" : ""}
                  {pool.tradesChange.toFixed(1)}%
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Created</p>
            <p className={`text-sm truncate ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {timeAgo(pool.createdAt)}
            </p>
          </div>

          <div>
            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>LP Token</p>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} flex items-center`}>
              <span className="truncate">{pool.lpToken}</span>
              <a
                href={`https://solscan.io/token/${pool.lpToken}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`ml-2 p-1 ${isDarkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-500"}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </div>

          <div>
            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Creator</p>
            <p className={`text-sm truncate ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {pool.creator}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
import { useState } from "react";
import { ArrowUpDown, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

// Sample data for the leaderboard
const whaleData = [
  {
    id: "1",
    address: "solana.eth",
    rawAddress: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    totalVolume: "$128.5M",
    estimatedProfit: "+$12.4M",
    profitType: "positive",
    buySellRatio: "68/32",
    lastTradeTime: "5 mins ago",
  },
  {
    id: "2",
    address: "whale.sol",
    rawAddress: "3xGTg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    totalVolume: "$98.2M",
    estimatedProfit: "+$8.7M",
    profitType: "positive",
    buySellRatio: "72/28",
    lastTradeTime: "12 mins ago",
  },
  {
    id: "3",
    address: "sol...7j2k",
    rawAddress: "5xKTg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    totalVolume: "$76.3M",
    estimatedProfit: "-$2.1M",
    profitType: "negative",
    buySellRatio: "45/55",
    lastTradeTime: "28 mins ago",
  },
  {
    id: "4",
    address: "degen.sol",
    rawAddress: "9xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    totalVolume: "$64.8M",
    estimatedProfit: "+$5.3M",
    profitType: "positive",
    buySellRatio: "65/35",
    lastTradeTime: "42 mins ago",
  },
  {
    id: "5",
    address: "sol...9f3d",
    rawAddress: "2xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    totalVolume: "$52.1M",
    estimatedProfit: "-$1.8M",
    profitType: "negative",
    buySellRatio: "38/62",
    lastTradeTime: "1 hour ago",
  },
  {
    id: "6",
    address: "sol...4x8j",
    rawAddress: "8xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    totalVolume: "$43.7M",
    estimatedProfit: "+$3.9M",
    profitType: "positive",
    buySellRatio: "58/42",
    lastTradeTime: "2 hours ago",
  },
];

export function WhaleLeaderboard() {
  const isMobile = useMobile();
  const [sortColumn, setSortColumn] = useState("totalVolume");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 bg-gray-900/80 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
            <th className="whitespace-nowrap px-4 py-3">#</th>
            <th className="whitespace-nowrap px-4 py-3">
              <button 
                className="flex items-center gap-1"
                onClick={() => handleSort("address")}
              >
                Wallet Address
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
            <th className="whitespace-nowrap px-4 py-3">
              <button 
                className="flex items-center gap-1"
                onClick={() => handleSort("totalVolume")}
              >
                Total Volume
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
            {!isMobile && (
              <th className="whitespace-nowrap px-4 py-3">
                <button 
                  className="flex items-center gap-1"
                  onClick={() => handleSort("estimatedProfit")}
                >
                  Est. Profit
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
            )}
            {!isMobile && (
              <th className="whitespace-nowrap px-4 py-3">
                <button 
                  className="flex items-center gap-1"
                  onClick={() => handleSort("buySellRatio")}
                >
                  Buy/Sell Ratio
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
            )}
            {!isMobile && (
              <th className="whitespace-nowrap px-4 py-3">
                <button 
                  className="flex items-center gap-1"
                  onClick={() => handleSort("lastTradeTime")}
                >
                  Last Trade
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
            )}
            <th className="whitespace-nowrap px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {whaleData.map((whale, index) => (
            <tr 
              key={whale.id} 
              className="bg-gray-900/30 text-sm text-gray-300 transition-colors hover:bg-gray-800/50"
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium">{index + 1}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-80"></div>
                  <span className="font-medium text-white">{whale.address}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 font-medium text-white">{whale.totalVolume}</td>
              {!isMobile && (
                <td className={`whitespace-nowrap px-4 py-3 font-medium ${
                  whale.profitType === "positive" ? "text-green-400" : "text-red-400"
                }`}>
                  {whale.estimatedProfit}
                </td>
              )}
              {!isMobile && (
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex w-24 items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-gray-700">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
                        style={{ 
                          width: `${parseInt(whale.buySellRatio.split('/')[0])}%` 
                        }}
                      ></div>
                    </div>
                    <span className="text-xs">{whale.buySellRatio}</span>
                  </div>
                </td>
              )}
              {!isMobile && (
                <td className="whitespace-nowrap px-4 py-3 text-gray-400">{whale.lastTradeTime}</td>
              )}
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
  );
}

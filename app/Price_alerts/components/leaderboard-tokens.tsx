import { useState } from "react";
import { ArrowUpDown, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

// Sample data for the leaderboard (top 10 performing tokens)
const leaderboardData = [
  {
    id: "1",
    tokenName: "Token 1",
    price: "$150.5",
    change: "+5.2%",
    volume: "$10.5M",
  },
  {
    id: "2",
    tokenName: "Token 2",
    price: "$132.8",
    change: "+3.1%",
    volume: "$9.7M",
  },
  {
    id: "3",
    tokenName: "Token 3",
    price: "$98.1",
    change: "-1.5%",
    volume: "$8.1M",
  },
  {
    id: "4",
    tokenName: "Token 4",
    price: "$120.3",
    change: "+2.8%",
    volume: "$7.6M",
  },
  {
    id: "5",
    tokenName: "Token 5",
    price: "$110.2",
    change: "-0.8%",
    volume: "$6.9M",
  },
  {
    id: "6",
    tokenName: "Token 6",
    price: "$142.6",
    change: "+4.1%",
    volume: "$6.2M",
  },
  {
    id: "7",
    tokenName: "Token 7",
    price: "$128.5",
    change: "+2.5%",
    volume: "$5.8M",
  },
  {
    id: "8",
    tokenName: "Token 8",
    price: "$95.3",
    change: "-3.2%",
    volume: "$5.4M",
  },
  {
    id: "9",
    tokenName: "Token 9",
    price: "$77.4",
    change: "+1.9%",
    volume: "$5.1M",
  },
  {
    id: "10",
    tokenName: "Token 10",
    price: "$80.1",
    change: "-0.4%",
    volume: "$4.9M",
  },
];

export function Leaderboard_price_alerts() {
  const isMobile = useMobile();
  const [sortColumn, setSortColumn] = useState("price");
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
                onClick={() => handleSort("tokenName")}
              >
                Token Name
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
            <th className="whitespace-nowrap px-4 py-3">
              <button 
                className="flex items-center gap-1"
                onClick={() => handleSort("price")}
              >
                Price
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
            <th className="whitespace-nowrap px-4 py-3">
              <button 
                className="flex items-center gap-1"
                onClick={() => handleSort("change")}
              >
                24h Change
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
            <th className="whitespace-nowrap px-4 py-3">
              <button 
                className="flex items-center gap-1"
                onClick={() => handleSort("volume")}
              >
                Volume
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {leaderboardData.map((token, index) => (
            <tr 
              key={token.id} 
              className="bg-gray-900/30 text-sm text-gray-300 transition-colors hover:bg-gray-800/50"
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium">{index + 1}</td>
              <td className="whitespace-nowrap px-4 py-3 font-medium text-white">{token.tokenName}</td>
              <td className="whitespace-nowrap px-4 py-3 font-medium text-white">{token.price}</td>
              <td className={`whitespace-nowrap px-4 py-3 font-medium ${parseFloat(token.change) > 0 ? "text-green-400" : "text-red-400"}`}>
                {token.change}
              </td>
              <td className="whitespace-nowrap px-4 py-3">{token.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowUpDown, ExternalLink, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

interface WhaleData {
  address: string;
  rawAddress: string;
  slot: number;
  fee: number;
  status: string;
  signer: string[];
  blockTime: number;
  latestTx: string;
  time: string;
}

export function WhaleLeaderboard() {
  const isMobile = useMobile();
  const [sortColumn, setSortColumn] = useState("block_time");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [whales, setWhales] = useState<WhaleData[]>([]);

  const loadWhalesFromLocalStorage = () => {
    const storedWhales = localStorage.getItem("tracked_wallets");
    if (storedWhales) {
      setWhales(JSON.parse(storedWhales));
    }
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  // ⬇️ Load on page load
  useEffect(() => {
    loadWhalesFromLocalStorage();

    // ⬇️ Listen if any tab updates localStorage
    const handleStorageChange = () => {
      loadWhalesFromLocalStorage();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const sortedWhales = [...whales].sort((a, b) => {
    if (sortColumn === "block_time") {
      return sortDirection === "asc"
        ? a.blockTime - b.blockTime
        : b.blockTime - a.blockTime;
    }
    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 bg-gray-900/80 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
            <th className="whitespace-nowrap px-4 py-3">#</th>
            <th className="whitespace-nowrap px-4 py-3">Wallet Name</th>
            <th className="whitespace-nowrap px-4 py-3">Raw Address</th>
            <th className="whitespace-nowrap px-4 py-3">Recent Tx Hash</th>
            <th className="whitespace-nowrap px-4 py-3">Tx Signer</th>
            <th className="whitespace-nowrap px-4 py-3">
              <button
                className="flex items-center gap-1"
                onClick={() => handleSort("block_time")}
              >
                Block Time
                <ArrowUpDown className="h-3 w-3" />
              </button>
            </th>
            <th className="whitespace-nowrap px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {sortedWhales.map((whale, index) => (
            <tr
              key={index}
              className="bg-gray-900/30 text-sm text-gray-300 transition-colors hover:bg-gray-800/50"
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-4 py-3 max-w-[200px] truncate">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white truncate">
                    {whale.address}
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 max-w-[200px] truncate">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white truncate">
                    {whale.rawAddress.slice(0, 10)}...
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 max-w-[200px] truncate">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white truncate">
                    {whale.latestTx.slice(0, 10)}...
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 font-medium text-white max-w-[150px] truncate">
                {whale.signer.slice(0, 10)}...
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-gray-400">
                {new Date(whale.blockTime * 1000).toLocaleString()}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 cursor-pointer"
                    onClick={() => {
                      window.open(`https://solscan.io/tx/${whale.latestTx}`, "_blank");
                    }}
                  >
                    View Tx
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowUpDown, ExternalLink, Check } from "lucide-react";
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
  const [sortColumn, setSortColumn] = useState("block_time");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [whales, setWhales] = useState<WhaleData[]>([]);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Filters
  const [searchWallet, setSearchWallet] = useState("");
  const [searchRawAddress, setSearchRawAddress] = useState("");

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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1000);
  };

  useEffect(() => {
    loadWhalesFromLocalStorage();

    const handleStorageChange = () => {
      loadWhalesFromLocalStorage();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const filteredWhales = whales.filter((whale) => {
    const matchesWallet = whale.address.toLowerCase().includes(searchWallet.toLowerCase());
    const matchesRawAddress = whale.rawAddress.toLowerCase().includes(searchRawAddress.toLowerCase());

    return matchesWallet && matchesRawAddress;
  });

  const sortedWhales = [...filteredWhales].sort((a, b) => {
    if (sortColumn === "block_time") {
      return sortDirection === "asc"
        ? a.blockTime - b.blockTime
        : b.blockTime - a.blockTime;
    }
    return 0;
  });

  return (
    <div className="overflow-x-auto p-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Wallet Name"
          value={searchWallet}
          onChange={(e) => setSearchWallet(e.target.value)}
          className="rounded bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Search Raw Address"
          value={searchRawAddress}
          onChange={(e) => setSearchRawAddress(e.target.value)}
          className="rounded bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setSearchWallet("");
            setSearchRawAddress("");
          }}
          className="text-sm hover:text-white mt-1"
        >
          Reset Filters
        </Button>
      </div>

      {/* Table */}
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
          {sortedWhales.length > 0 ? (
            sortedWhales.map((whale, index) => (
              <tr
                key={index}
                className="bg-gray-900/30 text-sm text-gray-300 transition-colors hover:bg-gray-800/50"
              >
                <td className="whitespace-nowrap px-4 py-3 font-medium">{index + 1}</td>

                {/* Wallet Name */}
                <td
                  className="whitespace-nowrap px-4 py-3 max-w-[200px] truncate cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white truncate">
                      {whale.address}
                    </span>
                  </div>
                </td>

                {/* Raw Address */}
                <td
                  className="whitespace-nowrap px-4 py-3 max-w-[200px] truncate cursor-pointer hover:underline"
                  onClick={() => handleCopy(whale.rawAddress)}
                  title="Click to copy"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white truncate">
                      {whale.rawAddress.slice(0, 10)}...
                    </span>
                    {copiedText === whale.rawAddress && <span className="text-green-400">Copied!</span>}
                  </div>
                </td>

                {/* Recent Tx */}
                <td
                  className="whitespace-nowrap px-4 py-3 max-w-[200px] truncate cursor-pointer hover:underline"
                  onClick={() => handleCopy(whale.latestTx)}
                  title="Click to copy"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white truncate">
                      {whale.latestTx.slice(0, 10)}...
                    </span>
                    {copiedText === whale.latestTx && <span className="text-green-400">Copied!</span>}
                  </div>
                </td>

                {/* Tx Signer */}
                <td
                  className="whitespace-nowrap px-4 py-3 font-medium text-white max-w-[150px] truncate cursor-pointer hover:underline"
                  onClick={() => handleCopy(whale.signer[0] || "")}
                  title="Click to copy"
                >
                  <div className="flex items-center gap-2">
                    {whale.signer.length > 0 ? `${whale.signer[0].slice(0, 10)}...` : "-"}
                    {copiedText === whale.signer[0] && <span className="text-green-400">Copied!</span>}
                  </div>
                </td>

                {/* Block Time */}
                <td className="whitespace-nowrap px-4 py-3 text-gray-400">
                  {new Date(whale.blockTime * 1000).toLocaleString()}
                </td>

                {/* View Tx Button */}
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
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-8 text-gray-500">
                No whales match the filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

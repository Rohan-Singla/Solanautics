"use client";

import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import axios from "axios";
interface TrackedWallet {
    address: string;
    rawAddress: string;
    addedAt: string;
    latestTx: string;
    blockTime: number;
    signer: string[];
}

export function WalletTracker() {
    const [walletAddress, setWalletAddress] = useState("");
    const [walletName, setWalletName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [trackedWallets, setTrackedWallets] = useState<TrackedWallet[]>([]);

    const saveToLocalStorage = (wallets: TrackedWallet[]) => {
        localStorage.setItem("tracked_wallets", JSON.stringify(wallets));
    };

    const handleAddWallet = async () => {
        if (!walletAddress.trim()) {
            setError("Please enter a wallet address");
            return;
        }

        try {
            // 1. Fetch data from Solscan
            const res = await axios.post('/api/whales', { walletAddress });
            const whaleData = res.data.data; // this is an array of txs!

            console.log(whaleData);

            if (!whaleData || whaleData.length === 0) {
                setError("No transactions found for this wallet.");
                return;
            }

            const latestTx = whaleData[0]; // take the most recent tx

            // 2. Create new wallet entry
            const newWallet: TrackedWallet = {
                address: walletName.trim() || `sol...${walletAddress.slice(-4)}`,
                rawAddress: walletAddress.trim(),
                addedAt: new Date().toISOString(),
                latestTx: latestTx.tx_hash,
                blockTime: latestTx.block_time,
                signer: latestTx.signer,
            };

            // 3. Save locally
            const updatedWallets = [...trackedWallets, newWallet];
            setTrackedWallets(updatedWallets);
            saveToLocalStorage(updatedWallets);

            // 4. Reset form
            setWalletAddress("");
            setWalletName("");
            setError(null);

        } catch (err) {
            console.error('Failed to fetch wallet data:', err);
            setError("Failed to fetch wallet data.");
        }
    };


    return (
        <Card className="bg-gray-900/80 border-gray-800">
            <CardHeader>
                <CardDescription className="text-gray-400">
                    Add wallet addresses you want to track
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <Input
                            placeholder="Wallet Address or ENS"
                            value={walletAddress}
                            onChange={(e) => setWalletAddress(e.target.value)}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
                    </div>
                    <div className="flex-1">
                        <Input
                            placeholder="Nickname (optional)"
                            value={walletName}
                            onChange={(e) => setWalletName(e.target.value)}
                            className="bg-gray-800 border-gray-700 text-white"
                        />
                    </div>
                    <Button
                        onClick={handleAddWallet}
                        className="bg-purple-600 hover:bg-purple-700"
                    >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Wallet
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

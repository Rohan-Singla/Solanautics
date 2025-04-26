"use client";

import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import axios from "axios";
import bs58 from "bs58";

interface TrackedWallet {
    address: string;
    rawAddress: string;
    addedAt: string;
    latestTx: string;
    blockTime: number;
    signer: string[];
}

function isValidSolanaAddress(address: string): boolean {
    try {
        const decoded = bs58.decode(address);
        return decoded.length === 32;
    } catch (e) {
        return false;
    }
}

export function WalletTracker() {
    const [walletAddress, setWalletAddress] = useState("");
    const [walletName, setWalletName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [trackedWallets, setTrackedWallets] = useState<TrackedWallet[]>([]);

    const saveToLocalStorage = (wallets: TrackedWallet[]) => {
        localStorage.setItem("tracked_wallets", JSON.stringify(wallets));
    };

    useEffect(() => {
        const storedWallets = localStorage.getItem("tracked_wallets");
        if (storedWallets) {
            setTrackedWallets(JSON.parse(storedWallets));
        }
    }, []);
    
  const handleAddWallet = async () => {
    if (!walletAddress.trim()) {
        setError("Please enter a wallet address.");
        return;
    }

    if (!isValidSolanaAddress(walletAddress.trim())) {
        setError("Invalid Solana wallet address.");
        return;
    }

    try {
        const res = await axios.post('/api/whales', { walletAddress });
        const whaleData = res.data.data;

        if (!whaleData || whaleData.length === 0) {
            setError("No transactions found for this wallet.");
            return;
        }

        const latestTx = whaleData[0];

        const newWallet: TrackedWallet = {
            address: walletName.trim() || `sol...${walletAddress.slice(-4)}`,
            rawAddress: walletAddress.trim(),
            addedAt: new Date().toISOString(),
            latestTx: latestTx.tx_hash,
            blockTime: latestTx.block_time,
            signer: latestTx.signer,
        };

        // Load the existing wallets from localStorage
        const storedWallets = localStorage.getItem("tracked_wallets");
        const trackedWalletsArray = storedWallets ? JSON.parse(storedWallets) : [];

        // Append the new wallet to the existing list
        const updatedWallets = [...trackedWalletsArray, newWallet];

        // Update state and localStorage
        setTrackedWallets(updatedWallets);
        saveToLocalStorage(updatedWallets);

        setWalletAddress("");
        setWalletName("");
        setError(null);

    } catch (err) {
        console.error('Failed to fetch wallet data:', err);
        setError("Failed to fetch wallet data.");
    }
};

    return (
        <Card className="bg-gray-900/90 border-gray-800">
            <CardHeader>
                <CardDescription className="text-gray-400 text-md">
                    Add wallet addresses you want to track the latest transactions of and receive notifications to stay updated!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <Input
                            placeholder="Wallet Address"
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
                        className="bg-purple-600 hover:bg-purple-700 cursor-pointer"
                    >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Wallet
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

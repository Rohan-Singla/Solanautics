"use client"

import { useState } from "react"
import { PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export function WalletTracker({ onAddWallet }) {
  const [walletAddress, setWalletAddress] = useState("")
  const [walletName, setWalletName] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleAddWallet = () => {
    // Basic validation
    if (!walletAddress.trim()) {
      setError("Please enter a wallet address")
      return
    }
    // Create a new wallet object
    const newWallet = {
      address: walletName.trim() || `sol...${walletAddress.slice(-4)}`,
      rawAddress: walletAddress,
      addedAt: new Date(),
    }

    // Add the wallet
    onAddWallet(newWallet)

    // Reset form
    setWalletAddress("")
    setWalletName("")
    setError(null)
  }

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
  )
}

"use client"

import type React from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wallet } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMutation } from "@tanstack/react-query"

import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export default function MinimalAuth() {
    const [isSignUp, setIsSignUp] = useState(true)
    const [username, setUsername] = useState("")
    const [isConnecting, setIsConnecting] = useState(false)
    const [isWalletConnected, setIsWalletConnected] = useState(false)
    const [walletAddress, setWalletAddress] = useState("")
    const { openConnectModal } = useConnectModal();
    const { isConnected, address } = useAccount();

    const signUpMutation = useMutation(
        {
            mutationFn: async (payload: { username: string, walletAddress: string }) => {
                const res = await axios.post(`http://locahost:5000/api/auth/signup`, payload)

                console.log(res.data);

                return res.data
            },
            onSuccess: () => {
                toast.success("Account created successfully")
            },
            onError: (error: any) => {
                if (axios.isAxiosError(error)) {
                    const status = error.response?.status
                    const msg = error.response?.data?.message

                    if (status === 400) {
                        toast.error("Account already exists. Please sign in.")
                    } else if (status === 500) {
                        toast.error("Server error. Try again later.")
                    } else {
                        toast.error(msg || "Error creating account")
                    }
                } else {
                    toast.error("Unexpected error occurred")
                }
            }

        });

    const signInMutation = useMutation({
        mutationFn: async (payload: { walletAddress: string }) => {
            const res = await axios.post(`http://locahost:5000/api/auth/signin`, payload)
            return res.data
        },
        onSuccess: () => {
            toast.success("Signed in successfully")
        },
        onError: () => {
            toast.error("Error signing in")
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!address) {
            toast.error("Connect your wallet first")
            return
        }

        if (isSignUp) {
            if (!username) {
                toast.error("Enter a username")
                return
            }

            console.log("payload : ", username, address)
            signUpMutation.mutate({ username, walletAddress: address })

        } else {
            signInMutation.mutate({ walletAddress: address })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="w-full max-w-sm">
            <div className="flex mb-8 justify-center space-x-8">
                <button
                    onClick={() => setIsSignUp(true)}
                    className={cn(
                        "text-md font-medium pb-1 transition-all cursor-pointer",
                        isSignUp ? "text-blue-500 border-b-2 border-blue-500" : "text-zinc-400 hover:text-zinc-300",
                    )}
                >
                    SIGN UP
                </button>
                <h3 className="text-white">OR</h3>
                <button
                    onClick={() => setIsSignUp(false)}
                    className={cn(
                        "text-md font-medium pb-1 transition-al cursor-pointer",
                        !isSignUp ? "text-blue-500 border-b-2 border-blue-500" : "text-zinc-400 hover:text-zinc-300",
                    )}
                >
                    SIGN IN
                </button>
            </div>
    
            <div className="bg-zinc-900 p-8 rounded-lg">
                <h1 className="text-xl font-medium text-white mb-8">{isSignUp ? "Create account" : "Welcome back"}</h1>
    
                <form onSubmit={handleSubmit} className="space-y-6">
                    {isSignUp && (
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm text-zinc-400 font-medium pb-3">
                                Username
                            </label>
                            <Input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-zinc-800 border-zinc-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter username"
                            />
                        </div>
                    )}
    
                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400 font-medium pb-3">Wallet</label>
                        <Button
                            type="button"
                            onClick={() => openConnectModal?.()}
                            disabled={isConnecting || isWalletConnected}
                            variant="outline"
                            className={cn(
                                "w-full cursor-pointer justify-start h-10 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white text-left font-normal text-white",
                                isWalletConnected && "border-blue-500/50 text-blue-500 cursor-pointer",
                            )}
                        >
                            <Wallet className="mr-2 h-4 w-4" />
                            {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
                        </Button>
                        {isWalletConnected && <p className="text-xs text-zinc-500 truncate mt-1">{walletAddress}</p>}
                    </div>
    
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-black font-medium mt-3 cursor-pointer">
                        {isSignUp ? "Create account" : "Sign in"}
                    </Button>
                </form>
    
                <div className="mt-6 text-center">
                    <p className="text-md text-zinc-500">
                        {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
                        <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 hover:text-blue-400">
                            {isSignUp ? "Sign in" : "Sign up"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    )
}


'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Bell, LineChart, TrendingUp, Zap } from 'lucide-react'
const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-32 w-full">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-zinc-950 to-zinc-950" />

            <div className="container relative z-10 mx-auto md:px-6">
                <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                    <div className="flex flex-col justify-center space-y-8  px-5">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-cyan-800/40 bg-cyan-950/30 px-3 py-1 text-sm text-cyan-400">
                                <Zap className="mr-1 h-3.5 w-3.5" />
                                Smart Money Tracking
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                                Track Smart Money <span className="text-cyan-400">Movements</span> in Real-Time
                            </h1>
                            <p className="max-w-[600px] text-zinc-400 md:text-xl">
                                A real-time dashboard & alert bot that tracks and detects liquidity manipulations , whales , SOL price and alerts traders when
                                opportunities or risks arise on <b>Solana</b> .
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                className=" cursor-pointer"
                            >
                                View Demo
                            </Button>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-cyan-400" />
                                <span className="text-sm text-zinc-400">Real-time tracking</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bell className="h-5 w-5 text-cyan-400" />
                                <span className="text-sm text-zinc-400">Instant alerts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LineChart className="h-5 w-5 text-cyan-400" />
                                <span className="text-sm text-zinc-400">Market insights</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        {/* Glowing orb effect */}
                        <div className="absolute h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl" />

                        {/* Dashboard preview */}
                        <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 shadow-2xl backdrop-blur-sm">
                            <div className="rounded-md bg-zinc-950 p-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-lg font-medium text-white">Solanautics Dashboard</div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                        <div className="text-xs text-red-400">LIVE</div>
                                    </div>
                                </div>
                                <div className="mb-4 grid grid-cols-3 gap-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="rounded-md bg-zinc-800/50 p-3">
                                            <div className="mb-1 h-2 w-12 rounded bg-zinc-700" />
                                            <div className="h-6 w-16 rounded bg-cyan-900/50" />
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4 h-40 rounded-md bg-zinc-800/50 p-3">
                                    <div className="flex h-full items-center justify-center">
                                        <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                            <path
                                                d="M0,40 L5,35 L10,38 L15,30 L20,32 L25,28 L30,25 L35,27 L40,20 L45,22 L50,15 L55,18 L60,10 L65,12 L70,8 L75,5 L80,8 L85,2 L90,5 L95,0 L100,3"
                                                fill="none"
                                                stroke="#22d3ee"
                                                strokeWidth="1"
                                            />
                                            <path d="M0,40 L100,40" stroke="#3f3f46" strokeWidth="0.5" strokeDasharray="1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="rounded-md bg-zinc-800/50 p-3">
                                            <div className="mb-1 h-2 w-12 rounded bg-zinc-700" />
                                            <div className="h-10 w-full rounded bg-zinc-800" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
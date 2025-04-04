import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function TransactionBackground() {
    return (
        <div className="h-full w-full bg-black">
            <svg
                className="h-full w-full opacity-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                        <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#gradient)" />
                {Array.from({ length: 20 }).map((_, i) => (
                    <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: "3s" }}>
                        <line
                            x1={Math.random() * 100}
                            y1={Math.random() * 100}
                            x2={Math.random() * 100}
                            y2={Math.random() * 100}
                            stroke="rgba(56, 189, 248, 0.3)"
                            strokeWidth="0.1"
                        />
                        <circle
                            cx={Math.random() * 100}
                            cy={Math.random() * 100}
                            r="0.2"
                            fill="rgba(236, 72, 153, 0.5)"
                            className="animate-ping"
                            style={{ animationDuration: "4s", animationDelay: `${i * 0.3}s` }}
                        />
                    </g>
                ))}
            </svg>
        </div>
    )
}

const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
            <div className="absolute inset-0 z-0">
                <TransactionBackground />
            </div>
            <div
                className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-black"
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            />
            <div className="container relative z-20 px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-pink-500 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                            Decode the Whales.
                            <br />
                            Control the Market.
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8 text-lg text-white/70 md:text-xl"
                    >
                        Real-time on-chain intelligence for elite Solana traders. Track whale movements, predict market shifts,
                        and stay ahead of the curve.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="group relative h-12 overflow-hidden bg-gradient-to-r from-blue-600 to-pink-600 px-8 text-lg font-medium transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Access the Dashboard{" "}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-12 border-white/20 px-8 text-lg font-medium text-white hover:bg-white/10 hover:text-white"
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex animate-bounce flex-col items-center"
                >
                    <div className="h-10 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                    <div className="mt-2 text-sm text-white/50">Scroll to explore</div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const DashPreview = () => {
  return (
    <section className="relative py-24">
    <div className="container px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Elite Intelligence.
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Unmatched Power.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            A glimpse into the most powerful on-chain analytics platform on Solana. Track smart money in
            real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)]"
        >
          <div className="absolute inset-0 backdrop-blur-md">
            <div className="h-full w-full bg-gradient-to-br from-blue-900/30 to-pink-900/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-6 p-8 text-center">
              <h3 className="text-2xl font-bold">Dashboard Preview</h3>
              <p className="text-white/70">Gain access to the full dashboard to unlock all features</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-pink-600 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              >
                Unlock Full Access
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 blur-sm" />
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-3">
              <div className="h-full w-full rounded-full bg-blue-400/50" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Whale Tracking</h3>
            <p className="text-white/70">
              Follow the smart money with real-time alerts on whale movements and positions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 p-3">
              <div className="h-full w-full rounded-full bg-pink-400/50" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Market Predictions</h3>
            <p className="text-white/70">
              AI-powered analysis of on-chain data to predict market movements before they happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 p-3">
              <div className="h-full w-full rounded-full bg-purple-400/50" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Token Intelligence</h3>
            <p className="text-white/70">
              Discover emerging tokens before they pump with advanced liquidity analysis.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DashPreview
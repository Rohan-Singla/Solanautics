'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Fish, TrendingUp } from 'lucide-react'

const DashPreview = () => {
  return (
    <section className="relative py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto w-full">
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

          <div className="mt-24 grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-3">
                <div className="h-full w-full rounded-full bg-blue-400/50" ><Fish /></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Wallet Tracking</h3>
              <p className="text-white/70">
                Add and track solana wallets transactions 
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
                <div className="h-full w-full rounded-full bg-pink-400/30" ><TrendingUp /></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Price Alerts</h3>
              <p className="text-white/70">
                Real time price $SOL Price tracking , get alerts and notifications on telegram to don't miss on opportunities.
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
                <div className="h-full w-full rounded-full bg-purple-400/50" ><DollarSign /></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Liquidity Pools Tracking</h3>
              <p className="text-white/70">
                A dashboard that tracks liquidity pools to keep you updated on opportunities or risks.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashPreview
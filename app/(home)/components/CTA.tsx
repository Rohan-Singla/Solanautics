'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="relative py-24">
    <div className="absolute inset-0 z-0">
      <div className="h-full w-full bg-gradient-to-b from-black via-blue-950/20 to-black" />
    </div>
    <div className="container relative z-10 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/50 to-pink-950/50 p-8 text-center shadow-[0_0_50px_rgba(56,189,248,0.15)] backdrop-blur-md md:p-12"
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Join the Elite Traders on Solana</h2>
        <p className="mb-8 text-white/70">
          Limited spots available. Get early access to the most powerful on-chain intelligence tool.
        </p>
        <Button
          size="lg"
          className="group relative h-12 overflow-hidden bg-gradient-to-r from-blue-600 to-pink-600 px-8 text-lg font-medium transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Access the Dashboard <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
        </Button>
      </motion.div>
    </div>
  </section>
  )
}

export default CTA
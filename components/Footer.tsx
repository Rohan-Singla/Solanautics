import { ExternalLink, Github, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-blue-500" />
              <span className="text-lg font-bold tracking-tight">Solana Smart Money</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span>SOL Price:</span>
                <span className="font-mono font-bold text-white">$2000</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Market Cap:</span>
                <span className="font-mono font-bold text-white">$2000B</span>
              </div>
              <div className="flex items-center gap-2">
                <span>24h Volume:</span>
                <span className="font-mono font-bold text-white">$892381</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Solana Smart Money Tracker. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer
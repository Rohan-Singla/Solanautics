import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">Solanautics</span>
          </div>
          <div className="flex">
            <Link
              href="https://github.com/Rohan-Singla/Solanautics"
              target='_blank'
              className="rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-white/50">
          © {new Date().getFullYear()} Solanautics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
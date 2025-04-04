import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-blue-500" />
                    <span className="text-lg font-bold tracking-tight">Solana Smart Money</span>
                </div>
                <nav className="hidden md:flex md:gap-6">
                    <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                        About
                    </Link>
                    <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                        Features
                    </Link>
                    <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                        Pricing
                    </Link>
                </nav>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Sign In
                </Button>
            </div>
        </header>
    )
}

export default Navbar
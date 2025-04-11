import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md flex justify-center">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight">Solanautics</span>
                </div>
                <nav className="hidden md:flex md:gap-6">
                    <Link href="#" className="text-md text-white/70 transition-colors hover:text-white">
                        About
                    </Link>
                    <Link href="#" className="text-md text-white/70 transition-colors hover:text-white">
                        Features
                    </Link>
                    <Link href="#" className="text-md text-white/70 transition-colors hover:text-white">
                        Pricing
                    </Link>
                </nav>
                <div>
                    <Button variant="outline" className="cursor-pointer bg-transparent text-white border border-white mr-5 hover:bg-gray-900 hover:text-white">
                        Sign In
                    </Button>
                    <Button variant="secondary" className="cursor-pointer">
                        Sign up
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
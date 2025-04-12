import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Rocket, Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Howitworks = () => {
    const technologies = [
        {
            icon: <Rocket className="h-10 w-10 text-blue-400" />,
            title: "Solana Blockchain",
            description: "Built on Solana's high-performance blockchain for lightning-fast transactions and minimal fees.",
        },
        {
            icon: <Code className="h-10 w-10 text-blue-400" />,
            title: "Smart Contracts",
            description: "Secure and audited smart contracts powering our decentralized applications and services.",
        },
        {
            icon: <Zap className="h-10 w-10 text-blue-400" />,
            title: "Web3 Integration",
            description: "Seamless integration with Web3 wallets and services for a smooth user experience.",
        },
    ]
    return (
        <section className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-blue-500 text-blue-400">
                    Our Technology
                </Badge>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    How Solanautics Works
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Solanautics leverages cutting-edge blockchain technology to deliver a seamless, secure, and efficient
                    experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technologies.map((tech, index) => (
                    <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                            {tech.icon}
                            <CardTitle className="text-xl text-white">{tech.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">{tech.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12 bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Our Ecosystem</h3>
                        <p className="text-gray-400 mb-6">
                            The Solanautics ecosystem is designed to provide a comprehensive suite of tools and services for
                            blockchain enthusiasts and developers.
                        </p>
                        <ul className="space-y-3">
                            {["Decentralized Exchange", "NFT Marketplace", "Yield Farming", "Cross-chain Bridge"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Solanautics Ecosystem"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Howitworks
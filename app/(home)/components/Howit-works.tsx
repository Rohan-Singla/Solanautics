import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Rocket, Zap } from 'lucide-react'
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
            title: "SolScan API",
            description: "Uses Solscan.io API to get relevant data for tracking and to send alerts.",
        },
        {
            icon: <Zap className="h-10 w-10 text-blue-400" />,
            title: "Realtime tracking",
            description: "Real time tracking of whales,liquidity pools,Solana price to give you alerts and notifications at right time.",
        },
    ]
    return (
        <section className="container mx-auto">
            <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-blue-500 text-blue-400">
                    Our Technology
                </Badge>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-cyan-200">
                    How Solanautics Works
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Solanautics leverages cutting-edge blockchain technology to deliver a seamless, secure, and efficient
                    experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technologies.map((tech, index) => (
                    <Card key={index} className="bg-zinc-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
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
        </section>
    )
}

export default Howitworks
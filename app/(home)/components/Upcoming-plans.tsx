import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {  Calendar } from 'lucide-react'
import React from 'react'

const Upcomingplans = () => {
    const roadmapItems = [
        {
            quarter: "Q2 2023",
            title: "Mobile App Launch",
            description: "Native iOS and Android applications with full wallet integration and trading capabilities.",
            status: "In Progress",
        },
        {
            quarter: "Q3 2023",
            title: "Cross-Chain Integration",
            description: "Expand beyond Solana to support Ethereum, Polygon, and other major blockchains.",
            status: "Planning",
        },
        {
            quarter: "Q4 2023",
            title: "DAO Governance",
            description: "Community-driven decision making through our decentralized autonomous organization.",
            status: "Planning",
        },
        {
            quarter: "Q1 2024",
            title: "Enterprise Solutions",
            description: "Specialized tools and services for businesses looking to integrate blockchain technology.",
            status: "Research",
        },
    ]

    return (
        <section className="container mx-auto mt-20">
            <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-blue-500 text-blue-400">
                    Roadmap
                </Badge>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Upcoming Plans
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Our vision for the future of Solanautics includes exciting new features and improvements.
                </p>
            </div>

            <div className="relative">
                {/* Vertical line for timeline */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-900"></div>

                <div className="space-y-12 relative">
                    {roadmapItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="md:w-1/2"></div>
                            <div className="relative flex items-center justify-center">
                                <div className="h-8 w-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                                    <Calendar className="h-4 w-4 text-white" />
                                </div>
                            </div>
                            <Card
                                className={`md:w-1/2 bg-gray-900 border-gray-800 ${item.status === "In Progress" ? "border-l-4 border-l-blue-500" : ""
                                    }`}
                            >
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="text-white">{item.title}</CardTitle>
                                        <Badge
                                            className={
                                                item.status === "In Progress"
                                                    ? "bg-blue-500 hover:bg-blue-600"
                                                    : item.status === "Planning"
                                                        ? "bg-purple-600 hover:bg-purple-700"
                                                        : "bg-gray-700 hover:bg-gray-600"
                                            }
                                        >
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <CardDescription className="text-blue-400">{item.quarter}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400">{item.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Upcomingplans
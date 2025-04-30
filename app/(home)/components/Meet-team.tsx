import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Meetteam = () => {
    const teamMembers = [
        {
            name: "Vishesh Dwivedi",
            role: "Full Stack Developer",
            bio: "Versatile Web3 developer with a strong command of Solidity and smart contract development",
            social: {
                github: "https://github.com/Vishesh-Dwivedi-Git",
                linkedin: "https://www.linkedin.com/in/vishesh-dwivedi-567426275/",
            },
        },
        {
            name: "Sumaiya Shaik",
            role: "Full Stack Developer",
            bio: "Skilled in crafting scalable and user-centric Web3 applications.",
            social: {
                github: "https://github.com/Sumiya-ss",
                linkedin: "https://www.linkedin.com/in/shaik-sumiyas/",
            },
        },
        {
            name: "Rohan Singla",
            role: "Full Stack Developer",
            bio: "Driven Web3 engineer focused on building performant and scalable DApps.",
            social: {
                github: "https://github.com/Rohan-Singla/",
                linkedin: "https://www.linkedin.com/in/rohan-singla100/",
            },
        },
    ]

    return (
        <section className="w-full max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-cyan-500 text-cyan-400">
                    Our Team
                </Badge>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                    Meet Our Team
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The passionate individuals behind Solanautics, working to revolutionize the solana space.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                        <CardContent className="py-5 text-center">
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-cyan-400 mb-4">{member.role}</p>
                            <p className="text-gray-400 mb-6">{member.bio}</p>
                            <div className="flex justify-center gap-4">
                                <Link href={member.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Meetteam

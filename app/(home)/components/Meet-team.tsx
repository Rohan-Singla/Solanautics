import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Meetteam = () => {
    const teamMembers = [
        {
            name: "Alex Johnson",
            role: "Founder & Lead Developer",
            bio: "Blockchain enthusiast with 5+ years of experience in Solana development. Previously worked at major DeFi projects.",
            avatar: "/placeholder.svg?height=200&width=200",
            social: {
                github: "#",
                linkedin: "#",
            },
        },
        {
            name: "Sam Rodriguez",
            role: "UI/UX Designer & Frontend Developer",
            bio: "Creative technologist specializing in intuitive interfaces for Web3 applications. Passionate about making blockchain accessible.",
            avatar: "/placeholder.svg?height=200&width=200",
            social: {
                github: "#",
                linkedin: "#",
            },
        },
    ]
    return (
        <section className="w-full max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-blue-500 text-blue-400">
                    Our Team
                </Badge>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Meet Our Team
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The passionate individuals behind Solanautics, working to revolutionize the blockchain space.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                        <div className="relative h-48 bg-gradient-to-r from-blue-900/40 to-black">
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <Avatar className="h-24 w-24 border-4 border-gray-900">
                                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                    <AvatarFallback className="bg-blue-900 text-white text-xl">
                                        {member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <CardContent className="pt-16 pb-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-blue-400 mb-4">{member.role}</p>
                            <p className="text-gray-400 mb-6">{member.bio}</p>
                            <div className="flex justify-center gap-4">
                                <Link href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
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
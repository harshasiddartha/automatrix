"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollableCard {
  id: number
  title: string
  subtitle: string
  flag: string
  location: string
  funding: string
  description: string
  image: string
  imageAlt: string
}

const CARDS: ScrollableCard[] = [
  {
    id: 1,
    title: "BlockVault",
    subtitle: "Estonia, Self-funded",
    flag: "🇪🇪",
    location: "Estonia",
    funding: "Self-funded",
    description: "A secure platform for cryptocurrency users to earn interest, borrow, and exchange digital assets. With enhanced infrastructure, users can protect their investments while engaging in the decentralized finance (DeFi) ecosystem.",
    image: "/herodash.avif",
    imageAlt: "BlockVault Dashboard",
  },
  {
    id: 2,
    title: "TaskFlow",
    subtitle: "USA, Venture Capital",
    flag: "🇺🇸",
    location: "USA",
    funding: "Venture Capital",
    description: "Revolutionize how teams manage tasks and deadlines by integrating real-time project tracking, AI-assisted insights, and seamless communication. Stay focused with context-aware notifications and updates to enhance collaboration.",
    image: "/herodash.avif",
    imageAlt: "TaskFlow Interface",
  },
  {
    id: 3,
    title: "DisputeFox",
    subtitle: "Switzerland, Angel Investors",
    flag: "🇨🇭",
    location: "Switzerland",
    funding: "Angel Investors",
    description: "A decentralized platform designed for secure crypto asset management, allowing users to buy, sell, and borrow digital assets while ensuring top-tier protection and compliance with privacy regulations.",
    image: "/herodash.avif",
    imageAlt: "DisputeFox Dashboard",
  },
  {
    id: 4,
    title: "MindLink",
    subtitle: "Singapore, Self-funded",
    flag: "🇸🇬",
    location: "Singapore",
    funding: "Self-funded",
    description: "A platform to help users connect, share knowledge, and collaborate on ideas with the help of AI-powered insights. Users can join conversations, brainstorm, and access curated content tailored to their professional and personal interests.",
    image: "/herodash.avif",
    imageAlt: "MindLink Platform",
  },
  {
    id: 5,
    title: "NoteSphere",
    subtitle: "Dubai, Angel Investors",
    flag: "🇦🇪",
    location: "Dubai",
    funding: "Angel Investors",
    description: "Streamline your workflow by capturing, organizing, and sharing notes seamlessly. Collaborate with peers in real-time and enhance productivity using integrated AI suggestions for note-taking and task management.",
    image: "/herodash.avif",
    imageAlt: "NoteSphere Application",
  },
]

export function ScrollableCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className="relative light:bg-white dark:bg-black min-h-[500vh]">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0',
        }}
      />
      
      {/* Spacer for scroll */}
      <div className="h-[400vh]" />

      {/* Fixed container for cards */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 h-screen flex items-center justify-center">
          {CARDS.map((card, index) => {
            // Calculate progress for each card
            const cardStart = index / CARDS.length
            const cardEnd = (index + 1) / CARDS.length
            
            // Transform scroll progress to card-specific progress
            const cardProgress = useTransform(
              scrollYProgress,
              [cardStart, cardEnd],
              [0, 1]
            )

            // Calculate Y position - cards come from bottom
            const y = useTransform(
              cardProgress,
              [0, 1],
              [400, 0]
            )

            // Scale effect - cards get larger as they come forward
            const scale = useTransform(
              cardProgress,
              [0, 1],
              [0.85, 1]
            )

            // Opacity effect
            const opacity = useTransform(
              cardProgress,
              [0, 0.2, 0.8, 1],
              [0, 0, 1, 1]
            )

            // Z-index - later cards appear on top
            const zIndex = index

            return (
              <motion.div
                key={card.id}
                className="absolute w-full max-w-6xl pointer-events-auto"
                style={{
                  y,
                  scale,
                  opacity,
                  zIndex,
                }}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
                  <div className="grid md:grid-cols-2 min-h-[600px]">
                    {/* Left Half - Content */}
                    <div className="p-12 flex flex-col justify-between bg-white">
                      <div>
                        <h2 className="text-5xl font-bold text-black mb-3">
                          {card.title}
                        </h2>
                        <div className="flex items-center gap-2 mb-8">
                          <span className="text-lg">{card.flag}</span>
                          <p className="text-gray-500 text-base">
                            {card.subtitle}
                          </p>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-4">
                          Project Description:
                        </h3>
                        <p className="text-black text-base leading-relaxed mb-8">
                          {card.description}
                        </p>
                      </div>
                      <button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold px-8 py-3 rounded-lg w-fit transition-colors shadow-lg">
                        See Case Study
                      </button>
                    </div>

                    {/* Right Half - Image */}
                    <div className="relative bg-gray-100 overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover"
                        style={{
                          scale: useTransform(cardProgress, [0, 1], [1.1, 1]),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


"use client"

import { useEffect, useRef, useState } from "react"

interface StackCard {
  id: number
  title: string
  subtitle: string
  description: string
  color: string
}

const CARDS: StackCard[] = [
  {
    id: 1,
    title: "MindLink",
    subtitle: "🇸🇬 Singapore, Self-funded",
    description:
      "A platform to help users connect, share knowledge, and collaborate on ideas with AI-powered insights.",
    color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900",
  },
  {
    id: 2,
    title: "BlockVault",
    subtitle: "🇪🇪 Estonia, Self-funded",
    description: "A secure platform for cryptocurrency users to earn interest, borrow, and exchange digital assets.",
    color: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950",
  },
  {
    id: 3,
    title: "TaskFlow",
    subtitle: "🇺🇸 USA, Venture Capital",
    description: "Revolutionize how teams manage tasks and deadlines with real-time tracking and AI-assisted insights.",
    color: "from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-950",
  },
  {
    id: 4,
    title: "DisputeFox",
    subtitle: "🇨🇭 Switzerland, Angel Investors",
    description: "A decentralized platform for secure crypto asset management with top-tier protection.",
    color: "from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-950",
  },
  {
    id: 5,
    title: "NoteSphere",
    subtitle: "🇦🇪 Dubai, Angel Investors",
    description: "Streamline your workflow by capturing, organizing, and sharing notes seamlessly with AI.",
    color: "from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-950",
  },
]

export function CardStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  // The target scroll progress based on actual scroll position
  const targetProgressRef = useRef(0)
  // The smoothed/displayed scroll progress used by UI
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      targetProgressRef.current = Math.max(0, Math.min(scrolled, 1))
      // Start RAF loop if not running
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const tick = () => {
      setScrollProgress(prev => {
        const target = targetProgressRef.current
        // Lerp a little towards target each frame for smoothness
        const next = lerp(prev, target, 0.15)
        // If we're very close, snap and stop RAF
        if (Math.abs(next - target) < 0.0005) {
          cancelRAF()
          return target
        }
        // Keep RAF going
        rafRef.current = requestAnimationFrame(tick)
        return next
      })
    }

    const cancelRAF = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelRAF()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-white dark:bg-black transition-colors">
      <div className="h-[300vh]" />

      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-5xl px-8 h-screen flex items-center justify-center">
          {CARDS.map((card, index) => {
            const cardStartPoint = index * (1 / CARDS.length)
            const cardEndPoint = cardStartPoint + 1 / CARDS.length

            let cardProgress = 0
            if (scrollProgress >= cardStartPoint) {
              cardProgress = Math.min((scrollProgress - cardStartPoint) / (1 / CARDS.length), 1)
            }

            // Apply easing for smoother feel
            const eased = cardProgress < 0 ? 0 : cardProgress > 1 ? 1 : (cardProgress ** 2) * (3 - 2 * cardProgress) // smoothstep
            const yOffset = (1 - eased) * 80
            const scale = 0.85 + eased * 0.15
            const opacity = eased

            return (
              <div
                key={card.id}
                className="absolute w-96 pointer-events-auto will-change-transform will-change-opacity"
                style={{
                  transform: `translateX(-50%) translateY(calc(-50% + ${yOffset}px)) scale(${scale})`,
                  opacity: opacity,
                  left: "50%",
                  top: "50%",
                  zIndex: index,
                }}
              >
                <div
                  className={`
                    bg-gradient-to-br ${card.color}
                    rounded-3xl shadow-2xl
                    p-8 flex flex-col justify-between
                    border border-gray-200 dark:border-gray-700
                    h-96
                    transition-[colors,box-shadow] duration-500 ease-out
                  `}
                >
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500 ease-out">{card.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 transition-colors duration-500 ease-out">{card.subtitle}</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-500 ease-out">{card.description}</p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full w-fit transition-colors duration-300 ease-out text-sm">
                    See Case Study
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="fixed bottom-8 right-8 text-slate-600 dark:text-slate-400 text-sm font-medium pointer-events-none transition-colors">
        <div className="text-center">
          <div className="text-lg font-bold">{Math.round(scrollProgress * 100)}%</div>
        </div>
      </div>
    </div>
  )
}

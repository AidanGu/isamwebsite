"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"

export function CinematicHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 10, y: y * 10 })
      }
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsVisible(currentScrollY < window.innerHeight * 0.8)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToOverview = () => {
    const overviewSection = document.getElementById("overview")
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const parallaxOffset = scrollY * 0.3
  const titleOpacity = Math.max(0.2, 1 - scrollY / 600)
  const titleScale = Math.max(0.85, 1 - scrollY / 1500)

  return (
    <div
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-ucsc-navy via-blue-900 to-ucsc-gold"
    >
      {/* Animated Background Layers */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          background: `
            radial-gradient(circle at 20% 80%, rgba(229, 156, 59, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(245, 201, 68, 0.3) 0%, transparent 60%),
            radial-gradient(circle at 40% 40%, rgba(253, 199, 0, 0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ucsc-gold rounded-full opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(253, 199, 0, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(253, 199, 0, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        }}
      />

      {/* Fixed Hero Content */}
      <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div
          className="text-center max-w-7xl mx-auto px-4 hero-content"
          style={{
            transform: `
              translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) 
              scale(${titleScale})
            `,
            opacity: titleOpacity,
            perspective: "1000px",
          }}
        >
          {/* Main Title */}
          <div className="relative mb-8">
            {/* Glow Effect */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 blur-sm absolute inset-0 font-space-grotesk"
              style={{
                filter: "blur(12px)",
                color: "#E59C3B",
                opacity: 0.7,
              }}
            >
              Connection Through Canvas:
            </h1>

            {/* Shadow Layer */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-500 absolute inset-0 font-space-grotesk"
              style={{
                transform: "translate3d(3px, 3px, -10px)",
              }}
            >
              Connection Through Canvas:
            </h1>

            {/* Main Title */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative z-10 font-space-grotesk leading-tight"
              style={{
                textShadow: `
                  0 0 30px rgba(229, 156, 59, 0.6),
                  0 0 60px rgba(229, 156, 59, 0.4),
                  0 0 90px rgba(229, 156, 59, 0.2)
                `,
                transform: "translate3d(0, 0, 10px)",
              }}
            >
              Connection Through Canvas:
            </h1>
          </div>

          {/* Subtitle Stack */}
          <div className="relative mb-12 space-y-6">
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed font-inter max-w-5xl mx-auto"
              style={{
                transform: `translate3d(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px, 5px)`,
                textShadow: "0 0 20px rgba(229, 156, 59, 0.3)",
              }}
            >
              A centralized, student-led approach to certification, collaboration, and community using Canvas.
            </p>

            <p
              className="text-base md:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed font-inter max-w-4xl mx-auto"
              style={{
                transform: `translate3d(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px, 3px)`,
                textShadow: "0 0 15px rgba(245, 201, 68, 0.2)",
              }}
            >
              This page provides a deeper dive into the insights presented in our ISAM poster, showcasing how Slugworks
              and DSI transformed makerspace engagement through innovative Canvas LMS integration.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pointer-events-auto mb-16">
            <Button
              size="lg"
              onClick={scrollToOverview}
              className="
                bg-gradient-to-r from-orange-500 to-yellow-500 
                hover:from-orange-400 hover:to-yellow-400
                text-ucsc-navy font-bold px-12 py-6 text-xl rounded-2xl
                shadow-2xl hover:shadow-orange-500/30
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-1
                border-2 border-ucsc-gold/30
                backdrop-blur-sm
                font-inter
              "
              style={{
                transform: `translate3d(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px, 15px)`,
                boxShadow: `
                  0 0 40px rgba(229, 156, 59, 0.5),
                  0 20px 40px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `,
              }}
            >
              <Sparkles className="mr-3" size={24} />
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
          isVisible ? "animate-bounce opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center text-white/80 cursor-pointer" onClick={scrollToOverview}>
          <span className="text-sm font-medium mb-3 tracking-wider font-inter">SCROLL TO EXPLORE</span>
          <div className="relative">
            <ChevronDown size={28} className="animate-pulse" />
            <ChevronDown
              size={28}
              className="absolute top-2 animate-pulse opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ucsc-gold/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}

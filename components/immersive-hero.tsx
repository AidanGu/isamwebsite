"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function ImmersiveHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

      // Fade out content when scrolled past 90vh
      const fadeThreshold = window.innerHeight * 0.9
      setIsVisible(currentScrollY < fadeThreshold)
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

  // Parallax and fade calculations
  const parallaxBg = scrollY * 0.5
  const contentOpacity = isVisible ? Math.max(0, 1 - scrollY / (window.innerHeight * 0.8)) : 0
  const contentBlur = isVisible ? Math.min(10, scrollY / 50) : 10

  return (
    <>
      {/* Header with new logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-48 h-12">
              <Image
                src="/images/be-slugworks-header-logo.png"
                alt="Baskin Engineering & Slugworks"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-right text-white">
              <p className="text-lg font-bold text-ucsc-gold">ISAM 2025</p>
              <p className="text-sm opacity-90">UC Santa Cruz</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-gradient-to-br from-ucsc-navy via-blue-900 to-orange-900"
      >
        {/* Animated Background Layers */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            transform: `translateY(${parallaxBg}px) scale(1.1)`,
            background: `
              radial-gradient(circle at 25% 75%, rgba(242, 152, 19, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(229, 156, 59, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(253, 199, 0, 0.2) 0%, transparent 60%)
            `,
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-70 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                backgroundColor: i % 3 === 0 ? "#F29813" : i % 3 === 1 ? "#E59C3B" : "#FDC700",
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(253, 199, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(253, 199, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />

        {/* Fixed Content Block */}
        <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div
            ref={contentRef}
            className="text-center max-w-7xl mx-auto px-6"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
              opacity: contentOpacity,
              filter: `blur(${contentBlur}px)`,
              transition: "opacity 0.3s ease-out, filter 0.3s ease-out",
            }}
          >
            {/* Main Title */}
            <div className="relative mb-10">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-space-grotesk leading-tight"
                style={{
                  textShadow: `
                    0 0 30px rgba(242, 152, 19, 0.8),
                    0 0 60px rgba(242, 152, 19, 0.6),
                    0 0 90px rgba(242, 152, 19, 0.4),
                    0 4px 8px rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                Connection Through Canvas:
              </h1>
            </div>

            {/* Subtitle Stack */}
            <div className="relative mb-12 space-y-6">
              <p
                className="text-lg md:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed font-inter max-w-5xl mx-auto"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                A centralized, student-led approach to certification, collaboration, and community using Canvas.
              </p>

              <p
                className="text-base md:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed font-inter max-w-4xl mx-auto"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                This page provides a deeper dive into the insights presented in our ISAM poster, showcasing how
                Slugworks and DSI transformed makerspace engagement through innovative Canvas LMS integration.
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
                  shadow-2xl transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-1
                  border-2 border-white/20
                  font-inter
                  hover:shadow-orange-400/50
                  hover:shadow-2xl
                  active:scale-95
                "
                style={{
                  boxShadow: `
                    0 0 30px rgba(242, 152, 19, 0.4),
                    0 10px 30px rgba(0, 0, 0, 0.3)
                  `,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 40px rgba(253, 199, 0, 0.6),
                    0 15px 40px rgba(0, 0, 0, 0.4)
                  `
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 30px rgba(242, 152, 19, 0.4),
                    0 10px 30px rgba(0, 0, 0, 0.3)
                  `
                }}
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 ${
            isVisible && scrollY < window.innerHeight * 0.3 ? "animate-bounce opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-white/90 cursor-pointer" onClick={scrollToOverview}>
            <span className="text-sm font-medium mb-3 tracking-wider font-inter">SCROLL TO EXPLORE</span>
            <div className="relative">
              <ChevronDown size={32} className="animate-pulse" />
              <ChevronDown
                size={32}
                className="absolute top-3 animate-pulse opacity-60"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>

        {/* Ambient Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </>
  )
}

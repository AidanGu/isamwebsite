"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function ScrollDrivenHero() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [headerVisible, setHeaderVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight

    setScrollY(currentScrollY)

    // Hero visibility - fade out at 90vh
    setIsVisible(currentScrollY < windowHeight * 0.9)

    // Header visibility after 50vh
    setHeaderVisible(currentScrollY > windowHeight * 0.5)
  }, [])

  // Subtle mouse tracking for title only (±3px)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x: x * 3, y: y * 3 })
    }
  }, [])

  useEffect(() => {
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", scrollListener)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleScroll, handleMouseMove])

  const scrollToOverview = () => {
    const overviewSection = document.getElementById("overview")
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Scroll-driven title calculations
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
  const scrollProgress = Math.min(scrollY / windowHeight, 1)

  // Title starts at top and scrolls down with user
  const titleTranslateY = scrollY * 0.8 // Moves down as user scrolls
  const titleOpacity = Math.max(0, 1 - scrollProgress * 1.2) // Fades out completely

  // Pattern movement - extremely subtle
  const patternOffset = scrollY * 0.05

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerVisible ? "bg-gray-50/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        style={{ willChange: headerVisible ? "auto" : "background-color" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-48 h-12">
              <Image
                src="/images/be-slugworks-header-logo.png"
                alt="Baskin Engineering & Slugworks"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div
              className={`text-right transition-colors duration-300 ${headerVisible ? "text-ucsc-navy" : "text-white"}`}
            >
              <p className="text-lg font-bold text-ucsc-gold">ISAM 2025</p>
              <p className="text-sm opacity-90">UC Santa Cruz</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #003c6c 0%, #1e40af 40%, #F29813 100%)`,
        }}
      >
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/images/subtle-background.png')`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            transform: `translateY(${patternOffset}px)`,
            willChange: "transform",
          }}
        />

        {/* Soft White Overlay for Text Readability */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
              radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(circle at 30% 70%, rgba(242, 152, 19, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(253, 199, 0, 0.15) 0%, transparent 50%)
            `,
          }}
        />

        {/* Scroll-Driven Title Container */}
        <div className="absolute inset-0 z-20 flex flex-col justify-start items-center pt-32 pointer-events-none">
          <div
            className="text-center max-w-7xl mx-auto px-6"
            style={{
              transform: `translate3d(0, ${titleTranslateY}px, 0)`,
              opacity: titleOpacity,
              willChange: "transform, opacity",
            }}
          >
            {/* Bold Black Typeface with White Fill and Black Stroke */}
            <div className="relative mb-16 py-8">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                  fontWeight: 900,
                  color: "white",
                  WebkitTextStroke: "3px #000000",
                  textStroke: "3px #000000",
                  transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
                  textShadow: `
                    0 0 10px rgba(0, 0, 0, 0.8),
                    0 4px 8px rgba(0, 0, 0, 0.6),
                    0 8px 16px rgba(0, 0, 0, 0.4)
                  `,
                  willChange: "transform",
                  filter: "contrast(1.2) brightness(1.1)",
                }}
              >
                Connection Through Canvas:
              </h1>
            </div>

            {/* Subtitle Stack */}
            <div className="relative mb-12 space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-bold leading-relaxed font-inter max-w-5xl mx-auto">
                A centralized, student-led approach to certification, collaboration, and community using Canvas.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-200 font-medium leading-relaxed font-inter max-w-4xl mx-auto">
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
                  shadow-xl transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-1
                  border-2 border-white/30
                  font-inter
                  hover:shadow-orange-400/50
                  active:scale-95
                "
                style={{
                  boxShadow: "0 0 20px rgba(242, 152, 19, 0.4), 0 8px 25px rgba(0, 0, 0, 0.3)",
                }}
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-300 ${
            isVisible && scrollY < windowHeight * 0.2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-white/90 cursor-pointer" onClick={scrollToOverview}>
            <span className="text-sm font-medium mb-3 tracking-wider font-inter">SCROLL TO EXPLORE</span>
            <ChevronDown size={28} className="animate-bounce" />
          </div>
        </div>

        {/* Subtle Ambient Effects */}
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-ucsc-gold/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  )
}

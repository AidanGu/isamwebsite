"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function OptimizedScrollHero() {
  const [scrollY, setScrollY] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight

    setScrollY(currentScrollY)
    setHeaderVisible(currentScrollY > windowHeight * 0.3)
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
    return () => window.removeEventListener("scroll", scrollListener)
  }, [handleScroll])

  const scrollToOverview = () => {
    const overviewSection = document.getElementById("overview")
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Scroll-driven title animation - follows scroll from top to bottom
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
  const titleTranslateY = Math.min(scrollY * 0.6, windowHeight * 0.8) // Moves down with scroll
  const titleOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.9)) // Fades out

  return (
    <>
      {/* Optimized Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerVisible ? "bg-gray-50/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
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
        {/* Extremely Subtle Background Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/background.png')`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            opacity: 0.04, // Extremely low opacity
          }}
        />

        {/* Light Overlay for Text Readability */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
          }}
        />

        {/* Scroll-Following Title Container */}
        <div className="absolute inset-0 z-20 flex flex-col justify-start items-center pt-20 pointer-events-none">
          <div
            className="text-center max-w-7xl mx-auto px-6"
            style={{
              transform: `translate3d(0, ${titleTranslateY}px, 0)`,
              opacity: titleOpacity,
              willChange: "transform, opacity",
            }}
          >
            {/* Double-Layered Title Effect */}
            <div className="relative mb-16 py-12">
              {/* Back Layer - Glowing Orange, Offset Up */}
              <h1
                className="absolute text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight select-none"
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 900,
                  color: "#F29813",
                  transform: "translateY(-14px) scale(1.05) translateZ(-1px)",
                  filter: `
                    blur(1px) 
                    drop-shadow(0 0 20px rgba(242, 152, 19, 0.8))
                    drop-shadow(0 0 40px rgba(242, 152, 19, 0.6))
                    drop-shadow(0 0 60px rgba(242, 152, 19, 0.4))
                  `,
                  opacity: 0.9,
                  zIndex: 1,
                }}
              >
                Connection Through Canvas:
              </h1>

              {/* Front Layer - Large Black Text */}
              <h1
                className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 900,
                  textShadow: `
                    0 2px 4px rgba(255, 255, 255, 0.3),
                    0 4px 8px rgba(0, 0, 0, 0.1)
                  `,
                  zIndex: 2,
                  filter: "contrast(1.1)",
                }}
              >
                Connection Through Canvas:
              </h1>
            </div>

            {/* Subtitle Stack */}
            <div className="relative mb-12 space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed font-inter max-w-5xl mx-auto">
                A centralized, student-led approach to certification, collaboration, and community using Canvas.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed font-inter max-w-4xl mx-auto">
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
                  active:scale-95
                "
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-300 ${
            scrollY < windowHeight * 0.2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-white/90 cursor-pointer" onClick={scrollToOverview}>
            <span className="text-sm font-medium mb-3 tracking-wider font-inter">SCROLL TO EXPLORE</span>
            <ChevronDown size={28} className="animate-bounce" />
          </div>
        </div>
      </div>
    </>
  )
}

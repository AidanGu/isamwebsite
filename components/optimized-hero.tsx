"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function OptimizedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [headerVisible, setHeaderVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()

  // Throttled mouse movement handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return

    rafRef.current = requestAnimationFrame(() => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 8, y: y * 8 }) // Reduced from 10px to 8px
      }
      rafRef.current = undefined
    })
  }, [])

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight

    setScrollY(currentScrollY)

    // Fade threshold at 90vh
    const fadeThreshold = windowHeight * 0.9
    setIsVisible(currentScrollY < fadeThreshold)

    // Header visibility after hero
    setHeaderVisible(currentScrollY > windowHeight * 0.5)
  }, [])

  useEffect(() => {
    // Throttled scroll listener
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", scrollListener, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", scrollListener)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleMouseMove, handleScroll])

  const scrollToOverview = () => {
    const overviewSection = document.getElementById("overview")
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Optimized calculations
  const contentOpacity = isVisible ? Math.max(0, 1 - scrollY / (window.innerHeight * 0.8)) : 0
  const parallaxOffset = scrollY * 0.3

  return (
    <>
      {/* Optimized Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerVisible ? "bg-gray-50/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        style={{ willChange: headerVisible ? "auto" : "background-color, backdrop-filter" }}
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
          background: `linear-gradient(135deg, #003c6c 0%, #1e3a8a 50%, #92400e 100%)`,
        }}
      >
        {/* Optimized Background Layer */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            background: `
              radial-gradient(circle at 25% 75%, rgba(242, 152, 19, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(229, 156, 59, 0.25) 0%, transparent 50%)
            `,
            willChange: "transform",
          }}
        />

        {/* Reduced Particle Count - Only 15 particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? "#F29813" : i % 3 === 1 ? "#E59C3B" : "#FDC700",
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Optimized Grid Pattern */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(rgba(253, 199, 0, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(253, 199, 0, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            transform: `translate3d(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px, 0)`,
            willChange: "transform",
          }}
        />

        {/* Fixed Content Block */}
        <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div
            className="text-center max-w-7xl mx-auto px-6"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
              opacity: contentOpacity,
              willChange: isVisible ? "transform, opacity" : "auto",
            }}
          >
            {/* Dual-Layer Title */}
            <div className="relative mb-10">
              {/* Glow Layer */}
              <h1
                className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-space-grotesk leading-tight"
                style={{
                  color: "#E59C3B",
                  filter: "blur(8px)",
                  opacity: 0.6,
                  transform: "translate3d(2px, 2px, 0)",
                }}
              >
                Connection Through Canvas:
              </h1>

              {/* Main Title */}
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-space-grotesk leading-tight">
                Connection Through Canvas:
              </h1>
            </div>

            {/* Subtitle Stack */}
            <div className="relative mb-12 space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed font-inter max-w-5xl mx-auto">
                A centralized, student-led approach to certification, collaboration, and community using Canvas.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed font-inter max-w-4xl mx-auto">
                This page provides a deeper dive into the insights presented in our ISAM poster, showcasing how
                Slugworks and DSI transformed makerspace engagement through innovative Canvas LMS integration.
              </p>
            </div>

            {/* Optimized CTA Button */}
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
                  border border-white/20
                  font-inter
                  hover:shadow-orange-400/40
                  active:scale-95
                "
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Optimized Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-300 ${
            isVisible && scrollY < window.innerHeight * 0.2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-white/90 cursor-pointer" onClick={scrollToOverview}>
            <span className="text-sm font-medium mb-3 tracking-wider font-inter">SCROLL TO EXPLORE</span>
            <ChevronDown size={28} className="animate-bounce" />
          </div>
        </div>

        {/* Simplified Ambient Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  )
}

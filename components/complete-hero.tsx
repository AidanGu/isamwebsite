"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function CompleteHero() {
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

  // Scroll-driven animations
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
  const imageTranslateY = scrollY * 0.3
  const imageOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.8))
  const imageScale = Math.max(0.95, 1 - scrollY / (windowHeight * 2))

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
        {/* Enhanced gradient background */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(circle at 30% 70%, rgba(242, 152, 19, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(253, 199, 0, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)
            `,
          }}
        />

        {/* Decorative Flag Bars - Top */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="relative h-16 bg-gradient-to-r from-black/80 via-black/60 to-black/80 transform -skew-y-1 origin-top-left shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-ucsc-gold/20 to-transparent"></div>
          </div>
        </div>

        {/* Decorative Flag Bars - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="relative h-16 bg-gradient-to-r from-black/80 via-black/60 to-black/80 transform skew-y-1 origin-bottom-left shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ucsc-gold/20"></div>
          </div>
        </div>

        {/* Side Accent Bars */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-ucsc-gold via-orange-500 to-ucsc-gold shadow-lg z-10"></div>
        <div className="absolute right-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-ucsc-gold via-orange-500 to-ucsc-gold shadow-lg z-10"></div>

        {/* Hero Content Container */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 pointer-events-none">
          <div
            className="w-full max-w-7xl mx-auto text-center"
            style={{
              transform: `translate3d(0, ${imageTranslateY}px, 0) scale(${imageScale})`,
              opacity: imageOpacity,
              willChange: "transform, opacity",
            }}
          >
            {/* Supporting Flag Bar Above Main Title */}
            <div className="relative mb-6 md:mb-8">
              <div className="h-8 md:h-12 bg-gradient-to-r from-transparent via-black/70 to-transparent transform -rotate-1 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-ucsc-gold/30 via-transparent to-ucsc-gold/30"></div>
              </div>
            </div>

            {/* Main Header Image - Enhanced */}
            <div className="relative w-full mb-6 md:mb-8">
              <div
                className="relative w-full h-24 sm:h-28 md:h-36 lg:h-44 xl:h-52 mx-auto"
                style={{
                  filter: `
                    drop-shadow(0 6px 16px rgba(0, 0, 0, 0.5))
                    drop-shadow(0 12px 32px rgba(0, 0, 0, 0.3))
                    drop-shadow(0 0 24px rgba(255, 255, 255, 0.1))
                  `,
                }}
              >
                <Image
                  src="/images/isam-webpage-header.png"
                  alt="Connection Through Canvas - ISAM 2025"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                />
              </div>
            </div>

            {/* Supporting Flag Bar Below Main Title */}
            <div className="relative mb-8 md:mb-12">
              <div className="h-6 md:h-8 bg-gradient-to-r from-transparent via-black/60 to-transparent transform rotate-1 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ucsc-gold/40 to-transparent"></div>
              </div>
            </div>

            {/* Subtitle Section - Enhanced */}
            <div className="relative mb-8 md:mb-12 space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed font-inter max-w-5xl mx-auto px-4">
                A centralized, student-led approach to certification, collaboration, and community using Canvas.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed font-inter max-w-4xl mx-auto px-4">
                This page provides a deeper dive into the insights presented in our ISAM poster, showcasing how
                Slugworks and DSI transformed makerspace engagement through innovative Canvas LMS integration.
              </p>
            </div>

            {/* CTA Button with Enhanced Styling */}
            <div className="pointer-events-auto relative">
              {/* Button Background Accent */}
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl blur-sm"></div>

              <Button
                size="lg"
                onClick={scrollToOverview}
                className="
                  relative bg-gradient-to-r from-orange-500 to-yellow-500 
                  hover:from-orange-400 hover:to-yellow-400
                  text-ucsc-navy font-bold 
                  px-8 py-4 text-lg md:px-12 md:py-6 md:text-xl 
                  rounded-2xl shadow-2xl transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-1
                  border-2 border-white/40
                  font-inter active:scale-95
                "
                style={{
                  boxShadow: `
                    0 0 30px rgba(242, 152, 19, 0.5), 
                    0 12px 35px rgba(0, 0, 0, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-300 ${
            scrollY < windowHeight * 0.2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-white/90 cursor-pointer" onClick={scrollToOverview}>
            <span className="text-sm font-medium mb-3 tracking-wider font-inter">SCROLL TO EXPLORE</span>
            <div className="relative">
              <ChevronDown size={28} className="animate-bounce" />
              <div className="absolute -inset-2 bg-white/10 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Ambient Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-ucsc-gold/12 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/12 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </>
  )
}

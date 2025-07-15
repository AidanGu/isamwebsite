"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function ElegantHero() {
  const [scrollY, setScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    setScrollY(currentScrollY);
    setHeaderVisible(currentScrollY > windowHeight * 0.3);
  }, []);

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  const scrollToOverview = () => {
    const overviewSection = document.getElementById("overview");
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Smooth parallax fade out
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const titleOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.8));
  const titleTranslateY = scrollY * 0.2;

  return (
    <>
      {/* Optimized Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerVisible
            ? "bg-black shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-40 h-7">
              <a
                href="https://slugworks.engineering.ucsc.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-40 h-7 block"
              >
                <Image
                  src="/images/BE-and-Slugworks-Combination-Mark-(For-Header) (1).png"
                  alt="Baskin Engineering & Slugworks"
                  fill
                  className="object-fit"
                  priority
                />
              </a>
            </div>
            <a
              href="https://isam2025.hemi-makers.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-right text-white transition-colors duration-300 hover:underline"
            >
              <p className="text-lg font-bold text-ucsc-gold">ISAM 2025</p>
              <p className="text-sm opacity-90">UC Santa Cruz</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

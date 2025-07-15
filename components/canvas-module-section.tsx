"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function CanvasModuleSection() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">
            What It Looks Like in Canvas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            The Canvas course includes modules for onboarding, machine certification, safety training, and scheduling walkthroughs.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This self-paced structure is designed for scalability, helping students progress smoothly and independently through certification steps.
          </p>
        </div>

        <Card className="rounded-3xl border-0 shadow-xl bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-4">
              <p className="text-base md:text-lg font-semibold text-red-600 animate-pulse drop-shadow-lg">
                CLICK IMAGE TO SEE CANVAS IN ACTION!
              </p>
            </div>

            <div
              className="relative w-full h-96 rounded-2xl overflow-hidden cursor-zoom-in transition-all duration-300 hover:scale-110"
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ transformOrigin: "center" }}
            >
              <Image
                src={
                  isFlipped
                    ? "/images/generalcanvas.gif"
                    : "/images/canvas-module-overview.png"
                }
                alt="Canvas Module Interaction Demo"
                fill
                className="object-contain transition-transform duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

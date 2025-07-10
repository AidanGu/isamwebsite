"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function DSICollaborationSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Seamless Certification Across Campus</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This shared certification workflow between DSI and Slugworks allows students to complete training once and
            unlock tools in both locations. It's all handled through a streamlined Canvas process.
          </p>
        </div>

        <Card className="rounded-3xl border-0 shadow-xl bg-white">
          <CardContent className="p-8">
            <div
              className={`relative w-full rounded-2xl overflow-hidden cursor-zoom-in transition-all duration-300 hover:scale-110 ${
                isExpanded ? "h-96" : "h-64"
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ transformOrigin: "center" }}
            >
              <Image
                src="/images/dsi-workflow-horizontal.png"
                alt="DSI and Slugworks 3D Printer Certification Workflow"
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

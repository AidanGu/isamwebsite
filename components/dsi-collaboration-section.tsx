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
            This shared certification workflow between DSI and Slugworks allows students to complete training once and unlock tools in both locations. The entire process is handled through a single streamlined Canvas module.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Digital Scholarship Innovation Studio (DSI), located in the Science and Engineering Library, offers hands-on resources for digital fabrication, 3D data, and critical making. This unified system reduces duplication, encourages cross-campus collaboration, and supports open experimentation.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto mt-2 italic">
            The workflow below shows how students move through certification to gain access at both DSI and Slugworks.
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

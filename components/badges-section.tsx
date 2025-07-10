"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const badges = [
  {
    id: "creatorspace",
    title: "Creatorspace Access",
    image: "/images/creatorspace-badge.png",
    requirement: "Complete Creatorspace (BE-54)",
  },
  {
    id: "shop",
    title: "The Shop Access",
    image: "/images/shop-badge.png",
    requirement: "Complete The Shop (BE-51)",
  },
  {
    id: "club-hub",
    title: "Club Hub Access",
    image: "/images/club-hub-badge.png",
    requirement: "Complete The Club Hub (BE-49)",
  },
  {
    id: "paint-booth",
    title: "Paint Booth Access",
    image: "/images/paint-booth-badge.png",
    requirement: "Complete Paint Booth (BE-50)",
  },
  {
    id: "sewing",
    title: "Sewing Machine Certification",
    image: "/images/sewing-badge.png",
    requirement: "Complete Sewing Machines (BE-54)",
  },
  {
    id: "cricut",
    title: "Cricut Maker 3 Certification",
    image: "/images/cricut-badge.png",
    requirement: "Complete Cricut Maker 3 (BE-54)",
  },
  {
    id: "3d-printing",
    title: "3D Printer Certification",
    image: "/images/3d-printing-badge.png",
    requirement: "Complete 3D Printers (BE-54)",
  },
  {
    id: "laser-cutting",
    title: "Laser Cutter Certification",
    image: "/images/laser-cutting-badge.png",
    requirement: "Complete Laser Cutter (BE-51)",
  },
]

export function BadgesSection() {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Certification Badges</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each badge represents completion of specific Canvas modules, providing structured pathways to equipment
            access and expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <Card
              key={badge.id}
              className={`hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 shadow-lg bg-white group cursor-pointer ${
                hoveredBadge === badge.id ? "scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredBadge(badge.id)}
              onMouseLeave={() => setHoveredBadge(null)}
            >
              <CardContent className="p-6 text-center">
                <div className="relative w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image src={badge.image || "/placeholder.svg"} alt={badge.title} fill className="object-contain" />
                </div>
                <h3 className="font-bold text-ucsc-navy mb-2 text-sm leading-tight">{badge.title}</h3>
                <div
                  className={`bg-ucsc-gold bg-opacity-20 px-2 py-1 rounded-full transition-all duration-300 ${
                    hoveredBadge === badge.id ? "bg-opacity-100" : ""
                  }`}
                >
                  <p className="text-xs font-medium text-ucsc-navy">{badge.requirement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

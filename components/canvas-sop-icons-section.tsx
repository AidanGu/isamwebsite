"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const sopItems = [
  { id: "safety-glasses", name: "Safety Glasses", image: "/images/safety_glasses.svg" },
  { id: "closed-toe", name: "Closed-Toe Shoes", image: "/images/closed_toe_shoes.svg" },
  { id: "clothing", name: "Protective Clothing", image: "/images/protective_clothing.svg" },
  { id: "tie-back", name: "Tie Back Hair", image: "/images/tie_back_hair.svg" },
  { id: "entangle", name: "Avoid Entanglement", image: "/images/entangle.svg" },
  { id: "debris", name: "Avoid Debris", image: "/images/debris.svg" },
  { id: "contact", name: "Contact Staff", image: "/images/contact.svg" },
]

export function CanvasSOPIconsSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6 font-space-grotesk">Safety & SOPs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In order for students to gain full access to each area in Slugworks, they must complete safety-focused Canvas modules specific to each zone and machine. These modules include quizzes and knowledge checks that confirm understanding of operational and environmental safety. Below are some of the icons featured in these Canvas modules. These visuals and SOP modules ensure a safe, welcoming, and well-supported experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sopItems.map((item) => (
            <Card
              key={item.id}
              className={`hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 shadow-lg bg-white group cursor-pointer ${
                hovered === item.id ? "scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <CardContent className="p-6 text-center">
                <div className="relative w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                </div>
                <h3 className="font-bold text-ucsc-navy mb-2 text-sm leading-tight">{item.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Students working on 3D printing project",
    caption: "3D Printing Workshop",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Laser cutting demonstration",
    caption: "Laser Cutting Training",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Electronics prototyping session",
    caption: "Electronics Lab",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Student presenting their project",
    caption: "Project Showcase",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Collaborative workspace",
    caption: "Collaborative Making",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Canvas interface on computer screen",
    caption: "Canvas Training Platform",
  },
]

export function Gallery() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Community in Action</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how students engage with our Canvas-integrated system and create amazing projects in the Slugworks
            makerspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.caption}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of our student work and community activities?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
              onClick={() => window.open("https://www.instagram.com/ucscslugworks/", "_blank")}
            >
              Follow us on Instagram
            </button>
            <button
              className="border border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-2 rounded-lg transition-colors"
              onClick={() => window.open("https://canvas.ucsc.edu/courses/77701", "_blank")}
            >
              Browse Canvas Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

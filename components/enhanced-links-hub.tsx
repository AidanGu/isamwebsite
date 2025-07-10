"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const links = [
  {
    title: "Slugworks Website",
    url: "https://slugworks.engineering.ucsc.edu/",
    icon: "/images/slugworks-website-icon.png",
    description: "Explore our makerspace facilities and resources",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Canvas Course",
    url: "https://canvas.ucsc.edu/courses/77701",
    icon: "/images/slugworks-canvas-icon.png",
    description: "Access training modules and certifications",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Slugworks Instagram",
    url: "https://www.instagram.com/ucscslugworks/",
    icon: "/images/slugworks-instagram-icon.png",
    description: "Follow our community and student projects",
    color: "from-pink-500 to-pink-600",
  },
]

export function EnhancedLinksHub() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `url('/images/subtle-background.png')`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6 font-space-grotesk">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our digital ecosystem and join the Slugworks community across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 shadow-lg bg-white group cursor-pointer hover:scale-105 overflow-hidden"
              onClick={() => window.open(link.url, "_blank")}
            >
              <CardContent className="p-8 text-center relative">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${link.color}`} />

                <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={link.icon || "/placeholder.svg"}
                    alt={link.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl text-ucsc-navy mb-4 font-space-grotesk">{link.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{link.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-ucsc-navy text-ucsc-navy hover:bg-ucsc-navy hover:text-white rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  Visit <ExternalLink size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

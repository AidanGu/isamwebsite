"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, BookOpen, Instagram, Home } from "lucide-react"

const links = [
  {
    title: "Slugworks Website",
    url: "https://slugworks.engineering.ucsc.edu/",
    icon: Home,
    color: "bg-ucsc-blue",
  },
  {
    title: "Canvas Course",
    url: "https://canvas.ucsc.edu/courses/77701",
    icon: BookOpen,
    color: "bg-ucsc-navy",
  },
  {
    title: "Slugworks Instagram",
    url: "https://www.instagram.com/ucscslugworks/",
    icon: Instagram,
    color: "bg-pink-500",
  },
]

export function LinksHub() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 shadow-lg bg-white group cursor-pointer"
              onClick={() => window.open(link.url, "_blank")}
            >
              <CardContent className="p-8 text-center">
                <div className={`${link.color} p-4 rounded-2xl shadow-lg mx-auto mb-4 w-fit`}>
                  <link.icon className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-xl text-ucsc-navy mb-4">{link.title}</h3>
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

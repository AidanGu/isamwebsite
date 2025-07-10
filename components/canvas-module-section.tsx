import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function CanvasModuleSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">What It Looks Like in Canvas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modules for onboarding, equipment safety, scheduling, and certification.
          </p>
        </div>

        <Card className="rounded-3xl border-0 shadow-xl bg-white">
          <CardContent className="p-8">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden cursor-zoom-in transition-all duration-300 hover:scale-110" style={{ transformOrigin: "center" }}>
              <Image
                src="/images/canvas-module-overview.png"
                alt="Canvas Module Structure Overview"
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

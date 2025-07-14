import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export function AboutPosterSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">About the Poster</h2>
        </div>

        <Card className="rounded-3xl border-0 shadow-xl bg-white">
          <CardContent className="p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-ucsc-navy mb-6">ISAM 2025 Abstract</h3>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  University makerspaces face a universal challenge: bridging the gap between diverse users and
                  fostering inclusive, scalable engagement. This poster presents a model for leveraging Canvas as a
                  centralized platform to onboard, train, and connect makers while strengthening ties across campus.
                </p>
                <p>
                  <strong>Certification:</strong> Canvas's badging system transforms skill-building into visible
                  achievements, combatting imposter syndrome by validating incremental progress (e.g., safety training,
                  equipment mastery). Micro-credentials gamify learning, externalize competency, and reinforce
                  identity—shifting mindsets from "I don't belong" to "I've earned this."
                </p>
                <p>
                  <strong>Collaboration:</strong> Canvas breaks down disciplinary silos by hosting interdisciplinary
                  project portals and shared resources. Faculty integrate makerspace modules into their coursework,
                  while students can co-create across departments, turning the makerspace's canvas into a collaboration
                  machine.
                </p>
                <p>
                  <strong>Connectivity & Communication:</strong> Targeted messaging, calendar integration, and
                  announcements cultivate community beyond physical space. Highlighting student projects and organizing
                  events within Canvas sustains engagement, linking novice and expert makers in a continuous feedback
                  loop.
                </p>
                <p>
                  By utilizing Canvas as a makerspace nexus, institutions can democratize access, streamline
                  administration, and build student confidence—all while weaving experiential learning into the broader
                  academic fabric.
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://isam2025.exordo.com/files/papers/145/final_draft/ISAM_Poster_FINAL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-ucsc-navy hover:bg-blue-800 text-white font-bold px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-3" size={24} />
                    Poster PDF
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

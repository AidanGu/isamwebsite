import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Mrs. Tamara Ball",
    title: "Director of Experiential Learning, Baskin Engineering, UCSC",
    email: "tball@ucsc.edu",
  },
  {
    name: "Mr. Nicolas Kouatli",
    title: "Slugworks Lab Manager, Baskin Engineering, University of California Santa Cruz",
    email: "nkouatli@ucsc.edu",
  },
  {
    name: "Dr. Kristina Golubiewski-Davis",
    title: "Director of Digital Scholarship Commons, UCSC",
    email: "kgolubie@ucsc.edu",
  },
  {
    name: "Mr. Aidan Gu",
    title: "Learning by Design Community Curator (Slugworks)",
    email: "ahgu@ucsc.edu",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Project Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-ucsc-navy mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center space-x-2 text-ucsc-blue hover:text-ucsc-navy transition-colors font-medium"
                >
                  <Mail size={18} />
                  <span>{member.email}</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Building } from "lucide-react"

const teamMembers = [
  {
    name: "Mr. Nicolas Kouatli",
    title: "Slugworks Lab Manager",
    email: "nkouatli@ucsc.edu",
    affiliation: "Baskin Engineering, University of California Santa Cruz",
  },
  {
    name: "Dr. Tamara Ball",
    title: "Director of Experiential Learning",
    email: "tball@ucsc.edu",
    affiliation: "Baskin Engineering, University of California Santa Cruz",
  },
  {
    name: "Mr. Aidan Gu",
    title: "Learning by Design Community Curator (Slugworks)",
    email: "aigu@ucsc.edu",
    affiliation: "Baskin Engineering, University of California Santa Cruz",
  },
  {
    name: "Dr. Kristina Golubiewski-Davis",
    title: "Director, University Library Center for Digital Scholarship",
    email: "kgolubid@ucsc.edu",
    affiliation: "University of California Santa Cruz",
  },
]

export function ProjectTeamSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Project Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our interdisciplinary team brings together expertise from engineering, library sciences, and makerspace
            management to create this comprehensive Canvas integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-ucsc-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-ucsc-navy">
                      {member.name.split(" ")[1]?.[0] || member.name[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-ucsc-navy mb-2">{member.name}</h3>
                  <p className="text-lg font-medium text-ucsc-gold mb-4">{member.title}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Building size={18} className="text-ucsc-blue flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{member.affiliation}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-ucsc-blue flex-shrink-0" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-ucsc-blue hover:text-ucsc-navy transition-colors font-medium"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-ucsc-navy mb-4">Collaborative Partnership</h3>
            <p className="text-gray-600 leading-relaxed">
              This project represents a successful collaboration between UCSC Slugworks and the Digital Scholarship
              Innovation Studio (DSI), demonstrating how cross-institutional partnerships can enhance student learning
              and makerspace accessibility through innovative use of existing educational technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

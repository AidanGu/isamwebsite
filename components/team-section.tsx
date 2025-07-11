import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Tamara Ball",
    title: "Director of Experiential Learning",
    email: "tball@ucsc.edu",
    location: "University of California, Santa Cruz",
  },
  {
    name: "Mr. Nicolas Kouatli",
    title: "Slugworks Lab Manager",
    email: "nkouatli@ucsc.edu",
    location: "University of California, Santa Cruz",
  },
  {
    name: "Dr. Kristina Golubiewski-Davis",
    title: " Director, University Library Center for Digital Scholarship",
    email: "kgolubie@ucsc.edu",
    location: "University of California, Santa Cruz",
  },
  {
    name: "Mr. Aidan Gu",
    title: "Learning by Design Community Curator",
    email: "ahgu@ucsc.edu",
    location: "University of California, Santa Cruz",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">
            Project Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-ucsc-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {member.title}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {member.location}
                </p>
                <picture></picture>
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
  );
}

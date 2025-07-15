import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Aidan Gu",
    title: "Learning by Design Community Curator",
    email: "ahgu@ucsc.edu",
    location: "University of California, Santa Cruz",
    image: "/images/Aidan-Staff-Photo.png",
  },
  {
    name: "Mr. Nicolas Kouatli",
    title: "Slugworks Lab Manager",
    email: "nkouatli@ucsc.edu",
    location: "University of California, Santa Cruz",
    image: "/images/Nick-Staff-Photo.png",
  },
  {
    name: "Dr. Tamara Ball",
    title: "Director of Experiential Learning",
    email: "tball@ucsc.edu",
    location: "University of California, Santa Cruz",
    image: "/images/Tamara-Staff-Photo.png",
  },
  {
    name: "Dr. Kristina Golubiewski-Davis",
    title: "Director, University Library Center for Digital Scholarship",
    email: "kgolubie@ucsc.edu",
    location: "University of California, Santa Cruz",
    image: "/images/Kristy-Staff-Photo.png",
  }
];

export function TeamSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">
            Project Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    width={160}
                    height={160}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ucsc-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-1 leading-relaxed text-sm md:text-base">
                  {member.title}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {member.location}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center space-x-2 text-ucsc-blue hover:text-ucsc-navy transition-colors font-medium"
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

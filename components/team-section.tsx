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
    linkedin: "https://www.linkedin.com/in/aidangu/"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    width={192}
                    height={192}
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
                <div className="flex flex-col items-center space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center space-x-2 text-ucsc-blue hover:text-ucsc-navy transition-colors font-medium"
                  >
                    <Mail size={18} />
                    <span>{member.email}</span>
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ucsc-blue hover:text-ucsc-navy font-medium underline"
                    >
                      View LinkedIn Profile
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm md:text-base">
            Special thanks to Sankritya Anand Rai (Sankie) for contributing to the development of this website.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Share2, BookOpen, Users2 } from "lucide-react"

export function CollaborationSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Cross-Campus Collaboration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Canvas breaks down disciplinary silos by hosting interdisciplinary project portals and shared resources,
            enabling seamless collaboration across departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-ucsc-blue to-blue-600 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Building2 className="text-ucsc-gold" size={28} />
                <span>Shared Department Modules</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="mb-6 leading-relaxed opacity-90">
                Different departments utilize shared Canvas modules, creating consistency across campus while
                maintaining flexibility for specific needs.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <span className="font-semibold text-ucsc-gold">Engineering:</span> Technical fabrication modules
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <span className="font-semibold text-ucsc-gold">Art:</span> Creative design and prototyping
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <span className="font-semibold text-ucsc-gold">Computer Science:</span> Electronics and programming
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Share2 className="text-ucsc-gold" size={28} />
                <span>Joint Certification with DSI</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="mb-6 leading-relaxed opacity-90">
                Partnership with UCSC's Digital Scholarship Innovation Studio (DSI) creates shared certification
                workflows that streamline training across spaces.
              </p>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                <p className="text-sm font-semibold text-ucsc-gold mb-2">Cross-Recognition Benefits:</p>
                <p className="text-sm opacity-90">
                  Students earn certifications recognized across both Slugworks and DSI, maximizing access and reducing
                  redundancy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <BookOpen className="text-purple-500" size={28} />
                <span className="text-ucsc-navy">Faculty Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 leading-relaxed">
                Instructors can easily integrate existing Canvas modules into their coursework, bringing hands-on making
                directly into academic curricula.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Users2 className="text-ucsc-gold" size={28} />
                <span className="text-ucsc-navy">Interdisciplinary Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 leading-relaxed">
                Students co-create across departments, turning the makerspace into a collaboration machine that fosters
                innovation through diverse perspectives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

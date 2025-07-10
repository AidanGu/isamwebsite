import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Users, Calendar } from "lucide-react"

export function CertificationSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Canvas-Based Certification</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform skill-building into visible achievements, combating imposter syndrome by validating incremental
            progress through our comprehensive badging system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <CheckCircle className="text-green-500" size={28} />
                <span className="text-ucsc-navy">Equipment Training Modules</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Structured learning paths for each piece of equipment, from basic safety to advanced techniques.
              </p>
              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-sm text-gray-700 font-medium mb-2">Training Areas:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-ucsc-gold text-ucsc-navy px-3 py-1 rounded-full text-sm font-medium">
                    3D Printing
                  </span>
                  <span className="bg-ucsc-gold text-ucsc-navy px-3 py-1 rounded-full text-sm font-medium">
                    Laser Cutting
                  </span>
                  <span className="bg-ucsc-gold text-ucsc-navy px-3 py-1 rounded-full text-sm font-medium">
                    CNC Machining
                  </span>
                  <span className="bg-ucsc-gold text-ucsc-navy px-3 py-1 rounded-full text-sm font-medium">Sewing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Award className="text-ucsc-gold" size={28} />
                <span className="text-ucsc-navy">Badging & Micro-credentials</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gamified learning system that externalizes competency and reinforces identity, shifting mindsets from "I
                don't belong" to "I've earned this."
              </p>
              <div className="bg-gradient-to-r from-ucsc-gold to-yellow-400 p-4 rounded-2xl text-ucsc-navy">
                <p className="font-semibold text-sm">Impact on Students:</p>
                <p className="text-sm mt-1">Builds confidence and validates incremental progress</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Users className="text-ucsc-blue" size={28} />
                <span className="text-ucsc-navy">Role-based Progression</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Clear pathways from learner to trained user to student worker, with check-offs and peer mentoring.
              </p>
              <div className="flex items-center justify-between text-sm bg-gray-50 p-4 rounded-2xl">
                <span className="bg-gray-200 px-3 py-2 rounded-full font-medium">Learner</span>
                <span className="text-gray-400">→</span>
                <span className="bg-ucsc-gold px-3 py-2 rounded-full font-medium text-ucsc-navy">Trained User</span>
                <span className="text-gray-400">→</span>
                <span className="bg-green-200 px-3 py-2 rounded-full font-medium text-green-800">Student Worker</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Calendar className="text-purple-500" size={28} />
                <span className="text-ucsc-navy">Appointlet Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamless scheduling system integrated directly into Canvas for training sessions, check-offs, and
                equipment reservations.
              </p>
              <div className="bg-purple-50 p-4 rounded-2xl">
                <p className="text-purple-800 font-semibold text-sm">Streamlined Scheduling:</p>
                <p className="text-purple-700 text-sm mt-1">
                  Reduces administrative overhead and improves user experience
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

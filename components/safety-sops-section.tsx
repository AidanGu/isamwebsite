import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function SafetySOPsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6 font-space-grotesk">
            Safety & Standard Operating Procedures
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            All users must pass required safety content before getting certified. SOPs are hosted on Canvas and reviewed
            during training, ensuring consistent safety standards across all equipment and facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-ucsc-navy">Canvas-Integrated Safety Modules</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Digital safety training modules are embedded directly in Canvas, providing interactive learning
                experiences with progress tracking and assessment capabilities.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-ucsc-navy mb-4">Safety Training Features:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Interactive safety quizzes and assessments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Video demonstrations of proper procedures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Equipment-specific safety protocols</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Progress tracking and completion certificates</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-ucsc-navy">Digital SOP Library</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Standard Operating Procedures are centrally hosted on Canvas, ensuring all users have access to the most
                current safety guidelines and operational protocols.
              </p>
              <div className="bg-gradient-to-br from-ucsc-gold to-yellow-400 p-6 rounded-2xl text-ucsc-navy">
                <h4 className="font-semibold mb-4">SOP Management Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-navy rounded-full mt-2 flex-shrink-0"></div>
                    <span>Always up-to-date procedures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-navy rounded-full mt-2 flex-shrink-0"></div>
                    <span>Version control and change tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-navy rounded-full mt-2 flex-shrink-0"></div>
                    <span>Easy access during training sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ucsc-navy rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consistent safety standards</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Equipment Icons Grid */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold text-ucsc-navy text-center mb-8">Required Safety Equipment Training</h3>
          <div className="flex justify-center mb-8">
            <div className="relative w-80 h-80">
              <Image
                src="/images/canvas-safety-icons.png"
                alt="Safety Equipment Icons: Safety Goggles, Protective Clothing, Hearing Protection, Safety Footwear"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Each piece of safety equipment has dedicated Canvas modules covering proper usage, maintenance, and safety
            protocols. Students must demonstrate competency in all required safety areas before gaining equipment
            access.
          </p>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

export function CanvasDataSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Using Canvas to Understand Our Growth</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Because all users go through the Canvas LMS, we can track certifications, tool usage, time-to-completion,
            demographics, and more. This gives us clear insight into how the space is growing—and who we're serving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-100 to-blue-200 text-gray-900 text-center">
            <CardContent className="p-8">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Demographics</h3>
              <p className="text-sm opacity-90">Track engagement across departments and backgrounds</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-green-100 bg-gradient-to-br from-green-100 to-green-200 text-gray-900 text-center">
            <CardContent className="p-8">
              <BarChart3 className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Tool Usage</h3>
              <p className="text-sm opacity-90">Monitor equipment popularity and patterns</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-purple-100 bg-gradient-to-br from-purple-100 to-purple-200 text-gray-900 text-center">
            <CardContent className="p-8">
              <Clock className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Completion Time</h3>
              <p className="text-sm opacity-90">Analyze training progression speed</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-orange-100 bg-gradient-to-br from-orange-100 to-orange-200 text-gray-900 text-center">
            <CardContent className="p-8">
              <TrendingUp className="mx-auto mb-4 text-orange-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Growth Trends</h3>
              <p className="text-sm opacity-90">Track makerspace expansion over time</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We presented this data to Dean of Engineering Alexander Wolf to showcase Slugworks’ growth, community impact, and potential. Aidan Gu also had the opportunity to speak with Chancellor Cynthia Larive about the project’s role in supporting broader student success and strengthening community engagement at UCSC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
          <div className="text-center transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/graph1.png"
              alt="Example graph of student distribution by division"
              width={600}
              height={600}
              className="rounded-xl shadow-md mx-auto"
            />
            <p className="text-sm text-gray-500 mt-2">
              Example data shown during the presentation to Dean Wolf: Student distribution by academic division (2024–25). Data anonymized for demonstration.
            </p>
          </div>

          <div className="text-center transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/graph2.png"
              alt="Example graph of top majors in general membership"
              width={600}
              height={600}
              className="rounded-xl shadow-md mx-auto"
            />
            <p className="text-sm text-gray-500 mt-2">
              Example: Top majors represented in general membership. Demonstrates Canvas’ ability to highlight engagement by discipline.
            </p>
          </div>

          <div className="text-center transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/graph3.png"
              alt="Example graph of race and ethnicity data"
              width={600}
              height={600}
              className="rounded-xl shadow-md mx-auto"
            />
            <p className="text-sm text-gray-500 mt-2">
              Example: Race and ethnicity breakdown for 2024–25 general members. Demo data used for visualization and impact storytelling.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto mb-12">
          <Image
            src="/images/ChancellorZoomPhoto.png"
            alt="Aidan Gu speaking with Chancellor Cynthia Larive"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
          <p className="text-center text-sm text-gray-500 mt-4 px-4">
            A Zoom conversation between Aidan Gu and Chancellor Cynthia Larive about Slugworks’ impact, community growth, and potential for future institutional support.
          </p>
        </div>
      </div>
    </section>
  )
}

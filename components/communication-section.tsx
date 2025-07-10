import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Calendar, Megaphone, ImageIcon } from "lucide-react"

export function CommunicationSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6">Communication & Engagement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Canvas serves as our communication hub, cultivating community beyond the physical space and linking novice
            and expert makers in a continuous feedback loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Megaphone className="text-ucsc-blue" size={36} />
              </div>
              <CardTitle className="text-lg text-ucsc-navy">Announcements</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 leading-relaxed">
                Targeted messaging system for updates, opportunities, and important information
              </p>
            </CardContent>
          </Card>

          <Card className="text-center rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-green-600" size={36} />
              </div>
              <CardTitle className="text-lg text-ucsc-navy">Events</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 leading-relaxed">
                Integrated calendar system for workshops, open houses, and community events
              </p>
            </CardContent>
          </Card>

          <Card className="text-center rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-purple-600" size={36} />
              </div>
              <CardTitle className="text-lg text-ucsc-navy">Discussions</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 leading-relaxed">
                Forum-style discussions for project collaboration and peer support
              </p>
            </CardContent>
          </Card>

          <Card className="text-center rounded-3xl border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="text-ucsc-gold" size={36} />
              </div>
              <CardTitle className="text-lg text-ucsc-navy">Showcases</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 leading-relaxed">
                Platform for highlighting student projects and celebrating achievements
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-ucsc-navy to-ucsc-blue rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Reducing Scattered Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <h4 className="font-bold text-xl text-red-300 mb-4">Before: Fragmented Communication</h4>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>• Multiple email lists and threads</li>
                <li>• Scattered spreadsheets for tracking</li>
                <li>• Inconsistent messaging across platforms</li>
                <li>• Difficulty finding information</li>
                <li>• Limited engagement tracking</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <h4 className="font-bold text-xl text-ucsc-gold mb-4">After: Centralized Canvas Hub</h4>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>• Single source of truth for all communications</li>
                <li>• Integrated tracking and analytics</li>
                <li>• Consistent, professional messaging</li>
                <li>• Easy access to historical information</li>
                <li>• Rich engagement metrics and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

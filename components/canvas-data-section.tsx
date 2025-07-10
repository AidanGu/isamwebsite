import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, Clock, TrendingUp } from "lucide-react"

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
            <CardContent className="p-8">
              <Users className="mx-auto mb-4 text-ucsc-gold" size={48} />
              <h3 className="text-xl font-bold mb-2">Demographics</h3>
              <p className="text-sm opacity-90">Track engagement across departments and backgrounds</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white text-center">
            <CardContent className="p-8">
              <BarChart3 className="mx-auto mb-4 text-ucsc-gold" size={48} />
              <h3 className="text-xl font-bold mb-2">Tool Usage</h3>
              <p className="text-sm opacity-90">Monitor equipment popularity and patterns</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white text-center">
            <CardContent className="p-8">
              <Clock className="mx-auto mb-4 text-ucsc-gold" size={48} />
              <h3 className="text-xl font-bold mb-2">Completion Time</h3>
              <p className="text-sm opacity-90">Analyze training progression speed</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center">
            <CardContent className="p-8">
              <TrendingUp className="mx-auto mb-4 text-ucsc-gold" size={48} />
              <h3 className="text-xl font-bold mb-2">Growth Trends</h3>
              <p className="text-sm opacity-90">Track makerspace expansion over time</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

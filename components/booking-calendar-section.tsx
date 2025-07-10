import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function BookingCalendarSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6 font-space-grotesk">
            Canvas Calendar & Booking
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Students complete safety modules in Canvas, then seamlessly schedule in-person checkoffs through integrated
            Appointlet booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-4 text-2xl">
                <div className="relative w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/images/be98-booking-icon.png"
                    alt="Booking System"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span>Integrated Scheduling</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="mb-6 leading-relaxed opacity-90 text-lg">
                After completing required safety modules, students can immediately book their in-person checkoffs
                through Canvas-integrated Appointlet scheduling.
              </p>
              <div className="bg-white/20 p-4 rounded-2xl">
                <h4 className="font-semibold text-ucsc-gold mb-2">Streamlined Process:</h4>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• Complete safety training modules</li>
                  <li>• Schedule checkoff appointments</li>
                  <li>• Receive automated confirmations</li>
                  <li>• Access granted upon completion</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-4 text-2xl">
                <div className="relative w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/images/calendar-icon.png"
                    alt="Calendar Integration"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span>Calendar Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="mb-6 leading-relaxed opacity-90 text-lg">
                Canvas Calendar syncs with Appointlet to provide a unified scheduling experience, reducing
                administrative overhead.
              </p>
              <div className="bg-white/20 p-4 rounded-2xl">
                <h4 className="font-semibold text-ucsc-gold mb-2">Benefits:</h4>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• Unified calendar view</li>
                  <li>• Automated reminders</li>
                  <li>• Conflict prevention</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

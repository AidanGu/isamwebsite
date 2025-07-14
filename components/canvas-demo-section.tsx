export function CanvasDemoSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "250px 250px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6 font-space-grotesk">See It in Action</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Watch how Slugworks uses Canvas to streamline training, scheduling, and certification across our
            makerspaces.
          </p>
        </div>

        {/* Full-Width Video Embed Container */}
        {/* Enhanced Video Embed for Mobile */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl px-4 py-8 sm:p-12 shadow-xl">
          <div className="aspect-video bg-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden max-w-full sm:max-w-5xl mx-auto scale-[1.05] sm:scale-100 transition-transform duration-300">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/OZQnSENnST0"
              title="Slugworks Canvas Walkthrough Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-600 italic leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base">
              Slugworks Learning by Design Community Curator Aidan Gu walks through the student onboarding experience via Canvas—highlighting how students explore maker modules, unlock safety certifications, and stay connected through automated newsletters.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

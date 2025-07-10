export function SeeItInActionSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/subtle-background.png')`,
          backgroundSize: "250px 250px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Light Overlay for Content Readability */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ucsc-navy mb-6 font-space-grotesk">See It in Action</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Watch how Slugworks uses Canvas to streamline training, scheduling, and certification across our
            makerspaces.
          </p>
        </div>

        {/* Full-Width Video Embed Space */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 shadow-xl">
          <div className="aspect-video bg-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for video embed */}
            <div className="text-center">
              <div className="w-20 h-20 bg-ucsc-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-ucsc-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Video embed space ready</p>
              <p className="text-sm text-gray-500 mt-2">YouTube or Google Drive link can be added here</p>
            </div>

            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url('/images/new-tassel-pattern.png')`,
                backgroundSize: "100px 100px",
                backgroundRepeat: "repeat",
              }}
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic leading-relaxed max-w-3xl mx-auto">
              "Watch how Slugworks uses Canvas to streamline training, scheduling, and certification across our
              makerspaces."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

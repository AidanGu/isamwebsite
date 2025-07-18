import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-ucsc-navy text-white py-12 px-4 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/images/subtle-background.png')`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-ucsc-navy/60" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Logo Section */}
        <div className="flex items-center justify-center mb-8">
          <a
            href="https://slugworks.engineering.ucsc.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-80 h-16 block"
          >
            <Image
              src="/images/slugworks-combination-mark.png"
              alt="Baskin Engineering & Slugworks"
              fill
              className="object-contain"
            />
          </a>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-300 mb-4 text-lg">
            Fostering innovation through comprehensive collaboration and communication tools integrated with Canvas.
          </p>
          <a
            href="https://isam2025.hemi-makers.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ucsc-gold font-bold text-xl hover:underline"
          >
            Presented at ISAM 2025
          </a>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 UC Santa Cruz Slugworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

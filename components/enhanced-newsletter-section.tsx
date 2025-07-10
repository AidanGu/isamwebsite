"use client"

import Image from "next/image"

export function EnhancedNewsletterSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `url('/images/subtle-background.png')`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/25" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ucsc-navy mb-6 font-space-grotesk">
            Automated Newsletter Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Joining our Canvas course automatically enrolls students into a custom Google Group newsletter powered by
            Apps Script. No extra steps needed.
          </p>
        </div>

        {/* Newsletter Workflow Visual */}
        <div className="bg-white p-12 rounded-3xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-ucsc-navy text-center mb-8">Automated Workflow</h3>

          {/* Horizontal Workflow */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            {/* Speaker Icon */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter Speaker"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Canvas Enrollment</p>
            </div>

            {/* Arrow */}
            <div className="text-ucsc-gold">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>

            {/* Newsletter Screenshot */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Newsletter Email</p>
            </div>

            {/* Arrow */}
            <div className="text-ucsc-gold">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>

            {/* Google Groups Icon */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Image
                  src="/images/google-groups-icon.png"
                  alt="Google Groups"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Google Groups</p>
            </div>
          </div>

          <p className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Joining our Canvas course automatically enrolls students into a custom Google Group newsletter powered by
            Apps Script. No extra steps needed.
          </p>
        </div>

        {/* Newsletter Demo Video Section */}
        <div className="bg-gradient-to-br from-ucsc-navy to-ucsc-blue p-10 rounded-3xl shadow-xl text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Newsletter Workflow Demo</h3>

          {/* Video Embed Space */}
          <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/90 font-medium">Newsletter Demo Video</p>
              <p className="text-sm text-white/70 mt-2">Shows automated Google Scripts workflow</p>
            </div>
          </div>

          <p className="text-center text-white/90 italic leading-relaxed">
            This video walks through the automated workflow via Google Scripts, showing how newsletter enrollment
            happens seamlessly when students join our Canvas course.
          </p>
        </div>
      </div>
    </section>
  )
}

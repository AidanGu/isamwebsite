"use client"

import Image from "next/image"

export function NewsletterWorkflowSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      />

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

        {/* Newsletter Visual Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Step 1: Canvas Enrollment */}
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-3 mx-auto">
              <Image
                src="/images/newsletter-icon.png"
                alt="Canvas Enrollment"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-700">Canvas Enrollment</p>
          </div>

          {/* Arrow */}
          <div className="text-ucsc-gold text-xl hidden md:block">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="text-ucsc-gold text-2xl md:hidden">↓</div>

          {/* Step 2: Google Groups */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-3 mx-auto">
              <Image
                src="/images/google-groups-icon.png"
                alt="Google Groups"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-700">Google Groups (via Script)</p>
          </div>

          {/* Arrow */}
          <div className="text-ucsc-gold text-xl hidden md:block">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="text-ucsc-gold text-2xl md:hidden">↓</div>

          {/* Step 3: Newsletter Email */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 mx-auto">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Newsletter Email</p>
          </div>
        </div>
      </div>
    </section>
  )
} 

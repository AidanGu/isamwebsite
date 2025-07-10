"use client"

import Image from "next/image"

export function NewsletterSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Image
              src="/images/newsletter-icon.png"
              alt="Newsletter Integration"
              width={48}
              height={48}
              className="object-contain"
            />
            <h2 className="text-3xl font-bold text-ucsc-navy">Newsletter Integration</h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Joining our Canvas course also signs you up for our student newsletter using Google Script automation. It's
            how we keep makers in the loop with announcements, events, and community highlights.
          </p>
        </div>
      </div>
    </section>
  )
}

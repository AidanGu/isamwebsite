export function CanvasSOPIconsSection() {
  const sopIcons = [
    { name: "Safety Glasses", image: "/images/safety_glasses.svg" },
    { name: "Closed-Toe Shoes", image: "/images/closed_toe_shoes.svg" },
    { name: "Protective Clothing", image: "/images/protective_clothing.svg" },
    { name: "Tie Back Hair", image: "/images/tie_back_hair.svg" },
    { name: "Avoid Entanglement", image: "/images/entangle.svg" },
    { name: "Avoid Debris", image: "/images/debris.svg" },
    { name: "Contact Staff", image: "/images/contact.svg" },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ucsc-navy mb-6 font-space-grotesk">Safety & SOPs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Review these core safety protocols before using any Slugworks equipment. These visuals and SOP modules ensure a safe, welcoming, and well-supported experience.
          </p>
        </div>

        {/* SOP Icons Grid */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {sopIcons.map((sop, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-3 mx-auto hover:scale-105 transition-transform duration-300 bg-gray-100">
                  <img src={sop.image} alt={sop.name} className="w-12 h-12 object-contain" />
                </div>
                <p className="text-sm font-medium text-gray-700 max-w-[7rem] mx-auto leading-tight">{sop.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

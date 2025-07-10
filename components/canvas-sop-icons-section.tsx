export function CanvasSOPIconsSection() {
  const sopIcons = [
    { name: "Laser Cutting SOP", color: "bg-red-500", bgColor: "bg-red-100" },
    { name: "3D Printing SOP", color: "bg-blue-500", bgColor: "bg-blue-100" },
    { name: "Shop Safety", color: "bg-green-500", bgColor: "bg-green-100" },
    { name: "Club Hub Tools", color: "bg-purple-500", bgColor: "bg-purple-100" },
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
            Each piece of equipment has dedicated Canvas modules with comprehensive safety protocols and operating
            procedures.
          </p>
        </div>

        {/* Horizontal SOP Icons Row */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="flex justify-center items-center space-x-8">
            {sopIcons.map((sop, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 ${sop.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`w-10 h-10 ${sop.color} rounded-lg`}></div>
                </div>
                <p className="text-sm font-medium text-gray-700">{sop.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

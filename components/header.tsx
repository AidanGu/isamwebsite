export function Header() {
  return (
    <header className="bg-gradient-to-r from-ucsc-navy to-ucsc-blue text-white py-8 px-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Slugworks Logo */}
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-ucsc-gold">S</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Slugworks</h1>
            <p className="text-lg opacity-90 font-medium">A creatorspace for Slugs</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-ucsc-gold">ISAM 2025</p>
          <p className="text-sm opacity-90">UC Santa Cruz</p>
        </div>
      </div>
    </header>
  )
}

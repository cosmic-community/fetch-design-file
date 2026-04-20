export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-parchment-100/90 backdrop-blur-md border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Changed: treasure map branding */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shadow-md">
            <span className="text-xl">🗺️</span>
          </div>
          <span className="font-display font-bold text-xl text-treasure-dark">X Marks</span>
        </div>
        {/* Changed: navigation links themed for treasure service */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-amber-800/70 hover:text-amber-900 transition-colors font-medium">Features</a>
          <a href="#testimonials" className="text-amber-800/70 hover:text-amber-900 transition-colors font-medium">Adventurers</a>
          <a href="#pricing" className="text-amber-800/70 hover:text-amber-900 transition-colors font-medium">Pricing</a>
        </nav>
        <a
          href="#cta"
          className="gradient-bg text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md shadow-amber-600/20"
        >
          Start Mapping
        </a>
      </div>
    </header>
  )
}
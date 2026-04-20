export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Landing</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#cta" className="text-gray-600 hover:text-gray-900 transition-colors">Get Started</a>
        </nav>
        <a
          href="#cta"
          className="gradient-bg text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Sign Up
        </a>
      </div>
    </header>
  )
}
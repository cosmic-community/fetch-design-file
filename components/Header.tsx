'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Changed: cleaner logo/branding */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg text-amber-950">X Marks the Spot</span>
          </a>

          {/* Changed: desktop nav with refined styling */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#features" className="px-4 py-2 text-sm text-amber-800/70 hover:text-amber-950 hover:bg-amber-50 rounded-lg transition-all font-medium">Features</a>
            <a href="#testimonials" className="px-4 py-2 text-sm text-amber-800/70 hover:text-amber-950 hover:bg-amber-50 rounded-lg transition-all font-medium">Stories</a>
            <a href="#pricing" className="px-4 py-2 text-sm text-amber-800/70 hover:text-amber-950 hover:bg-amber-50 rounded-lg transition-all font-medium">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex gradient-bg text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-sm shadow-amber-600/20">
              Start Mapping
            </a>
            {/* Changed: mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Changed: mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-amber-100/60 mt-1">
            <nav className="flex flex-col gap-1 pt-3">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-sm text-amber-800 hover:bg-amber-50 rounded-lg transition-colors font-medium">Features</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-sm text-amber-800 hover:bg-amber-50 rounded-lg transition-colors font-medium">Stories</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-sm text-amber-800 hover:bg-amber-50 rounded-lg transition-colors font-medium">Pricing</a>
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="mx-4 mt-2 gradient-bg text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center">Start Mapping</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
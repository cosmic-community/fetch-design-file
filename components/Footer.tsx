import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  landingPage: LandingPage | null
}

export default function Footer({ landingPage }: FooterProps) {
  const tagline = getMetafieldValue(landingPage?.metadata?.footer_tagline) || 'Every adventure starts with a map.'

  return (
    // Changed: dark treasure-themed footer
    <footer className="bg-amber-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Changed: treasure map branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shadow-md">
              <span className="text-xl">🗺️</span>
            </div>
            <div>
              <div className="font-display font-bold text-lg">X Marks the Spot</div>
              <div className="text-sm text-amber-400/70">{tagline}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-amber-400/70">
            <a href="#" className="hover:text-amber-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-900/50 text-center text-sm text-amber-400/50">
          © {new Date().getFullYear()} X Marks the Spot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
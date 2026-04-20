import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  landingPage: LandingPage | null
}

export default function Footer({ landingPage }: FooterProps) {
  const tagline = getMetafieldValue(landingPage?.metadata?.footer_tagline) || 'Building the future of web experiences'

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <div className="font-bold text-lg">Landing</div>
              <div className="text-sm text-gray-400">{tagline}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Landing. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
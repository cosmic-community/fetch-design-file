import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CTASectionProps {
  landingPage: LandingPage | null
}

export default function CTASection({ landingPage }: CTASectionProps) {
  const primaryCtaText = getMetafieldValue(landingPage?.metadata?.primary_cta_text) || 'Start Your Map'
  const primaryCtaUrl = getMetafieldValue(landingPage?.metadata?.primary_cta_url) || '#'

  return (
    // Changed: treasure-themed CTA section with warm gradients
    <section id="cta" className="py-20 lg:py-28 bg-parchment-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative gradient-bg rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
          {/* Changed: warm decorative blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl" />
          
          {/* Changed: dotted trail decoration */}
          <div className="absolute top-8 left-8 w-16 h-16 border-2 border-dashed border-white/20 rounded-full" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-dashed border-white/20 rounded-full" />

          <div className="relative">
            <div className="text-5xl mb-4">🏴‍☠️</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to chart your course?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of adventurers already building amazing treasure hunts. Your next great adventure starts here.
            </p>
            <a
              href={primaryCtaUrl}
              className="inline-flex items-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>🗺️</span> {primaryCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
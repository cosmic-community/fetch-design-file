import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CTASectionProps {
  landingPage: LandingPage | null
}

export default function CTASection({ landingPage }: CTASectionProps) {
  const primaryCtaText = getMetafieldValue(landingPage?.metadata?.primary_cta_text) || 'Start Your Map'
  const primaryCtaUrl = getMetafieldValue(landingPage?.metadata?.primary_cta_url) || '#'

  return (
    <section id="cta" className="py-24 lg:py-32 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative gradient-bg rounded-3xl p-12 lg:p-20 text-center overflow-hidden">
          {/* Changed: subtle decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />
          
          {/* Changed: dotted decorative circles */}
          <div className="absolute top-6 left-6 w-20 h-20 border border-dashed border-white/15 rounded-full" />
          <div className="absolute bottom-6 right-6 w-32 h-32 border border-dashed border-white/10 rounded-full" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to chart<br className="hidden sm:block" /> your course?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              Join thousands of adventurers building amazing treasure hunts. Your next great adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={primaryCtaUrl}
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-amber-50 transition-all hover:scale-[1.02] shadow-lg"
              >
                {primaryCtaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
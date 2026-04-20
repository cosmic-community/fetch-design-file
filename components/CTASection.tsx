import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CTASectionProps {
  landingPage: LandingPage | null
}

export default function CTASection({ landingPage }: CTASectionProps) {
  const primaryCtaText = getMetafieldValue(landingPage?.metadata?.primary_cta_text) || 'Get Started Today'
  const primaryCtaUrl = getMetafieldValue(landingPage?.metadata?.primary_cta_url) || '#'

  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative gradient-bg rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our platform to build amazing products.
            </p>
            <a
              href={primaryCtaUrl}
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              {primaryCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
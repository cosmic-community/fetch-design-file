import { LandingPage, Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import FeatureCard from '@/components/FeatureCard'

interface FeaturesSectionProps {
  landingPage: LandingPage | null
  features: Feature[]
}

export default function FeaturesSection({ landingPage, features }: FeaturesSectionProps) {
  const title = getMetafieldValue(landingPage?.metadata?.features_section_title) || 'Powerful Features'
  const subtitle = getMetafieldValue(landingPage?.metadata?.features_section_subtitle) || 'Everything you need to succeed'

  if (!features || features.length === 0) {
    return null
  }

  return (
    // Changed: parchment-themed features section
    <section id="features" className="py-20 lg:py-28 bg-gradient-to-b from-white to-parchment-50 relative">
      {/* Changed: subtle map grid overlay */}
      <div className="absolute inset-0 map-grid opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Changed: treasure-themed section header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full text-sm text-amber-800 font-medium mb-4">
            <span>⚙️</span> Features
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            {title}
          </h2>
          <p className="text-xl text-amber-800/60">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
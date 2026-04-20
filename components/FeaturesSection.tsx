import { LandingPage, Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import FeatureCard from '@/components/FeatureCard'

interface FeaturesSectionProps {
  landingPage: LandingPage | null
  features: Feature[]
}

// Changed: icon map for feature rendering
const featureIcons: Record<string, string> = {
  '🗺️': 'map',
  '📍': 'pin',
  '🤝': 'share',
}

function FeatureIcon({ icon }: { icon: string }) {
  const type = featureIcons[icon] || 'default'

  if (type === 'map') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    )
  }
  if (type === 'pin') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
  if (type === 'share') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    )
  }
  return <span className="text-xl text-white">{icon}</span>
}

export default function FeaturesSection({ landingPage, features }: FeaturesSectionProps) {
  const title = getMetafieldValue(landingPage?.metadata?.features_section_title) || 'Your treasure-hunting toolkit'
  const subtitle = getMetafieldValue(landingPage?.metadata?.features_section_subtitle) || 'Everything you need to craft the perfect treasure hunt.'

  if (!features || features.length === 0) {
    return null
  }

  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 map-grid opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-xs text-amber-700 font-semibold uppercase tracking-wider mb-4">
            Features
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-amber-950 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-amber-800/50 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} FeatureIcon={FeatureIcon} />
          ))}
        </div>
      </div>
    </section>
  )
}
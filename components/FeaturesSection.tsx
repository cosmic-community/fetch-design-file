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
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
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
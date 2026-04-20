import { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const title = getMetafieldValue(feature.metadata?.feature_title) || feature.title
  const description = getMetafieldValue(feature.metadata?.feature_description) || ''
  const icon = getMetafieldValue(feature.metadata?.icon) || '✨'
  const image = feature.metadata?.feature_image

  return (
    // Changed: treasure card styling with warm borders
    <div className="group bg-white rounded-2xl p-8 border border-amber-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300">
      {image ? (
        <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-parchment-100">
          <img
            src={`${image.imgix_url}?w=800&h=480&fit=crop&auto=format,compress&sepia=20`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        // Changed: amber gradient icon background
        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform shadow-md shadow-amber-600/20">
          {icon}
        </div>
      )}
      
      <h3 className="font-display text-xl font-bold text-amber-950 mb-3">
        {title}
      </h3>
      
      <p className="text-amber-800/60 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
import { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { ComponentType } from 'react'

interface FeatureCardProps {
  feature: Feature
  FeatureIcon?: ComponentType<{ icon: string }>
}

export default function FeatureCard({ feature, FeatureIcon }: FeatureCardProps) {
  const title = getMetafieldValue(feature.metadata?.feature_title) || feature.title
  const description = getMetafieldValue(feature.metadata?.feature_description) || ''
  const icon = getMetafieldValue(feature.metadata?.icon) || '✨'
  const image = feature.metadata?.feature_image

  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-amber-100/80 hover:border-amber-200 hover:shadow-card-hover transition-all duration-300">
      {image ? (
        <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-amber-50">
          <img
            src={`${image.imgix_url}?w=800&h=480&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-treasure">
          {FeatureIcon ? <FeatureIcon icon={icon} /> : <span className="text-xl">{icon}</span>}
        </div>
      )}
      
      <h3 className="font-display text-xl font-bold text-amber-950 mb-3 leading-snug">
        {title}
      </h3>
      
      <p className="text-amber-800/50 leading-relaxed text-[15px]">
        {description}
      </p>
    </div>
  )
}
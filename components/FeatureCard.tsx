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
    <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
      {image ? (
        <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=480&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
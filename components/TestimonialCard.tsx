import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const name = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.role) || ''
  const company = getMetafieldValue(testimonial.metadata?.company) || ''
  const quote = getMetafieldValue(testimonial.metadata?.quote) || ''
  const avatar = testimonial.metadata?.avatar

  return (
    <div className="bg-white rounded-2xl p-8 border border-amber-100/80 hover:shadow-card-hover transition-all duration-300">
      {/* Changed: 5-star rating with refined styling */}
      <div className="flex gap-0.5 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-amber-900/80 text-[15px] leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-5 border-t border-amber-50">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-100"
          />
        ) : (
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-sm text-amber-950">{name}</div>
          <div className="text-xs text-amber-700/50">
            {role}{role && company && ', '}{company}
          </div>
        </div>
      </div>
    </div>
  )
}
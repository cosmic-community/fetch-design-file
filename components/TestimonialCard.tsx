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
    // Changed: warm parchment card styling
    <div className="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300">
      {/* Changed: gold star ratings */}
      <div className="flex text-amber-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-amber-900/80 text-lg leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-amber-100">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-200"
          />
        ) : (
          // Changed: amber gradient avatar fallback
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-amber-950">{name}</div>
          <div className="text-sm text-amber-700/60">
            {role}{role && company && ' at '}{company}
          </div>
        </div>
      </div>
    </div>
  )
}
import { LandingPage, Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  landingPage: LandingPage | null
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ landingPage, testimonials }: TestimonialsSectionProps) {
  const title = getMetafieldValue(landingPage?.metadata?.testimonials_section_title) || 'What Our Adventurers Say'
  const subtitle = getMetafieldValue(landingPage?.metadata?.testimonials_section_subtitle) || 'Trusted by treasure hunters worldwide'

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    // Changed: warm parchment-themed testimonials section
    <section id="testimonials" className="py-20 lg:py-28 bg-parchment-100 relative">
      <div className="absolute inset-0 map-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Changed: adventure-themed section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-200/50 border border-amber-300/50 rounded-full text-sm text-amber-800 font-medium mb-4">
            <span>⭐</span> Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            {title}
          </h2>
          <p className="text-xl text-amber-800/60">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
import { LandingPage, Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  landingPage: LandingPage | null
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ landingPage, testimonials }: TestimonialsSectionProps) {
  const title = getMetafieldValue(landingPage?.metadata?.testimonials_section_title) || 'Loved by adventurers everywhere'
  const subtitle = getMetafieldValue(landingPage?.metadata?.testimonials_section_subtitle) || 'Join thousands of treasure hunters who\'ve created unforgettable experiences.'

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-b from-amber-50/50 to-parchment-50/30 relative">
      <div className="absolute inset-0 map-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-xs text-amber-700 font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-amber-950 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-amber-800/50 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
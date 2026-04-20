import { LandingPage, Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  landingPage: LandingPage | null
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ landingPage, testimonials }: TestimonialsSectionProps) {
  const title = getMetafieldValue(landingPage?.metadata?.testimonials_section_title) || 'What Our Customers Say'
  const subtitle = getMetafieldValue(landingPage?.metadata?.testimonials_section_subtitle) || 'Trusted by thousands of businesses worldwide'

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
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
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
import { getLandingPage, getFeatures, getTestimonials } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [landingPage, features, testimonials] = await Promise.all([
    getLandingPage(),
    getFeatures(),
    getTestimonials(),
  ])

  return (
    // Changed: added PricingSection between testimonials and CTA
    <main className="min-h-screen">
      <Header />
      <Hero landingPage={landingPage} />
      <FeaturesSection landingPage={landingPage} features={features} />
      <TestimonialsSection landingPage={landingPage} testimonials={testimonials} />
      <PricingSection />
      <CTASection landingPage={landingPage} />
      <Footer landingPage={landingPage} />
    </main>
  )
}
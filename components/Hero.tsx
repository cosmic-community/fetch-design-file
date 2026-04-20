import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  landingPage: LandingPage | null
}

export default function Hero({ landingPage }: HeroProps) {
  const headline = getMetafieldValue(landingPage?.metadata?.hero_headline) || 'Build Something Amazing'
  const subheadline = getMetafieldValue(landingPage?.metadata?.hero_subheadline) || 'Create stunning landing pages that convert visitors into customers.'
  const primaryCtaText = getMetafieldValue(landingPage?.metadata?.primary_cta_text) || 'Get Started'
  const primaryCtaUrl = getMetafieldValue(landingPage?.metadata?.primary_cta_url) || '#cta'
  const secondaryCtaText = getMetafieldValue(landingPage?.metadata?.secondary_cta_text) || 'Learn More'
  const secondaryCtaUrl = getMetafieldValue(landingPage?.metadata?.secondary_cta_url) || '#features'
  const bgImage = landingPage?.metadata?.hero_background_image

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${bgImage.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      )}
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700 font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          New: AI-powered features
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-slide-up">
          {headline.split(' ').map((word, i, arr) => (
            i === arr.length - 1 ? (
              <span key={i} className="gradient-text">{word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          ))}
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-slide-up">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a
            href={primaryCtaUrl}
            className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            {primaryCtaText}
          </a>
          <a
            href={secondaryCtaUrl}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all"
          >
            {secondaryCtaText}
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            14-day free trial
          </div>
        </div>
      </div>
    </section>
  )
}
import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  landingPage: LandingPage | null
}

export default function Hero({ landingPage }: HeroProps) {
  const headline = getMetafieldValue(landingPage?.metadata?.hero_headline) || 'Build Your Own Treasure Map'
  const subheadline = getMetafieldValue(landingPage?.metadata?.hero_subheadline) || 'Create custom treasure hunt maps for parties, team events, and adventures.'
  const primaryCtaText = getMetafieldValue(landingPage?.metadata?.primary_cta_text) || 'Start Your Map'
  const primaryCtaUrl = getMetafieldValue(landingPage?.metadata?.primary_cta_url) || '#cta'
  const secondaryCtaText = getMetafieldValue(landingPage?.metadata?.secondary_cta_text) || 'See How It Works'
  const secondaryCtaUrl = getMetafieldValue(landingPage?.metadata?.secondary_cta_url) || '#features'
  const bgImage = landingPage?.metadata?.hero_background_image

  return (
    // Changed: treasure/parchment themed hero section
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-parchment-100 via-parchment-50 to-white">
      {/* Changed: background map image with sepia overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${bgImage.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress&sepia=40`}
            alt=""
            className="w-full h-full object-cover opacity-[0.07]"
          />
        </div>
      )}

      {/* Changed: map grid overlay */}
      <div className="absolute inset-0 map-grid z-0" />

      {/* Changed: warm decorative blobs instead of blue/purple */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      {/* Changed: decorative compass rose */}
      <div className="absolute top-28 right-[10%] hidden lg:block opacity-10 animate-spin-slow">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="55" stroke="#92400e" strokeWidth="1"/>
          <circle cx="60" cy="60" r="45" stroke="#92400e" strokeWidth="0.5"/>
          <path d="M60 5L65 55L60 60L55 55Z" fill="#b45309" opacity="0.5"/>
          <path d="M60 115L55 65L60 60L65 65Z" fill="#92400e" opacity="0.3"/>
          <path d="M5 60L55 55L60 60L55 65Z" fill="#92400e" opacity="0.3"/>
          <path d="M115 60L65 65L60 60L65 55Z" fill="#92400e" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Changed: pirate/adventure badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-sm text-amber-800 font-medium mb-8 animate-fade-in">
          <span className="text-base">🏴‍☠️</span>
          New: AI-powered route generation
        </div>

        {/* Changed: serif display font for headline */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-950 leading-tight mb-6 animate-slide-up">
          {headline.split('.').length > 1 ? (
            <>
              {headline.split('.').map((segment, i, arr) => {
                const trimmed = segment.trim()
                if (!trimmed) return null
                if (i === arr.length - 2 || (arr.length === 1 && i === 0)) {
                  return <span key={i} className="gradient-text">{trimmed}{i < arr.length - 2 ? '. ' : ''}</span>
                }
                return <span key={i}>{trimmed}. </span>
              })}
            </>
          ) : (
            headline.split(' ').map((word, i, arr) => (
              i >= arr.length - 2 ? (
                <span key={i} className="gradient-text">{word}{i < arr.length - 1 ? ' ' : ''}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            ))
          )}
        </h1>

        <p className="text-xl md:text-2xl text-amber-800/70 max-w-3xl mx-auto mb-10 animate-slide-up font-body">
          {subheadline}
        </p>

        {/* Changed: treasure-themed CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a
            href={primaryCtaUrl}
            className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-amber-600/25 inline-flex items-center justify-center gap-2"
          >
            <span>🗺️</span> {primaryCtaText}
          </a>
          <a
            href={secondaryCtaUrl}
            className="bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-amber-200 hover:border-amber-300 hover:bg-amber-50 transition-all inline-flex items-center justify-center gap-2"
          >
            <span>🧭</span> {secondaryCtaText}
          </a>
        </div>

        {/* Changed: adventure-themed trust signals */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-amber-700/60">
          <div className="flex items-center gap-2">
            <span className="text-lg">✨</span>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            10,000+ maps created
          </div>
        </div>
      </div>
    </section>
  )
}
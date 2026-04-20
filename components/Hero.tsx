import { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  landingPage: LandingPage | null
}

export default function Hero({ landingPage }: HeroProps) {
  const headline = getMetafieldValue(landingPage?.metadata?.hero_headline) || 'X Marks the Spot'
  const subheadline = getMetafieldValue(landingPage?.metadata?.hero_subheadline) || 'Build custom treasure hunt maps for parties, team building, geocaching, and unforgettable adventures.'
  const primaryCtaText = getMetafieldValue(landingPage?.metadata?.primary_cta_text) || 'Start Your Map'
  const primaryCtaUrl = getMetafieldValue(landingPage?.metadata?.primary_cta_url) || '#cta'
  const secondaryCtaText = getMetafieldValue(landingPage?.metadata?.secondary_cta_text) || 'See How It Works'
  const secondaryCtaUrl = getMetafieldValue(landingPage?.metadata?.secondary_cta_url) || '#features'
  const bgImage = landingPage?.metadata?.hero_background_image

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Changed: layered background with subtle warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-parchment-50/40 to-white" />
      <div className="absolute inset-0 map-grid" />

      {/* Changed: background image if present */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${bgImage.imgix_url}?w=2400&h=1400&fit=crop&auto=format,compress&sat=-30`}
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
        </div>
      )}

      {/* Changed: decorative compass in background */}
      <div className="absolute top-20 right-[5%] hidden xl:block opacity-[0.06] animate-spin-slow">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#92400e" strokeWidth="1"/>
          <circle cx="100" cy="100" r="70" stroke="#92400e" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" stroke="#92400e" strokeWidth="0.5"/>
          <path d="M100 10L108 90L100 100L92 90Z" fill="#b45309"/>
          <path d="M100 190L92 110L100 100L108 110Z" fill="#92400e"/>
          <path d="M10 100L90 92L100 100L90 108Z" fill="#92400e"/>
          <path d="M190 100L110 108L100 100L110 92Z" fill="#92400e"/>
          <line x1="100" y1="5" x2="100" y2="195" stroke="#92400e" strokeWidth="0.3"/>
          <line x1="5" y1="100" x2="195" y2="100" stroke="#92400e" strokeWidth="0.3"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Changed: subtle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100/80 border border-amber-200/60 rounded-full text-sm text-amber-800 font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Now with AI-powered route generation
          </div>

          {/* Changed: large headline with gradient accent */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-amber-950 leading-[1.1] tracking-tight mb-6 animate-slide-up">
            Build Your Own{' '}
            <span className="gradient-text">Treasure Map</span>
          </h1>

          <p className="text-lg md:text-xl text-amber-800/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up-delay-1">
            {subheadline}
          </p>

          {/* Changed: refined CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-slide-up-delay-2">
            <a
              href={primaryCtaUrl}
              className="gradient-bg text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-amber-600/20 inline-flex items-center justify-center gap-2"
            >
              {primaryCtaText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href={secondaryCtaUrl}
              className="bg-white text-amber-900 px-8 py-3.5 rounded-xl font-semibold text-base border border-amber-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all inline-flex items-center justify-center gap-2"
            >
              {secondaryCtaText}
            </a>
          </div>

          {/* Changed: trust signals row */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-amber-700/50 animate-slide-up-delay-3">
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              10,000+ maps created
            </div>
          </div>
        </div>

        {/* Changed: hero mockup / map preview card */}
        <div className="mt-16 max-w-5xl mx-auto animate-slide-up-delay-3">
          <div className="relative rounded-2xl border border-amber-200/60 bg-white shadow-treasure-lg overflow-hidden animate-float">
            {/* Changed: mock browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-amber-50/80 border-b border-amber-100/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-amber-200" />
                <div className="w-3 h-3 rounded-full bg-amber-200" />
                <div className="w-3 h-3 rounded-full bg-amber-200" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-amber-400 border border-amber-100 text-center max-w-xs mx-auto">
                  app.xmarksthespot.io/editor
                </div>
              </div>
            </div>
            {/* Changed: map editor mockup content */}
            <div className="p-6 bg-gradient-to-br from-amber-50/50 to-parchment-50/30 min-h-[280px] md:min-h-[360px] relative">
              {/* Map grid background */}
              <div className="absolute inset-0 map-grid opacity-60" />
              
              {/* Decorative map elements */}
              <div className="relative z-10 flex gap-4 h-full">
                {/* Left sidebar mock */}
                <div className="hidden md:flex flex-col gap-3 w-48 shrink-0">
                  <div className="bg-white rounded-xl p-3 border border-amber-100 shadow-card">
                    <div className="text-xs font-semibold text-amber-900 mb-2">📍 Clue Points</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-1.5 bg-amber-50 rounded-lg">
                        <div className="w-5 h-5 rounded-full bg-amber-400 text-white text-[10px] flex items-center justify-center font-bold">1</div>
                        <span className="text-xs text-amber-800">Town Square</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-amber-50 rounded-lg">
                        <div className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">2</div>
                        <span className="text-xs text-amber-800">Old Bridge</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-amber-50 rounded-lg">
                        <div className="w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] flex items-center justify-center font-bold">3</div>
                        <span className="text-xs text-amber-800">The Lighthouse</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border border-amber-200">
                        <div className="w-5 h-5 rounded-full gradient-bg text-white text-[10px] flex items-center justify-center font-bold">★</div>
                        <span className="text-xs text-amber-900 font-semibold">Treasure!</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-amber-100 shadow-card">
                    <div className="text-xs font-semibold text-amber-900 mb-1.5">🎨 Map Theme</div>
                    <div className="flex gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-amber-100 border-2 border-amber-400" />
                      <div className="w-6 h-6 rounded-md bg-emerald-100 border border-amber-100" />
                      <div className="w-6 h-6 rounded-md bg-sky-100 border border-amber-100" />
                      <div className="w-6 h-6 rounded-md bg-stone-200 border border-amber-100" />
                    </div>
                  </div>
                </div>

                {/* Main map area mock */}
                <div className="flex-1 bg-gradient-to-br from-amber-50 via-parchment-100 to-yellow-50 rounded-xl border border-amber-200/60 relative overflow-hidden shadow-inner">
                  {/* Dotted path */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" fill="none" preserveAspectRatio="none">
                    <path d="M60 230 Q120 180 160 160 Q200 140 240 100 Q280 60 340 50" stroke="#d97706" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
                  </svg>
                  {/* Map pins */}
                  <div className="absolute top-[78%] left-[12%]">
                    <div className="w-7 h-7 rounded-full bg-amber-400 border-2 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold">1</div>
                  </div>
                  <div className="absolute top-[52%] left-[35%]">
                    <div className="w-7 h-7 rounded-full bg-amber-500 border-2 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold">2</div>
                  </div>
                  <div className="absolute top-[30%] left-[55%]">
                    <div className="w-7 h-7 rounded-full bg-amber-600 border-2 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold">3</div>
                  </div>
                  <div className="absolute top-[14%] left-[80%]">
                    <div className="w-9 h-9 rounded-full gradient-bg border-2 border-yellow-300 shadow-lg flex items-center justify-center animate-glow-pulse">
                      <span className="text-sm">⭐</span>
                    </div>
                  </div>
                  {/* Map terrain hints */}
                  <div className="absolute bottom-4 left-4 text-[10px] text-amber-600/40 font-medium tracking-wider uppercase">Interactive Map Editor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
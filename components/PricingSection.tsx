interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Explorer',
    price: 'Free',
    period: '',
    description: 'Perfect for your first adventure',
    features: [
      'Up to 3 treasure maps',
      '5 clues per map',
      'Basic map templates',
      'Share via link',
      'Community support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Captain',
    price: '$12',
    period: '/mo',
    description: 'For serious treasure hunters',
    features: [
      'Unlimited treasure maps',
      'Unlimited clues',
      'Custom map themes',
      'QR code clues',
      'GPS integration',
      'Team collaboration',
      'Priority support',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Admiral',
    price: '$39',
    period: '/mo',
    description: 'For organizations & events',
    features: [
      'Everything in Captain',
      'White-label maps',
      'API access',
      'Analytics dashboard',
      'Bulk map creation',
      'Custom branding',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 map-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-xs text-amber-700 font-semibold uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-amber-950 mb-4 leading-tight">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-amber-800/50 leading-relaxed">
            Every great expedition starts with the right plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-amber-950 text-white relative shadow-treasure-lg ring-1 ring-amber-800'
                  : 'bg-white border border-amber-100/80 hover:shadow-card-hover'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-amber-400 text-amber-950 text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-lg font-bold mb-1 ${tier.highlighted ? 'text-white' : 'text-amber-950'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlighted ? 'text-amber-200/70' : 'text-amber-700/50'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-display text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-amber-950'}`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-sm ${tier.highlighted ? 'text-amber-200/60' : 'text-amber-700/40'}`}>
                    {tier.period}
                  </span>
                )}
              </div>

              <a
                href="#cta"
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] mb-6 ${
                  tier.highlighted
                    ? 'bg-white text-amber-950 hover:bg-amber-50'
                    : 'gradient-bg text-white shadow-sm shadow-amber-600/15'
                }`}
              >
                {tier.cta}
              </a>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-2.5 text-sm ${tier.highlighted ? 'text-amber-100/80' : 'text-amber-800/60'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 mt-0.5 ${tier.highlighted ? 'text-amber-400' : 'text-amber-500'}`}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
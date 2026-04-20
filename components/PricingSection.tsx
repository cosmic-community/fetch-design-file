// Changed: Added new pricing section for the treasure map service
interface PricingTier {
  name: string
  emoji: string
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
    emoji: '🧭',
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
    cta: 'Start Exploring',
    highlighted: false,
  },
  {
    name: 'Captain',
    emoji: '⚓',
    price: '$12',
    period: '/month',
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
    cta: 'Become Captain',
    highlighted: true,
  },
  {
    name: 'Admiral',
    emoji: '👑',
    price: '$39',
    period: '/month',
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
    cta: 'Go Admiral',
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative">
      <div className="absolute inset-0 map-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full text-sm text-amber-800 font-medium mb-4">
            <span>💰</span> Pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-amber-800/60">
            Every great expedition starts with the right plan. Pick yours and start mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-amber-50 to-white border-amber-300 shadow-lg shadow-amber-100/50 ring-1 ring-amber-300 relative'
                  : 'bg-white border-amber-100 hover:shadow-amber-100/50'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-xs font-bold rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="text-3xl mb-3">{tier.emoji}</div>
              <h3 className="font-display text-xl font-bold text-amber-950 mb-1">{tier.name}</h3>
              <p className="text-sm text-amber-700/60 mb-4">{tier.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-extrabold text-amber-950">{tier.price}</span>
                {tier.period && <span className="text-amber-700/60 text-sm">{tier.period}</span>}
              </div>

              <a
                href="#cta"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all hover:scale-[1.02] ${
                  tier.highlighted
                    ? 'gradient-bg text-white shadow-md shadow-amber-600/20'
                    : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
                }`}
              >
                {tier.cta}
              </a>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-amber-800/70">
                    <span className="text-amber-500 mt-0.5 shrink-0">✓</span>
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
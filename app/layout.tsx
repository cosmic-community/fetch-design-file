import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'
import { getLandingPage } from '@/lib/cosmic'

export async function generateMetadata(): Promise<Metadata> {
  const landingPage = await getLandingPage()
  return {
    title: landingPage?.metadata?.seo_meta_title || 'X Marks the Spot — Build Your Own Treasure Map',
    description: landingPage?.metadata?.seo_meta_description || 'Create custom treasure hunt maps for parties, team events, and adventures. The ultimate treasure map building platform.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗺️</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="bg-white text-amber-950 antialiased">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}
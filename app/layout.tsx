import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FavoritesProvider } from '@/lib/favorites-context'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'LagosHomes | Premium Luxury Real Estate in Lagos, Nigeria',
  description: 'Discover premium luxury homes, penthouses, and villas in Lagos, Nigeria. Browse exclusive properties in Lekki, Ikoyi, Victoria Island, and Ajah.',
  keywords: 'luxury real estate Lagos, premium homes Nigeria, Lekki properties, Ikoyi homes, Victoria Island apartments',
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <FavoritesProvider>
          {children}
          <WhatsAppButton />
        </FavoritesProvider>
        <Analytics />
      </body>
    </html>
  )
}

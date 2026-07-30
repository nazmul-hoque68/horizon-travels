import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Horizon Travels — Premium Travel Agency in Bangladesh',
  description:
    'Discover unforgettable journeys with Horizon Travels. Domestic tours, international packages, Umrah & Hajj, visa assistance, air tickets, and hotel bookings. Bangladesh\'s most trusted premium travel agency.',
  keywords: [
    'travel agency Bangladesh',
    'tour packages Bangladesh',
    'Umrah packages Bangladesh',
    'international tour packages',
    'Cox\'s Bazar tour',
    'Maldives tour package',
    'visa assistance Bangladesh',
    'air ticket booking Bangladesh',
  ],
  openGraph: {
    title: 'Horizon Travels — Premium Travel Agency in Bangladesh',
    description: 'Discover unforgettable journeys with Horizon Travels.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d6e68',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`antialiased font-sans ${_inter.variable} ${_playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}

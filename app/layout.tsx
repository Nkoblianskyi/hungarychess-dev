import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hungarychess.com'),
  title: {
    default: 'HungaryChess - A sakk szíve Magyarországon',
    template: '%s | HungaryChess',
  },
  description:
    'A magyar sakk legteljesebb online forrása: történelem, szabályok, taktika, stratégia, technika és cikkek kezdőknek és haladóknak.',
  keywords: [
    'sakk',
    'magyar sakk',
    'Magyarország sakk',
    'sakkszabályok',
    'sakktaktika',
    'sakkstratégia',
    'versenysakk',
    'sakkoktatás',
    'sakkozás kezdőknek',
    'sakk haladóknak',
  ],
  authors: [{ name: 'HungaryChess', url: 'https://hungarychess.com' }],
  creator: 'HungaryChess',
  publisher: 'HungaryChess',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://hungarychess.com',
    languages: { 'hu-HU': 'https://hungarychess.com' },
  },
  openGraph: {
    title: 'HungaryChess - A sakk szíve Magyarországon',
    description:
      'A magyar sakk legteljesebb online forrása: történelem, szabályok, taktika, stratégia és cikkek.',
    url: 'https://hungarychess.com',
    siteName: 'HungaryChess',
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HungaryChess',
    description: 'A sakk szíve Magyarországon',
  },
  category: 'sports',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

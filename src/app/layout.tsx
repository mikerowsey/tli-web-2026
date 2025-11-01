import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tokistar Lighting - The Art of Lighting Innovation',
  description: 'Professional architectural and hospitality lighting solutions with over 50 years of experience. Discover our Micro Series and innovative lighting systems.',
  keywords: 'lighting, architectural lighting, hospitality lighting, LED, micro series, professional lighting',
  icons: {
    icon: '/favico.png',
    apple: '/favico.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
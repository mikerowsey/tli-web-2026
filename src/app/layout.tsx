import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tokistar Lighting - The Art of Lighting Innovation',
  description: 'Professional architectural and hospitality lighting solutions with over 50 years of experience. Discover our Micro Series and innovative lighting systems.',
  keywords: 'lighting, architectural lighting, hospitality lighting, LED, micro series, professional lighting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
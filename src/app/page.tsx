import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import FeaturesSection from '@/components/FeaturesSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
    </main>
  )
}
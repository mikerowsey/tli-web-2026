import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import FeaturesSection from '@/components/FeaturesSection'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
      
      {/* Modern Catalog Preview */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Experience Our <span className="gradient-text">Modern Product Catalog</span>
          </h2>
          <p className="body-large text-neutral-600 max-w-3xl mx-auto mb-8">
            See the difference: Our new interactive catalog replaces outdated FlippingBook 
            with lightning-fast search, advanced filtering, and mobile-optimized design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog">
              <button className="btn-primary">
                Try Interactive Catalog Demo
              </button>
            </Link>
            <a 
              href="https://tokistar.com/interactive/micro/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="btn-secondary">
                Compare with Current FlippingBook
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
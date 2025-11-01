import Link from 'next/link'

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-16">
        <h1 className="heading-1 text-center mb-4">Site Map</h1>
        <p className="body-large text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Navigate through all pages and sections of the Tokistar Lighting website.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Micro+Series" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Micro Series
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Macro+Series" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Macro Series
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Outdoor+Lighting" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Outdoor Lighting
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Linear+Systems" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Linear Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Support & Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sales-agents" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Sales Agents
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Downloads
                </Link>
              </li>
              <li>
                <Link href="/technical" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Technical Specs
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Installation Guides
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Warranty Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Legal & Information</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  → Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 text-sm">
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Image 
              src="/tokistar-logo-white.svg" 
              alt="Tokistar Lighting" 
              width={200}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm italic mb-4">
              The Art of Lighting Innovation
            </p>
            <p className="text-gray-400 text-sm">
              Professional architectural and hospitality lighting solutions with over 50 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/sales-agents" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Sales Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:7147727005" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    (714) 772-7005
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@tokistar.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    info@tokistar.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  Anaheim, CA
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tokistar Lighting Incorporated. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Sitemap
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

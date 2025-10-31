'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const microProducts = [
  {
    id: 'micro-spotlight',
    name: 'MicroSpotlight',
    description: 'Perfect for highlighting fine jewelry and valuable artifacts in showcases and displays.',
    image: '/products/micro-spotlight.jpg',
    features: ['Slender design', 'Silver or black finish', 'Superior craftsmanship'],
    applications: ['Museums', 'Jewelry stores', 'Art galleries'],
  },
  {
    id: 'micro-tracklight',
    name: 'MicroTracklight',
    description: 'Versatile track lighting solution for dynamic accent and display lighting.',
    image: '/products/micro-tracklight.jpg',
    features: ['Adjustable beam', 'Track mounting', 'Energy efficient'],
    applications: ['Retail', 'Galleries', 'Commercial spaces'],
  },
  {
    id: 'micro-downlight',
    name: 'MicroDownlight',
    description: 'Compact recessed lighting for subtle ambient and task illumination.',
    image: '/products/micro-downlight.jpg',
    features: ['Recessed installation', 'Multiple beam angles', 'Dimming compatible'],
    applications: ['Hospitality', 'Residential', 'Office spaces'],
  },
  {
    id: 'micro-footlight',
    name: 'MicroFootlight',
    description: 'Low-profile lighting for pathway and accent illumination.',
    image: '/products/micro-footlight.jpg',
    features: ['Low profile', 'Weather resistant', 'Pathway lighting'],
    applications: ['Landscape', 'Architecture', 'Safety lighting'],
  },
]

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">
            Discover the <span className="gradient-text">Micro Series</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Our award-winning Micro Series combines precision engineering with elegant design, 
            delivering professional lighting solutions for the most demanding applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {microProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-display font-semibold text-white mb-1">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">Key Features</h4>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-neutral-100">
                  <Link href={`/products/micro-series/${product.id}`} className="flex-1">
                    <button className="w-full px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Details
                    </button>
                  </Link>
                  <button className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm font-medium rounded-md transition-colors duration-200">
                    <Download className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/products/micro-series">
            <button className="btn-primary">
              Explore Complete Micro Series
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
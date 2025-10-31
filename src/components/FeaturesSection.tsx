'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Zap, Users, Globe, Clock } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: '50+ Years Experience',
    description: 'Decades of expertise in architectural and hospitality lighting innovation.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'LED technology that reduces energy consumption while delivering superior illumination.',
  },
  {
    icon: Shield,
    title: 'Professional Grade',
    description: 'Built to withstand demanding commercial and hospitality environments.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated lighting consultants to help you achieve the perfect illumination.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Trusted by architectural firms and hospitality brands worldwide.',
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Fast turnaround times to keep your projects on schedule.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">
            Why Choose <span className="gradient-text">Tokistar Lighting</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            We&apos;ve been illuminating spaces with precision and artistry for over five decades, 
            earning the trust of architects, designers, and hospitality professionals worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-neutral-200">
            <h3 className="heading-3 mb-6">Ready to Illuminate Your Space?</h3>
            <p className="body-large text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our lighting experts are ready to help you create the perfect ambiance for your project. 
              Get in touch for a consultation or technical specification review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-secondary">
                Download Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
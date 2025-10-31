'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Star } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 text-primary-400">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium">50+ Years of Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              The Art of{' '}
              <span className="gradient-text">
                Lighting Innovation
              </span>
            </h1>
            
            <p className="body-large text-neutral-300 max-w-xl">
              Professional architectural and hospitality lighting solutions that illuminate 
              spaces with precision, elegance, and cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/micro-series">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary group"
                >
                  Explore Micro Series
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">
                  Consult Our Experts
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px]">
              {/* Lighting effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent rounded-full animate-glow" />
              
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Lightbulb className="h-24 w-24 text-primary-400" />
                </div>
              </div>
              
              {/* Floating elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  className={`absolute w-2 h-2 bg-primary-400 rounded-full ${
                    i % 2 === 0 ? 'top-1/4' : 'top-3/4'
                  } ${
                    i % 3 === 0 ? 'left-1/4' : i % 3 === 1 ? 'left-1/2' : 'left-3/4'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
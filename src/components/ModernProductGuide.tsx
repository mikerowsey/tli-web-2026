// Example: Modern Product Selection Guide Component
'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Download, ExternalLink, X, Eye, FileText, Zap } from 'lucide-react'
import Image from 'next/image'
import { microSeriesProducts, categories, applications, type Product } from '@/data/products'

export default function ModernProductGuide() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedApplication, setSelectedApplication] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProduct])

  const filteredProducts = useMemo(() => {
    return microSeriesProducts.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.applications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesApplication = selectedApplication === 'all' || 
        product.applications.includes(selectedApplication)
      
      return matchesSearch && matchesCategory && matchesApplication
    })
  }, [searchTerm, selectedCategory, selectedApplication])

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container-custom py-8">
          <div className="text-center mb-8">
            <h1 className="heading-2 mb-4 text-primary-600">
              Product Selection Guide
            </h1>
            <p className="body-large text-neutral-600 max-w-3xl mx-auto">
              Explore our complete catalog and find the perfect lighting solution for your project.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products, applications, specifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-6 space-y-4 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Application
                  </label>
                  <select
                    value={selectedApplication}
                    onChange={(e) => setSelectedApplication(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Applications</option>
                    {applications.map(app => (
                      <option key={app} value={app}>{app}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedApplication('all')
                    setSearchTerm('')
                  }}
                  className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
          
          {/* Results Summary */}
          <div className="text-center mt-6">
            <p className="text-neutral-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> of{' '}
              <span className="font-semibold">{microSeriesProducts.length}</span> products
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card cursor-pointer group"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-primary-600/90 px-3 py-2 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-display font-semibold text-white">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white text-primary-700 font-medium text-xs px-2 py-1 rounded-full">
                      {product.subcategory}
                    </span>
                  </div>
                  <Image 
                    src={product.images.main}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/70 text-white font-medium text-xs px-2 py-1 rounded">
                      {product.specifications.wattage} • {product.specifications.lumens} lm
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                    <span className="bg-black/70 text-white font-medium text-xs px-2 py-1 rounded">
                      {product.specifications.ipRating}
                    </span>
                    <span className="bg-black/70 text-white font-medium text-xs px-2 py-1 rounded">
                      {product.specifications.cri} CRI
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 3).map((app, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                        >
                          {app}
                        </span>
                      ))}
                      {product.applications.length > 3 && (
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md">
                          +{product.applications.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-neutral-100">
                    <button className="flex-1 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                      <Eye className="h-3 w-3" />
                      View Details
                    </button>
                    <a
                      href={product.downloads.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
                    >
                      <Download className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-neutral-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-600 mb-2">No products found</h3>
            <p className="text-neutral-500 mb-4">
              Try adjusting your search terms or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedApplication('all')
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-neutral-900">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-neutral-600">{selectedProduct.subcategory}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Product Image and Description */}
                  <div className="space-y-6">
                    <div className="relative h-80 bg-neutral-100 rounded-lg overflow-hidden">
                      <Image 
                        src={selectedProduct.images.main}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Product Video Button */}
                    {selectedProduct.videos?.demo && (
                      <div>
                        <a
                          href={selectedProduct.videos.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                          Watch Product Demo
                        </a>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Description</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                      <div className="bg-neutral-50 rounded-lg p-4 space-y-4">
                        {/* Power Consumption */}
                        <div>
                          <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">Power Consumption</h4>
                          <div className="text-sm">
                            <span className="font-semibold text-neutral-900">
                              {selectedProduct.specifications.wattage} @ {selectedProduct.specifications.driverType === 'CV' ? selectedProduct.specifications.voltage : (selectedProduct.specifications.current || selectedProduct.specifications.voltage)}
                            </span>
                            <span className="ml-2 text-neutral-600">
                              ({selectedProduct.specifications.driverType === 'CV' ? 'Constant Voltage' : 'Constant Current'})
                            </span>
                          </div>
                        </div>

                        {/* Light Output */}
                        <div className="pt-3 border-t border-neutral-200">
                          <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">Lumens, CRI</h4>
                          <div className="text-sm">
                            <span className="font-semibold text-neutral-900">[{selectedProduct.specifications.lumens} lumens] [{selectedProduct.specifications.cri.replace('>', '')} CRI]</span>
                          </div>
                        </div>

                        {/* Beam Angle */}
                        <div className="pt-3 border-t border-neutral-200">
                          <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">Beam Angle</h4>
                          <div className="text-sm">
                            <span className="font-semibold text-neutral-900">{selectedProduct.specifications.beamAngle}</span>
                          </div>
                        </div>

                        {/* Color Temperature Visual Display */}
                        <div className="pt-3 border-t border-neutral-200">
                          <div className="mb-3">
                            <span className="text-neutral-700 text-sm font-medium">LED Color</span>
                          </div>
                          <div className="flex gap-2">
                            {selectedProduct.specifications.colorTemp.includes('2000K') || selectedProduct.specifications.colorTemp.includes('20K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#ff8c00'}} title="2000K">
                                2000K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('2200K') || selectedProduct.specifications.colorTemp.includes('22K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#ffa040'}} title="2200K">
                                2200K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('2400K') || selectedProduct.specifications.colorTemp.includes('24K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#ffb060'}} title="2400K">
                                2400K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('2700K') || selectedProduct.specifications.colorTemp.includes('27K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#ffddb3'}} title="2700K">
                                2700K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('3000K') || selectedProduct.specifications.colorTemp.includes('30K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#ffe8c8'}} title="3000K">
                                3000K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('3500K') || selectedProduct.specifications.colorTemp.includes('35K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#ffe0c0'}} title="3500K">
                                3500K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('4000K') || selectedProduct.specifications.colorTemp.includes('40K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#fff0e0'}} title="4000K">
                                4000K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('4500K') || selectedProduct.specifications.colorTemp.includes('45K') ? (
                              <div className="w-12 h-12 rounded border border-neutral-300 flex items-center justify-center text-xs font-medium" style={{backgroundColor: '#fffaf0'}} title="4500K">
                                4500K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('5000K') || selectedProduct.specifications.colorTemp.includes('50K') ? (
                              <div className="w-12 h-12 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-medium" title="5000K">
                                5000K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('5500K') || selectedProduct.specifications.colorTemp.includes('55K') ? (
                              <div className="w-12 h-12 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-medium" title="5500K">
                                5500K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('6000K') || selectedProduct.specifications.colorTemp.includes('60K') ? (
                              <div className="w-12 h-12 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-medium" title="6000K">
                                6000K
                              </div>
                            ) : null}
                            {selectedProduct.specifications.colorTemp.includes('6500K') || selectedProduct.specifications.colorTemp.includes('65K') ? (
                              <div className="w-12 h-12 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-medium" title="6500K">
                                6500K
                              </div>
                            ) : null}
                          </div>
                        </div>
                        
                        {/* Fixture Color Visual Display */}
                        <div className="pt-3 border-t border-neutral-200">
                          <div className="mb-3">
                            <span className="text-neutral-700 text-sm font-medium">Fixture Color</span>
                          </div>
                          <div className="flex gap-2">
                            {selectedProduct.specifications.finish.map((finish, index) => {
                              const colorMap: Record<string, string> = {
                                'Black': '#1a1a1a',
                                'White': '#ffffff',
                                'Silver': '#c0c0c0',
                                'Bronze': '#8b6f47',
                                'Satin Aluminum': '#b8b8b0',
                                'Chrome': '#e8e8e8',
                                'Brass': '#b5a642',
                                'Copper': '#b87333',
                                'Gold': '#d4af37',
                                'Matte Black': '#2d2d2d',
                                'Satin White': '#f5f5f5',
                                'Custom': '#9ca3af'
                              }
                              const bgColor = colorMap[finish] || '#9ca3af'
                              const textColor = ['Black', 'Bronze', 'Brass', 'Copper', 'Matte Black'].includes(finish) ? 'white' : 'black'
                              
                              return (
                                <div
                                  key={index}
                                  className="px-3 py-2 rounded border-2 border-neutral-300 flex items-center justify-center text-xs font-medium whitespace-nowrap"
                                  style={{backgroundColor: bgColor, color: textColor}}
                                  title={finish}
                                >
                                  {finish}
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Environmental Rating */}
                        <div className="pt-3 border-t border-neutral-200">
                          <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">Environmental Rating</h4>
                          <div className="text-sm">
                            <span className="font-semibold text-neutral-900">{selectedProduct.specifications.ipRating}</span>
                            <span className="text-neutral-600">, </span>
                            <span className="font-semibold text-neutral-900">{selectedProduct.specifications.locationRating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Downloads & Resources</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={selectedProduct.downloads.brochure}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm"
                        >
                          <FileText className="h-4 w-4" />
                          Brochure
                        </a>
                        <a
                          href={selectedProduct.downloads.spec}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                        >
                          <Download className="h-4 w-4" />
                          Specifications
                        </a>
                        <a
                          href={selectedProduct.downloads.ies}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                        >
                          <Download className="h-4 w-4" />
                          IES Files (ZIP)
                        </a>
                        <a
                          href={selectedProduct.downloads.installation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                        >
                          <FileText className="h-4 w-4" />
                          Installation Guide
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <a
                        href="/downloads/tokistar-warranty.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium transition-colors text-center"
                      >
                        Limited Warranty
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
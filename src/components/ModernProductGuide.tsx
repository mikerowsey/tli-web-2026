// Example: Modern Product Selection Guide Component
'use client'

import { useState, useMemo } from 'react'
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

  const filteredProducts = useMemo(() => {
    return microSeriesProducts.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.applications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || product.subcategory === selectedCategory
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
            <h1 className="heading-2 mb-4">
              Interactive <span className="gradient-text">Product Selection Guide</span>
            </h1>
            <p className="body-large text-neutral-600 max-w-3xl mx-auto">
              Explore our complete Micro Series catalog with advanced search and filtering. 
              Find the perfect lighting solution for your project.
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
            
            <div className="flex justify-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                Advanced Filters
                {(selectedCategory !== 'all' || selectedApplication !== 'all') && (
                  <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </button>
            </div>
            
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-neutral-100 rounded-lg p-6 space-y-4"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
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
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.subcategory}
                    </span>
                  </div>
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                    <Zap className="h-16 w-16 text-neutral-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-neutral-200 text-sm">
                      {product.specifications.wattage} • {product.specifications.lumens}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Key Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Wattage:</span>
                          <span>{product.specifications.wattage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Lumens:</span>
                          <span>{product.specifications.lumens}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Beam:</span>
                          <span>{product.specifications.beamAngle}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">CRI:</span>
                          <span>{product.specifications.cri}</span>
                        </div>
                      </div>
                    </div>

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
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-neutral-100">
                    <button className="flex-1 px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                      <Eye className="h-3 w-3" />
                      View Details
                    </button>
                    <button className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm font-medium rounded-md transition-colors duration-200">
                      <Download className="h-3 w-3" />
                    </button>
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                      <div className="w-full h-full flex items-center justify-center">
                        <Zap className="h-24 w-24 text-neutral-400" />
                      </div>
                    </div>
                    
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

                  {/* Specifications and Applications */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Applications</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProduct.applications.map((app, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-primary-50 text-primary-700 text-sm rounded-md text-center"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                      <div className="bg-neutral-50 rounded-lg p-4 space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Wattage:</span>
                            <span className="font-medium">{selectedProduct.specifications.wattage}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Lumens:</span>
                            <span className="font-medium">{selectedProduct.specifications.lumens}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Beam Angle:</span>
                            <span className="font-medium">{selectedProduct.specifications.beamAngle}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">CRI:</span>
                            <span className="font-medium">{selectedProduct.specifications.cri}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Color Temp:</span>
                            <span className="font-medium">{selectedProduct.specifications.colorTemp}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Voltage:</span>
                            <span className="font-medium">{selectedProduct.specifications.voltage}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Dimensions:</span>
                            <span className="font-medium">{selectedProduct.specifications.dimensions}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Mounting:</span>
                            <span className="font-medium">{selectedProduct.specifications.mounting}</span>
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-neutral-200">
                          <div className="flex justify-between items-center">
                            <span className="text-neutral-500 text-sm">Available Finishes:</span>
                            <div className="flex gap-2">
                              {selectedProduct.specifications.finish.map((finish, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-white border border-neutral-200 text-xs rounded"
                                >
                                  {finish}
                                </span>
                              ))}
                            </div>
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                          IES File
                        </a>
                        <a
                          href={selectedProduct.downloads.installation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                        >
                          <FileText className="h-4 w-4" />
                          Installation
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium transition-colors">
                        Request Quote for {selectedProduct.name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
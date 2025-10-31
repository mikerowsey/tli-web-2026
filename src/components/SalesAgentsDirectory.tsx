'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Phone, Mail, User, Building, Globe, Filter } from 'lucide-react'
import Image from 'next/image'
import { salesAgents, usRegions, internationalRegions, findAgentsByState, findAgentsByRegion, findInternationalAgents, type SalesAgent } from '@/data/salesAgents'

export default function SalesAgentsDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedAgent, setSelectedAgent] = useState<SalesAgent | null>(null)
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

  const filteredAgents = useMemo(() => {
    let agents = salesAgents

    // Filter by search term
    if (searchTerm) {
      agents = agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.territory.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        agent.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by region
    if (selectedRegion !== 'all') {
      if (selectedRegion === 'international') {
        agents = findInternationalAgents()
      } else {
        agents = findAgentsByRegion(selectedRegion)
      }
    }

    return agents
  }, [searchTerm, selectedRegion])

  const AgentCard = ({ agent }: { agent: SalesAgent }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Agent Photo */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
            {agent.photo ? (
              <Image
                src={agent.photo}
                alt={agent.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            ) : (
              <User className="w-8 h-8" />
            )}
          </div>

          {/* Agent Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Building className="w-4 h-4" />
              <span className="text-sm">{agent.company}</span>
            </div>
            
            {/* Territory */}
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {agent.territory.length > 3 
                  ? `${agent.territory.slice(0, 3).join(', ')} +${agent.territory.length - 3} more`
                  : agent.territory.join(', ')
                }
              </span>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-1 mb-4">
              {agent.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="flex gap-2">
              <a
                href={`tel:${agent.phone}`}
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <button
                onClick={() => setSelectedAgent(agent)}
                className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const RegionMap = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Coverage Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* US Regions */}
        {Object.entries(usRegions).map(([region, states]) => (
          <div key={region} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">{region}</h4>
            <div className="text-sm text-gray-600 mb-2">
              {states.length} states
            </div>
            <button
              onClick={() => setSelectedRegion(region)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                selectedRegion === region
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              View Agents
            </button>
          </div>
        ))}

        {/* International */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">International</h4>
          <div className="text-sm text-gray-600 mb-2">
            {internationalRegions.length} regions
          </div>
          <button
            onClick={() => setSelectedRegion('international')}
            className={`text-sm px-3 py-1 rounded-full transition-colors ${
              selectedRegion === 'international'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            View Agents
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sales Agents & Representatives
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our expert sales representatives across the United States and internationally. 
              Find your local lighting specialist for personalized service and support.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, company, location, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Region Filter */}
            <div className="lg:w-64">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Regions</option>
                {Object.keys(usRegions).map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
                <option value="international">International</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === 'list'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === 'map'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Map View
              </button>
            </div>
          </div>
        </div>

        {/* Regional Map */}
        {viewMode === 'map' && <RegionMap />}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''}
            {selectedRegion !== 'all' && ` in ${selectedRegion}`}
          </p>
        </div>

        {/* Agent Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAgents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No agents found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or contact us directly.
            </p>
            <a
              href="mailto:info@tokistar.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us Directly
            </a>
          </motion.div>
        )}
      </div>

      {/* Agent Detail Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedAgent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Agent Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                    {selectedAgent.photo ? (
                      <Image
                        src={selectedAgent.photo}
                        alt={selectedAgent.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedAgent.name}</h2>
                    <p className="text-lg text-gray-600 mb-2">{selectedAgent.company}</p>
                    {selectedAgent.bio && (
                      <p className="text-gray-700">{selectedAgent.bio}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedAgent(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <a href={`tel:${selectedAgent.phone}`} className="text-blue-600 hover:underline">
                          {selectedAgent.phone}
                        </a>
                      </div>
                      {selectedAgent.mobile && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <a href={`tel:${selectedAgent.mobile}`} className="text-blue-600 hover:underline">
                            {selectedAgent.mobile} (Mobile)
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <a href={`mailto:${selectedAgent.email}`} className="text-blue-600 hover:underline">
                          {selectedAgent.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Address</h3>
                    <div className="text-gray-700">
                      <p>{selectedAgent.address.street}</p>
                      <p>{selectedAgent.address.city}, {selectedAgent.address.state} {selectedAgent.address.zip}</p>
                      <p>{selectedAgent.address.country}</p>
                    </div>
                  </div>
                </div>

                {/* Territory & Specialties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Territory Coverage</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedAgent.territory.map((territory, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {territory}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedAgent.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                  <a
                    href={`tel:${selectedAgent.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${selectedAgent.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
// Sales Agent data types and sample data
export interface SalesAgent {
  id: string
  name: string
  company: string
  territory: string[]
  email: string
  phone: string
  mobile?: string
  specialties: string[]
  bio?: string
  photo?: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  coverage: {
    states?: string[]
    regions?: string[]
    international?: string[]
  }
}

// Sample sales agents data (replace with real data)
export const salesAgents: SalesAgent[] = [
  {
    id: 'agent-1',
    name: 'John Smith',
    company: 'Pacific Lighting Solutions',
    territory: ['California', 'Nevada', 'Arizona'],
    email: 'john.smith@pacificlighting.com',
    phone: '(555) 123-4567',
    mobile: '(555) 987-6543',
    specialties: ['Micro Series', 'Architectural Lighting', 'Hospitality'],
    bio: 'Over 15 years of experience in architectural lighting design and specification.',
    photo: '/agents/john-smith.jpg',
    address: {
      street: '123 Design Center Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90210',
      country: 'USA'
    },
    coverage: {
      states: ['California', 'Nevada', 'Arizona'],
      regions: ['West Coast']
    }
  },
  {
    id: 'agent-2',
    name: 'Sarah Johnson',
    company: 'Northeast Lighting Associates',
    territory: ['New York', 'New Jersey', 'Connecticut'],
    email: 'sarah@nelighting.com',
    phone: '(555) 234-5678',
    specialties: ['Commercial Lighting', 'Retail Design', 'Track Systems'],
    bio: 'Specialized in high-end retail and commercial lighting solutions.',
    photo: '/agents/sarah-johnson.jpg',
    address: {
      street: '456 Broadway',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA'
    },
    coverage: {
      states: ['New York', 'New Jersey', 'Connecticut'],
      regions: ['Northeast']
    }
  },
  {
    id: 'agent-3',
    name: 'Michael Chen',
    company: 'Texas Lighting Group',
    territory: ['Texas', 'Oklahoma', 'Louisiana'],
    email: 'mchen@txlighting.com',
    phone: '(555) 345-6789',
    specialties: ['Outdoor Lighting', 'Power Series', 'Industrial'],
    bio: 'Expert in large-scale commercial and industrial lighting projects.',
    photo: '/agents/michael-chen.jpg',
    address: {
      street: '789 Commerce St',
      city: 'Dallas',
      state: 'TX',
      zip: '75201',
      country: 'USA'
    },
    coverage: {
      states: ['Texas', 'Oklahoma', 'Louisiana'],
      regions: ['Southwest']
    }
  },
  {
    id: 'agent-4',
    name: 'Emily Rodriguez',
    company: 'International Lighting Partners',
    territory: ['International'],
    email: 'emily@intllighting.com',
    phone: '+1 (555) 456-7890',
    specialties: ['Export Sales', 'Custom Solutions', 'Project Management'],
    bio: 'Manages international sales and custom lighting solutions worldwide.',
    photo: '/agents/emily-rodriguez.jpg',
    address: {
      street: '321 Export Plaza',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      country: 'USA'
    },
    coverage: {
      international: ['Canada', 'Mexico', 'Europe', 'Asia-Pacific']
    }
  }
]

// US States organized by regions for better organization
export const usRegions = {
  'Northeast': [
    'Maine', 'New Hampshire', 'Vermont', 'Massachusetts', 'Rhode Island', 
    'Connecticut', 'New York', 'New Jersey', 'Pennsylvania'
  ],
  'Southeast': [
    'Delaware', 'Maryland', 'Virginia', 'West Virginia', 'Kentucky', 
    'Tennessee', 'North Carolina', 'South Carolina', 'Georgia', 
    'Florida', 'Alabama', 'Mississippi', 'Louisiana', 'Arkansas'
  ],
  'Midwest': [
    'Ohio', 'Michigan', 'Indiana', 'Illinois', 'Wisconsin', 'Minnesota', 
    'Iowa', 'Missouri', 'North Dakota', 'South Dakota', 'Nebraska', 'Kansas'
  ],
  'Southwest': [
    'Texas', 'Oklahoma', 'New Mexico', 'Arizona'
  ],
  'West': [
    'Montana', 'Wyoming', 'Colorado', 'Utah', 'Idaho', 'Washington', 
    'Oregon', 'Nevada', 'California'
  ],
  'Alaska & Hawaii': ['Alaska', 'Hawaii']
}

// International regions
export const internationalRegions = [
  'Canada',
  'Mexico', 
  'Central America',
  'South America',
  'Europe',
  'Middle East',
  'Africa',
  'Asia-Pacific',
  'Australia & New Zealand'
]

// Helper function to find agents by location
export const findAgentsByState = (state: string): SalesAgent[] => {
  return salesAgents.filter(agent => 
    agent.coverage.states?.includes(state) || 
    agent.territory.includes(state)
  )
}

// Helper function to find agents by region
export const findAgentsByRegion = (region: string): SalesAgent[] => {
  return salesAgents.filter(agent => 
    agent.coverage.regions?.includes(region)
  )
}

// Helper function to find international agents
export const findInternationalAgents = (): SalesAgent[] => {
  return salesAgents.filter(agent => 
    agent.coverage.international && agent.coverage.international.length > 0
  )
}
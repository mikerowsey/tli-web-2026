// Product data for Tokistar Lighting modern catalog
export interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  description: string
  applications: string[]
  specifications: {
    wattage: string
    lumens: string
    beamAngle: string
    cri: string
    colorTemp: string
    voltage: string
    dimensions: string
    mounting: string
    finish: string[]
  }
  features: string[]
  images: {
    main: string
    gallery: string[]
  }
  videos?: {
    demo?: string
    installation?: string
    application?: string
    poster?: string
  }
  downloads: {
    brochure: string
    spec: string
    ies: string
    installation: string
  }
  tags: string[]
}

export const microSeriesProducts: Product[] = [
  {
    id: 'msp',
    name: 'MicroSpotlight',
    category: 'Micro Series',
    subcategory: 'Showcase Lighting',
    description: 'The quality of light and superior craftsmanship of Micro Spotlight make it ideal for highlighting fine jewelry and valuable artifacts in showcases and displays.',
    applications: [
      'Museums & Galleries',
      'Jewelry Stores',
      'Retail Display',
      'Art Collections',
      'Showcase Lighting',
      'Architectural Accent'
    ],
    specifications: {
      wattage: '1.2W',
      lumens: '80 - 97',
      beamAngle: '16°, 24°, 30°',
      cri: '>85',
      colorTemp: '27K - 50K',
      voltage: '5V DC',
      dimensions: '12.5mm x 25mm',
      mounting: 'Recessed Socket',
      finish: ['Black', 'Silver']
    },
    features: [
      'Adjustable beam angle and focus',
      'Minimal heat generation',
      'Compact design for discrete installation',
      'Professional-grade LED drivers',
      'High CRI >90 available',
      'Custom color temperatures available'
    ],
    images: {
      main: '/products/micro-spotlight.jpg',
      gallery: [
        '/products/msp-1.jpg',
        '/products/msp-2.jpg',
        '/products/msp-3.jpg'
      ]
    },
    videos: {
      demo: '/videos/msp-demo.mp4',
      installation: '/videos/msp-install.mp4',
      poster: '/videos/msp-demo-poster.jpg'
    },
    downloads: {
      brochure: '/downloads/msp-brochure.pdf',
      spec: '/downloads/msp-specifications.pdf',
      ies: '/downloads/msp.ies',
      installation: '/downloads/msp-installation.pdf'
    },
    tags: ['LED', 'Accent', 'Museum', 'Jewelry', 'High CRI', 'Adjustable']
  },
  {
    id: 'mtk',
    name: 'MicroTracklight',
    category: 'Micro Series',
    subcategory: 'Track Lighting',
    description: 'Versatile track lighting solution providing dynamic accent and display lighting with professional-grade performance.',
    applications: [
      'Retail Environments',
      'Art Galleries', 
      'Commercial Spaces',
      'Hospitality',
      'Residential',
      'Office Spaces'
    ],
    specifications: {
      wattage: '5W - 15W',
      lumens: '400 - 1200',
      beamAngle: '20° - 60°',
      cri: '>85',
      colorTemp: '2700K - 5000K',
      voltage: '120V - 277V',
      dimensions: '3" x 2" x 4"',
      mounting: 'Track System',
      finish: ['Black', 'White', 'Bronze', 'Custom']
    },
    features: [
      'Variable beam angle control',
      'Smooth dimming capabilities',
      'Tool-free lamp replacement',
      '360° rotation and 90° tilt',
      'Multiple track compatibility',
      'Energy efficient LED technology'
    ],
    images: {
      main: '/products/micro-tracklight.jpg',
      gallery: [
        '/products/mtk-1.jpg',
        '/products/mtk-2.jpg',
        '/products/mtk-3.jpg'
      ]
    },
    videos: {
      demo: '/videos/mtk-demo.mp4',
      application: '/videos/mtk-application.mp4',
      poster: '/videos/mtk-demo-poster.jpg'
    },
    downloads: {
      brochure: '/downloads/mtk-brochure.pdf',
      spec: '/downloads/mtk-specifications.pdf',
      ies: '/downloads/mtk.ies',
      installation: '/downloads/mtk-installation.pdf'
    },
    tags: ['LED', 'Track', 'Retail', 'Adjustable', 'Commercial', 'Dimming']
  },
  {
    id: 'mdl',
    name: 'MicroDownlight',
    category: 'Micro Series',
    subcategory: 'Recessed Lighting',
    description: 'Compact recessed downlight perfect for accent lighting in tight spaces and architectural applications.',
    applications: [
      'Residential Interiors',
      'Hospitality Spaces',
      'Retail Displays',
      'Office Buildings',
      'Healthcare Facilities',
      'Educational Spaces'
    ],
    specifications: {
      wattage: '4W - 10W',
      lumens: '300 - 700',
      beamAngle: '25° - 50°',
      cri: '>80',
      colorTemp: '3000K - 4000K',
      voltage: '120V',
      dimensions: '2" diameter',
      mounting: 'Recessed',
      finish: ['White', 'Black', 'Brushed Nickel']
    },
    features: [
      'Ultra-slim profile design',
      'Easy retrofit installation',
      'Excellent thermal management',
      'Long 50,000+ hour lifespan',
      'IC rated for insulation contact',
      'Wet location rated options'
    ],
    images: {
      main: '/products/micro-downlight.jpg',
      gallery: [
        '/products/mdl-1.jpg',
        '/products/mdl-2.jpg',
        '/products/mdl-3.jpg'
      ]
    },
    downloads: {
      brochure: '/downloads/mdl-brochure.pdf',
      spec: '/downloads/mdl-specifications.pdf',
      ies: '/downloads/mdl.ies',
      installation: '/downloads/mdl-installation.pdf'
    },
    tags: ['LED', 'Recessed', 'Residential', 'Commercial', 'IC Rated', 'Retrofit']
  }
]

// Extract unique categories and applications for filtering
export const categories = [...new Set(microSeriesProducts.map(p => p.category))]

export const applications = [
  ...new Set(microSeriesProducts.flatMap(p => p.applications))
].sort()

// Export all products for the catalog
export const allProducts = microSeriesProducts
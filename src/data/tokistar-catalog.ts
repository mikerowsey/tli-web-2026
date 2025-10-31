// Complete Tokistar Product Catalog Structure
// Based on https://tokistar.com/sitemap/

export interface ProductBrand {
  id: string
  name: string
  description: string
  category: string
  productCount: number
  featured: boolean
  products: Product[]
}

export interface Product {
  id: string
  name: string
  brand: string
  category: string
  subcategory: string
  description: string
  applications: string[]
  specifications: {
    wattage: string
    lumens: string
    beamAngle?: string
    cri?: string
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
  url: string
}

// Product Brands/Lines from Tokistar Catalog
export const tokistarBrands: ProductBrand[] = [
  {
    id: 'micro-series',
    name: 'Micro Series',
    description: 'Compact, high-performance LED lighting solutions for precision applications',
    category: 'Architectural Lighting',
    productCount: 8,
    featured: true,
    products: [] // Will be populated with specific products
  },
  {
    id: 'focal-series',
    name: 'Focal Series',
    description: 'Professional accent lighting with superior beam control',
    category: 'Accent Lighting',
    productCount: 3,
    featured: true,
    products: []
  },
  {
    id: 'gradient',
    name: 'Gradient',
    description: 'Linear LED lighting systems with advanced color mixing',
    category: 'Linear Lighting',
    productCount: 4,
    featured: true,
    products: []
  },
  {
    id: 'kromastar',
    name: 'KromaStar',
    description: 'Color-changing LED systems for dynamic lighting effects',
    category: 'Color Changing',
    productCount: 2,
    featured: true,
    products: []
  },
  {
    id: 'tokilux',
    name: 'TokiLux',
    description: 'Premium architectural lighting fixtures',
    category: 'Architectural',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'tokilum',
    name: 'TokiLum',
    description: 'High-output LED luminaires for commercial applications',
    category: 'Commercial',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'tokilinear',
    name: 'TokiLinear',
    description: 'Linear LED systems for continuous lighting applications',
    category: 'Linear Lighting',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'advantage-xf',
    name: 'Advantage XF',
    description: 'Extended frequency LED systems for specialized applications',
    category: 'Specialized',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'exhibitor',
    name: 'Exhibitor',
    description: 'Portable lighting solutions for trade shows and exhibitions',
    category: 'Portable',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'cable-lighting',
    name: 'Cable Lighting',
    description: 'Low-voltage cable-suspended lighting systems',
    category: 'Cable Systems',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'light-veil',
    name: 'Light Veil',
    description: 'Decorative LED mesh and fabric lighting',
    category: 'Decorative',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'lightstrings',
    name: 'Lightstrings',
    description: 'Flexible LED string lighting systems',
    category: 'Decorative',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'tapelight',
    name: 'Tapelight',
    description: 'Flexible LED tape lighting for cove and accent applications',
    category: 'Flexible LED',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'orbit-tower',
    name: 'Orbit Tower',
    description: 'Cylindrical LED tower lighting fixtures',
    category: 'Architectural',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'reveler',
    name: 'Reveler',
    description: 'Entertainment and hospitality lighting solutions',
    category: 'Entertainment',
    productCount: 1,
    featured: false,
    products: []
  },
  {
    id: 'trillium',
    name: 'Trillium',
    description: 'Three-element lighting systems for decorative applications',
    category: 'Decorative',
    productCount: 1,
    featured: false,
    products: []
  }
]

// Micro Series Products (from sitemap)
export const microSeriesProducts: Product[] = [
  {
    id: 'msp',
    name: 'Micro Spotlight',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
    subcategory: 'Accent Lighting',
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
      wattage: '3W - 12W',
      lumens: '200 - 800',
      beamAngle: '15° - 60°',
      cri: '90+ CRI',
      colorTemp: '2700K - 4000K',
      voltage: '12V DC',
      dimensions: '2.5" × 1.5"',
      mounting: 'Surface/Track',
      finish: ['Black', 'White', 'Silver', 'Bronze']
    },
    features: [
      'High CRI 90+ for accurate color rendering',
      'Multiple beam angles available',
      'Adjustable positioning',
      'Long-life LED technology',
      'Low heat generation',
      'Compact form factor'
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
    tags: ['LED', 'Accent', 'Museum', 'Jewelry', 'High CRI', 'Adjustable'],
    url: 'https://tokistar.com/products/micro-series/msp/'
  },
  {
    id: 'mtk',
    name: 'Micro Tracklight',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
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
      lumens: '300 - 1200',
      beamAngle: '20° - 50°',
      cri: '90+ CRI',
      colorTemp: '2700K - 5000K',
      voltage: '12V/24V DC',
      dimensions: '3" × 2" × 4"',
      mounting: 'Track System',
      finish: ['Black', 'White', 'Silver', 'Custom']
    },
    features: [
      'Track compatibility',
      'Adjustable beam angle',
      'Superior color rendering',
      'Heat management system',
      'Easy installation',
      'Multiple finish options'
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
    tags: ['LED', 'Track', 'Retail', 'Adjustable', 'High CRI', 'Commercial'],
    url: 'https://tokistar.com/products/micro-series/mtk/'
  },
  {
    id: 'mdl',
    name: 'Micro Downlight',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
    subcategory: 'Recessed Lighting',
    description: 'Compact recessed downlight delivering superior illumination in tight spaces.',
    applications: [
      'Residential',
      'Commercial',
      'Hospitality',
      'Retail',
      'Office Buildings'
    ],
    specifications: {
      wattage: '6W - 18W',
      lumens: '400 - 1500',
      beamAngle: '30° - 45°',
      cri: '85+ CRI',
      colorTemp: '2700K - 4000K',
      voltage: '120V/277V',
      dimensions: '4" × 3.5"',
      mounting: 'Recessed',
      finish: ['White', 'Black', 'Brushed Nickel']
    },
    features: [
      'Compact design',
      'Energy efficient',
      'Easy retrofit',
      'Dimmer compatible',
      'Long lifespan',
      'Uniform light distribution'
    ],
    images: {
      main: '/products/micro-downlight.jpg',
      gallery: [
        '/products/mdl-1.jpg',
        '/products/mdl-2.jpg'
      ]
    },
    downloads: {
      brochure: '/downloads/mdl-brochure.pdf',
      spec: '/downloads/mdl-specifications.pdf',
      ies: '/downloads/mdl.ies',
      installation: '/downloads/mdl-installation.pdf'
    },
    tags: ['LED', 'Recessed', 'Retrofit', 'Energy Efficient', 'Residential'],
    url: 'https://tokistar.com/products/micro-series/mdl/'
  },
  {
    id: 'mfl',
    name: 'Micro Footlight',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
    subcategory: 'Step Lighting',
    description: 'Low-profile footlight for step illumination and pathway lighting.',
    applications: [
      'Stairways',
      'Pathways',
      'Theaters',
      'Emergency Egress',
      'Landscape'
    ],
    specifications: {
      wattage: '1W - 3W',
      lumens: '50 - 200',
      beamAngle: '120°',
      cri: '80+ CRI',
      colorTemp: '3000K',
      voltage: '12V DC',
      dimensions: '4" × 1" × 0.5"',
      mounting: 'Recessed/Surface',
      finish: ['Stainless Steel', 'Bronze']
    },
    features: [
      'Weather resistant',
      'Low profile design',
      'Wide beam angle',
      'Energy efficient',
      'Easy installation'
    ],
    images: {
      main: '/products/micro-footlight.jpg',
      gallery: ['/products/mfl-1.jpg']
    },
    downloads: {
      brochure: '/downloads/mfl-brochure.pdf',
      spec: '/downloads/mfl-specifications.pdf',
      ies: '/downloads/mfl.ies',
      installation: '/downloads/mfl-installation.pdf'
    },
    tags: ['LED', 'Step Light', 'Pathway', 'Weather Resistant', 'Low Profile'],
    url: 'https://tokistar.com/products/micro-series/micro-footlight/'
  },
  {
    id: 'mlc',
    name: 'Micro Light Cannon',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
    subcategory: 'High-Output Accent',
    description: 'High-intensity accent light for long-distance illumination applications.',
    applications: [
      'Facade Lighting',
      'Monument Lighting',
      'Landscape',
      'Architectural Features',
      'Long Distance Accent'
    ],
    specifications: {
      wattage: '20W - 50W',
      lumens: '1500 - 4000',
      beamAngle: '8° - 25°',
      cri: '85+ CRI',
      colorTemp: '2700K - 4000K',
      voltage: '24V DC',
      dimensions: '6" × 4" × 8"',
      mounting: 'Adjustable Bracket',
      finish: ['Black', 'Bronze', 'Silver']
    },
    features: [
      'High output intensity',
      'Narrow beam control',
      'Weather resistant',
      'Adjustable mounting',
      'Heat dissipation system'
    ],
    images: {
      main: '/products/micro-light-cannon.jpg',
      gallery: ['/products/mlc-1.jpg', '/products/mlc-2.jpg']
    },
    downloads: {
      brochure: '/downloads/mlc-brochure.pdf',
      spec: '/downloads/mlc-specifications.pdf',
      ies: '/downloads/mlc.ies',
      installation: '/downloads/mlc-installation.pdf'
    },
    tags: ['LED', 'High Output', 'Narrow Beam', 'Landscape', 'Weather Resistant'],
    url: 'https://tokistar.com/products/micro-series/mlc/'
  },
  {
    id: 'mpd',
    name: 'Micro Pinhole Downlight',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
    subcategory: 'Recessed Accent',
    description: 'Ultra-small aperture downlight for discrete accent lighting.',
    applications: [
      'Luxury Retail',
      'Hotels',
      'Restaurants',
      'Residential',
      'Art Display'
    ],
    specifications: {
      wattage: '3W - 8W',
      lumens: '150 - 500',
      beamAngle: '15° - 35°',
      cri: '90+ CRI',
      colorTemp: '2700K - 3000K',
      voltage: '12V DC',
      dimensions: '1" aperture',
      mounting: 'Recessed',
      finish: ['Black', 'White', 'Brushed Aluminum']
    },
    features: [
      'Ultra-small aperture',
      'High CRI output',
      'Discrete installation',
      'Precise beam control',
      'Luxury applications'
    ],
    images: {
      main: '/products/micro-pinhole-downlight.jpg',
      gallery: ['/products/mpd-1.jpg']
    },
    downloads: {
      brochure: '/downloads/mpd-brochure.pdf',
      spec: '/downloads/mpd-specifications.pdf',
      ies: '/downloads/mpd.ies',
      installation: '/downloads/mpd-installation.pdf'
    },
    tags: ['LED', 'Pinhole', 'Discrete', 'High CRI', 'Luxury'],
    url: 'https://tokistar.com/products/micro-series/mpd/'
  },
  {
    id: 'mdb',
    name: 'Micro Display Barlight',
    brand: 'Micro Series',
    category: 'Architectural Lighting',
    subcategory: 'Display Lighting',
    description: 'Linear LED bar for display case and shelf illumination.',
    applications: [
      'Display Cases',
      'Retail Shelving',
      'Museums',
      'Jewelry Display',
      'Cabinet Lighting'
    ],
    specifications: {
      wattage: '4W - 12W',
      lumens: '250 - 800',
      beamAngle: '120°',
      cri: '90+ CRI',
      colorTemp: '2700K - 4000K',
      voltage: '12V DC',
      dimensions: '12" - 48" lengths',
      mounting: 'Surface/Recessed',
      finish: ['Silver', 'Black', 'White']
    },
    features: [
      'Linear LED array',
      'Multiple lengths',
      'High CRI for displays',
      'Even light distribution',
      'Low profile design'
    ],
    images: {
      main: '/products/micro-display-barlight.jpg',
      gallery: ['/products/mdb-1.jpg', '/products/mdb-2.jpg']
    },
    downloads: {
      brochure: '/downloads/mdb-brochure.pdf',
      spec: '/downloads/mdb-specifications.pdf',
      ies: '/downloads/mdb.ies',
      installation: '/downloads/mdb-installation.pdf'
    },
    tags: ['LED', 'Linear', 'Display', 'High CRI', 'Multiple Lengths'],
    url: 'https://tokistar.com/products/micro-series/mdb/'
  },
  {
    id: 'mos',
    name: 'Micro Outdoor Spotlight',
    brand: 'Micro Series',
    category: 'Landscape Lighting',
    subcategory: 'Outdoor Accent',
    description: 'Weather-resistant outdoor spotlight for landscape and architectural accent.',
    applications: [
      'Landscape Lighting',
      'Building Facades',
      'Garden Features',
      'Outdoor Art',
      'Security Lighting'
    ],
    specifications: {
      wattage: '5W - 15W',
      lumens: '300 - 1000',
      beamAngle: '15° - 40°',
      cri: '80+ CRI',
      colorTemp: '2700K - 4000K',
      voltage: '12V/24V DC',
      dimensions: '4" × 3" × 5"',
      mounting: 'Spike/Wall Mount',
      finish: ['Bronze', 'Black', 'Green']
    },
    features: [
      'IP65 weather rating',
      'Adjustable beam angle',
      'Spike or wall mount',
      'Corrosion resistant',
      'Long-life LEDs'
    ],
    images: {
      main: '/products/micro-outdoor-spotlight.jpg',
      gallery: ['/products/mos-1.jpg', '/products/mos-2.jpg']
    },
    downloads: {
      brochure: '/downloads/mos-brochure.pdf',
      spec: '/downloads/mos-specifications.pdf',
      ies: '/downloads/mos.ies',
      installation: '/downloads/mos-installation.pdf'
    },
    tags: ['LED', 'Outdoor', 'Weather Resistant', 'Landscape', 'Adjustable'],
    url: 'https://tokistar.com/products/micro-series/micro-outdoor-spotlight/'
  }
]

// Focal Series Products
export const focalSeriesProducts: Product[] = [
  {
    id: 'fln',
    name: 'Focal Line',
    brand: 'Focal Series',
    category: 'Accent Lighting',
    subcategory: 'Linear Accent',
    description: 'Linear accent lighting with precise beam control for architectural applications.',
    applications: ['Architecture', 'Retail', 'Hospitality', 'Commercial'],
    specifications: {
      wattage: '10W - 30W',
      lumens: '600 - 2400',
      colorTemp: '2700K - 4000K',
      voltage: '24V DC',
      dimensions: 'Various lengths',
      mounting: 'Surface/Recessed',
      finish: ['Aluminum', 'Black', 'White']
    },
    features: ['Linear LED array', 'Precise beam control', 'Multiple lengths'],
    images: {
      main: '/products/focal-line.jpg',
      gallery: []
    },
    downloads: {
      brochure: '/downloads/fln-brochure.pdf',
      spec: '/downloads/fln-specifications.pdf',
      ies: '/downloads/fln.ies',
      installation: '/downloads/fln-installation.pdf'
    },
    tags: ['LED', 'Linear', 'Accent', 'Architectural'],
    url: 'https://tokistar.com/products/focal-series/fln/'
  },
  {
    id: 'fsp',
    name: 'Focal Spot',
    brand: 'Focal Series',
    category: 'Accent Lighting', 
    subcategory: 'Spot Lighting',
    description: 'High-performance spot lighting with superior beam quality.',
    applications: ['Museums', 'Galleries', 'Retail', 'Hospitality'],
    specifications: {
      wattage: '8W - 25W',
      lumens: '500 - 2000',
      colorTemp: '2700K - 4000K',
      voltage: '12V/24V DC',
      dimensions: '4" × 3"',
      mounting: 'Track/Surface',
      finish: ['Black', 'White', 'Silver']
    },
    features: ['High beam quality', 'Adjustable focus', 'Multiple mounting options'],
    images: {
      main: '/products/focal-spot.jpg',
      gallery: []
    },
    downloads: {
      brochure: '/downloads/fsp-brochure.pdf',
      spec: '/downloads/fsp-specifications.pdf',
      ies: '/downloads/fsp.ies',
      installation: '/downloads/fsp-installation.pdf'
    },
    tags: ['LED', 'Spot', 'High Quality', 'Adjustable'],
    url: 'https://tokistar.com/products/focal-series/fsp/'
  },
  {
    id: 'fsm',
    name: 'Focal SpotMini',
    brand: 'Focal Series',
    category: 'Accent Lighting',
    subcategory: 'Compact Spot',
    description: 'Compact version of Focal Spot for space-constrained applications.',
    applications: ['Jewelry', 'Small Display', 'Residential', 'Boutique'],
    specifications: {
      wattage: '3W - 8W',
      lumens: '200 - 600',
      colorTemp: '2700K - 3000K',
      voltage: '12V DC',
      dimensions: '2" × 2"',
      mounting: 'Track/Surface',
      finish: ['Black', 'White']
    },
    features: ['Ultra-compact', 'High CRI', 'Easy installation'],
    images: {
      main: '/products/focal-spotmini.jpg',
      gallery: []
    },
    downloads: {
      brochure: '/downloads/fsm-brochure.pdf',
      spec: '/downloads/fsm-specifications.pdf',
      ies: '/downloads/fsm.ies',
      installation: '/downloads/fsm-installation.pdf'
    },
    tags: ['LED', 'Compact', 'High CRI', 'Jewelry'],
    url: 'https://tokistar.com/products/focal-series/fsm/'
  }
]

// Product categories for organization
export const productCategories = [
  'Architectural Lighting',
  'Accent Lighting', 
  'Linear Lighting',
  'Color Changing',
  'Commercial',
  'Landscape Lighting',
  'Decorative',
  'Portable',
  'Cable Systems',
  'Flexible LED',
  'Entertainment',
  'Specialized'
]
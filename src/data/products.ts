// Sample product data for the modern catalog
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
      cri: '>90',
      colorTemp: '2700K - 4000K',
      voltage: '12V DC',
      dimensions: '2.5" x 1.5"',
      mounting: 'Track, Surface, Recessed',
      finish: ['Silver', 'Black', 'White']
    },
    features: [
      'Superior craftsmanship',
      'Slender design profile',
      'Discreet integration',
      'High CRI for accurate color rendering',
      'Adjustable beam angle',
      'Dimming compatible',
      'Long lifespan LED',
      'Heat management system'
    ],
    images: {
      main: '/products/micro-spotlight.jpg',
      gallery: [
        '/products/msp-1.jpg',
        '/products/msp-2.jpg',
        '/products/msp-3.jpg'
      ]
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
      lumens: '300 - 1200',
      beamAngle: '20° - 50°',
      cri: '>85',
      colorTemp: '2700K - 5000K',
      voltage: '120V / 277V',
      dimensions: '3.2" x 2.8"',
      mounting: 'Track System',
      finish: ['Black', 'White', 'Silver']
    },
    features: [
      'Track mounting flexibility',
      'Adjustable positioning',
      'Energy efficient LED',
      'Multiple beam options',
      'Professional dimming',
      'Easy installation',
      'Rotational adjustment',
      'Commercial grade construction'
    ],
    images: {
      main: '/products/micro-tracklight.jpg',
      gallery: [
        '/products/mtk-1.jpg',
        '/products/mtk-2.jpg',
        '/products/mtk-3.jpg'
      ]
    },
    downloads: {
      brochure: '/downloads/mtk-brochure.pdf',
      spec: '/downloads/mtk-specifications.pdf',
      ies: '/downloads/mtk.ies',
      installation: '/downloads/mtk-installation.pdf'
    },
    tags: ['LED', 'Track', 'Commercial', 'Adjustable', 'Retail', 'Hospitality']
  },
  {
    id: 'mdl',
    name: 'MicroDownlight',
    category: 'Micro Series',
    subcategory: 'Recessed Lighting',
    description: 'Compact recessed lighting solution for subtle ambient and task illumination in architectural applications.',
    applications: [
      'Hospitality Spaces',
      'Residential Projects',
      'Office Buildings',
      'Healthcare Facilities',
      'Educational Spaces',
      'Retail Environments'
    ],
    specifications: {
      wattage: '4W - 18W',
      lumens: '250 - 1500',
      beamAngle: '25° - 80°',
      cri: '>80',
      colorTemp: '2700K - 4000K',
      voltage: '120V / 277V',
      dimensions: '4" - 6" cutout',
      mounting: 'Recessed Ceiling',
      finish: ['White', 'Black', 'Aluminum']
    },
    features: [
      'Compact recessed design',
      'Multiple beam angles',
      'Dimming compatibility',
      'Easy retrofit installation',
      'Thermal management',
      'Long LED lifespan',
      'Multiple trim options',
      'IC rated housing'
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
    tags: ['LED', 'Recessed', 'Hospitality', 'Residential', 'Dimming', 'Retrofit']
  },
  {
    id: 'mfl',
    name: 'MicroFootlight',
    category: 'Micro Series',
    subcategory: 'Pathway Lighting',
    description: 'Low-profile lighting solution for pathway illumination and architectural accent in landscape applications.',
    applications: [
      'Landscape Design',
      'Pathway Lighting',
      'Architectural Accent',
      'Safety Lighting',
      'Garden Illumination',
      'Outdoor Hospitality'
    ],
    specifications: {
      wattage: '2W - 8W',
      lumens: '100 - 600',
      beamAngle: '30° - 120°',
      cri: '>70',
      colorTemp: '2700K - 3000K',
      voltage: '12V DC',
      dimensions: '3" x 1.5"',
      mounting: 'In-ground, Surface',
      finish: ['Bronze', 'Black', 'Stainless Steel']
    },
    features: [
      'Weather resistant design',
      'Low profile installation',
      'Multiple mounting options',
      'Vandal resistant',
      'Long lifespan LED',
      'Energy efficient',
      'Easy maintenance',
      'Architectural integration'
    ],
    images: {
      main: '/products/micro-footlight.jpg',
      gallery: [
        '/products/mfl-1.jpg',
        '/products/mfl-2.jpg',
        '/products/mfl-3.jpg'
      ]
    },
    downloads: {
      brochure: '/downloads/mfl-brochure.pdf',
      spec: '/downloads/mfl-specifications.pdf',
      ies: '/downloads/mfl.ies',
      installation: '/downloads/mfl-installation.pdf'
    },
    tags: ['LED', 'Outdoor', 'Landscape', 'Pathway', 'Weather Resistant', 'Low Profile']
  },
  {
    id: 'mlc',
    name: 'MicroLight Cannon',
    category: 'Micro Series',
    subcategory: 'High Output Accent',
    description: 'High-performance accent lighting with exceptional light output and precision beam control for demanding applications.',
    applications: [
      'Architectural Highlighting',
      'Monument Lighting',
      'Large Display Areas',
      'Commercial Facades',
      'Art Installation',
      'Feature Lighting'
    ],
    specifications: {
      wattage: '10W - 25W',
      lumens: '800 - 2500',
      beamAngle: '10° - 40°',
      cri: '>85',
      colorTemp: '2700K - 4000K',
      voltage: '120V / 277V',
      dimensions: '4.5" x 3.2"',
      mounting: 'Track, Surface, Yoke',
      finish: ['Black', 'Bronze', 'Silver']
    },
    features: [
      'High light output',
      'Precision beam control',
      'Professional grade construction',
      'Multiple mounting options',
      'Heat sink design',
      'Adjustable positioning',
      'Commercial dimming',
      'Weather resistant options'
    ],
    images: {
      main: '/products/micro-light-cannon.jpg',
      gallery: [
        '/products/mlc-1.jpg',
        '/products/mlc-2.jpg',
        '/products/mlc-3.jpg'
      ]
    },
    downloads: {
      brochure: '/downloads/mlc-brochure.pdf',
      spec: '/downloads/mlc-specifications.pdf',
      ies: '/downloads/mlc.ies',
      installation: '/downloads/mlc-installation.pdf'
    },
    tags: ['LED', 'High Output', 'Architectural', 'Commercial', 'Precision', 'Monument']
  },
  {
    id: 'mpd',
    name: 'MicroPinhole Downlight',
    category: 'Micro Series',
    subcategory: 'Specialty Recessed',
    description: 'Ultra-discrete pinhole downlight providing minimal visual impact while delivering precise illumination.',
    applications: [
      'Luxury Residential',
      'High-end Hospitality',
      'Museum Display',
      'Retail Luxury',
      'Executive Offices',
      'Fine Dining'
    ],
    specifications: {
      wattage: '3W - 10W',
      lumens: '200 - 800',
      beamAngle: '15° - 35°',
      cri: '>90',
      colorTemp: '2700K - 3000K',
      voltage: '12V DC',
      dimensions: '1" aperture',
      mounting: 'Recessed Ceiling',
      finish: ['White', 'Black', 'Brushed Aluminum']
    },
    features: [
      'Ultra-small aperture',
      'Minimal visual impact',
      'High CRI performance',
      'Precise beam control',
      'Luxury applications',
      'Easy installation',
      'Trim-less design option',
      'Superior optics'
    ],
    images: {
      main: '/products/micro-pinhole.jpg',
      gallery: [
        '/products/mpd-1.jpg',
        '/products/mpd-2.jpg',
        '/products/mpd-3.jpg'
      ]
    },
    downloads: {
      brochure: '/downloads/mpd-brochure.pdf',
      spec: '/downloads/mpd-specifications.pdf',
      ies: '/downloads/mpd.ies',
      installation: '/downloads/mpd-installation.pdf'
    },
    tags: ['LED', 'Pinhole', 'Luxury', 'Museum', 'High CRI', 'Discrete']
  }
]

// Filter and search utilities
export const categories = Array.from(new Set(microSeriesProducts.map(p => p.subcategory)))
export const applications = Array.from(new Set(microSeriesProducts.flatMap(p => p.applications)))
export const finishes = Array.from(new Set(microSeriesProducts.flatMap(p => p.specifications.finish)))
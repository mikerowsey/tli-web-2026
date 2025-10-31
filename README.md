# Tokistar Lighting Website Redesign

A modern, professional website redesign for Tokistar Lighting, Inc., focusing on their Micro Series product catalog and user experience.

## 🎨 Design Philosophy

**Modern & Professional**: Clean, elegant design that reflects Tokistar's 50+ years of lighting expertise
**Product-Focused**: Optimized layouts for showcasing technical lighting products
**Performance-First**: Fast loading times with optimized images and smooth interactions

## 🛠 Tech Stack

- **Framework**: Next.js 15 (React 18, TypeScript)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, professional interactions
- **Icons**: Lucide React for consistent iconography
- **Images**: Next.js Image optimization with WebP/AVIF formats

## 🏗 Architecture

```
src/
├── app/              # Next.js app router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles & Tailwind
├── components/       # Reusable UI components
│   ├── Hero.tsx      # Landing hero section
│   ├── ProductShowcase.tsx  # Micro Series showcase
│   └── FeaturesSection.tsx  # Company features
└── public/           # Static assets
    └── products/     # Product images
```

## 🎯 Project Focus

### Micro Series Redesign
Improving the current repetitive layout at `tokistar.com/products/micro-series/` with:
- **Modern Product Cards**: Clean layouts with hover effects
- **Technical Organization**: Better structure for brochures, IES files, manuals
- **Mobile-First Design**: Responsive grids for all device sizes
- **Professional Aesthetics**: Lighting industry-appropriate color palette

### Key Products
- MicroSpotlight (Museums, Jewelry stores)
- MicroTracklight (Retail, Galleries) 
- MicroDownlight (Hospitality, Residential)
- MicroFootlight (Landscape, Architecture)
- MicroLight Cannon, MicroPinhole Downlight, MicroDisplay Barlight, MicroOutdoor Spotlight

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the redesigned Tokistar website.

## 🎨 Design System

### Colors
- **Primary**: Warm lighting yellows (#eac435 family)
- **Neutral**: Professional grays for content
- **Accent**: Cool blues for interactive elements

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (content)

### Components
- Professional button styles (`btn-primary`, `btn-secondary`)
- Consistent card layouts with hover effects
- Responsive grid systems for product catalogs

## 📁 Key Files

- `.github/copilot-instructions.md` - AI agent guidance for project
- `tailwind.config.js` - Custom design system configuration
- `next.config.js` - Image optimization and performance settings
- `src/components/` - Reusable UI components for lighting products

## 🎯 Development Focus

This redesign specifically targets:
1. **Eliminating repetitive content** on the current Micro Series page
2. **Improving visual hierarchy** with modern layouts
3. **Better organizing technical resources** (brochures, specs, IES files)
4. **Creating mobile-responsive product catalogs**
5. **Professional aesthetics** appropriate for architectural lighting industry

## 📞 Tokistar Contact

- **Phone**: (714) 772-7005
- **Email**: info@tokistar.com
- **Tagline**: "The Art of Lighting Innovation"
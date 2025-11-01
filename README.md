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

# Create deployment package
npm run deploy
```

Open [http://localhost:3000](http://localhost:3000) to view the redesigned Tokistar website locally.

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

## 📁 Key Files & Documentation

**Core Files:**
- `tailwind.config.js` - Custom design system configuration
- `next.config.js` - Image optimization and performance settings
- `src/components/` - Reusable UI components for lighting products
- `scripts/deploy.sh` - Deployment script for SiteGround

**Documentation:**
- `DEPLOYMENT-GUIDE.md` - Complete deployment guide (rowsey.org → tokistar.com)
- `PROJECT-STATUS.md` - Current project status and roadmap
- `FLIPPINGBOOK-ANALYSIS.md` - Analysis of current vs new catalog
- `SALES-AGENTS-ANALYSIS.md` - Sales agents feature analysis
- `.github/copilot-instructions.md` - AI agent guidance

## 🎯 Development Focus

This redesign specifically targets:
1. **Eliminating repetitive content** on the current Micro Series page
2. **Improving visual hierarchy** with modern layouts
3. **Better organizing technical resources** (brochures, specs, IES files)
4. **Creating mobile-responsive product catalogs**
5. **Professional aesthetics** appropriate for architectural lighting industry

## � Deployment Workflow

**Development Site**: rowsey.org (testing and iteration)  
**Production Site**: tokistar.com (live customer-facing site)

```bash
# Deploy to development (rowsey.org)
npm run deploy
# Upload to SiteGround → rowsey.org

# Deploy to production (tokistar.com)
# 1. Update scripts/deploy.sh domain to tokistar.com
# 2. Run: npm run deploy
# 3. Upload to SiteGround → tokistar.com
```

**See `DEPLOYMENT-GUIDE.md` for complete instructions.**

## �📞 Tokistar Contact

- **Phone**: (714) 772-7005
- **Email**: info@tokistar.com
- **Tagline**: "The Art of Lighting Innovation"
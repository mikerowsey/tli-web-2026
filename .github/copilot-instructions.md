# Copilot Instructions

## Project Overview
<!-- Website redesign project for Tokistar Lighting, Inc. -->
This project is a **website redesign** for **Tokistar Lighting, Inc.**, focusing on modernizing their product catalog and user experience. The company is a 50+ year lighting manufacturer specializing in architectural and hospitality lighting systems.

**Primary focus areas:**
- **Micro Series product pages** - Redesigning https://tokistar.com/products/micro-series/
- **Product presentation** - Improving showcase for MicroSpotlight, MicroTracklight, MicroDownlight, etc.
- **User experience** - Modern, intuitive navigation and product discovery
- **Technical resources** - Better organization of brochures, IES files, installation manuals

**Current challenges observed:**
- Repetitive product listings on Micro Series page
- Basic layout and visual hierarchy
- Technical documents scattered across multiple sections

## Architecture & Structure
<!-- Modern frontend architecture for product catalog redesign -->
```
# Suggested structure for Tokistar redesign:
# src/
#   components/
#     product/        # ProductCard, ProductGrid, ProductDetail, TechnicalSpecs
#     catalog/        # CategoryFilter, ProductSearch, SeriesNavigation
#     media/          # ImageGallery, VideoPlayer, DocumentViewer
#     ui/             # Buttons, Cards, Layout components
#   pages/
#     micro-series/   # Redesigned Micro Series landing and product pages
#     products/       # Other product category pages
#   services/
#     product-api/    # Product data fetching, filtering, search
#     media-service/  # Image optimization, document handling
#   assets/
#     images/         # Product photos, technical diagrams
#     documents/      # PDFs, IES files, installation guides
```

**Key design system considerations:**
- **Product showcase patterns** - Consistent card layouts, image galleries
- **Technical document organization** - Tabbed interfaces for specs, manuals, IES files
- **Responsive product grids** - Mobile-first approach for catalog browsing
- **Visual hierarchy** - Clear product categorization and navigation

## Development Workflow
<!-- Add specific commands and processes as they're established -->
- **Setup**: Document installation and environment setup steps
- **Build**: Add build commands when build system is configured
- **Test**: Include test commands and testing patterns
- **Deploy**: Document deployment process when established

## Coding Conventions
<!-- Design system and component patterns for product catalog -->
- **Component naming**: Product-focused (ProductCard, SeriesHeader, TechnicalSpecs)
- **File organization**: Group by feature (product/, catalog/, media/) not type
- **State management**: Product data, filter states, media loading states
- **Responsive design**: Mobile-first approach with product grid breakpoints
- **Image optimization**: WebP/AVIF for product photos, lazy loading for galleries
- **Accessibility**: ARIA labels for product specs, keyboard navigation for catalogs

## Key Files & Directories
<!-- Critical files for Micro Series redesign -->
- **src/pages/micro-series/** - Main redesign target, current page has repetitive listings
- **src/components/product/** - Reusable product display components
- **src/assets/products/** - Product images, specs, IES files, installation manuals
- **src/data/micro-series.json** - Product data structure for MicroSpotlight, MicroTracklight, etc.
- **src/styles/product-grid.css** - Responsive layouts for product catalogs
- **src/components/technical-docs/** - Document viewers for brochures, IES files, manuals

## Integration Points
<!-- Document external dependencies and APIs -->
- **Product Catalog API**: Integration with Tokistar product database
- **Interactive Selection Guide**: Product filtering and recommendation engine
- **Media Management**: Product images, technical specs, installation guides
- **E-commerce**: Potential integration with ordering/quoting systems
- **Technical Calculations**: Lighting calculations, beam angles, lumens
- **CMS Integration**: WordPress integration (current tokistar.com appears to use WP)

## Common Tasks
<!-- Frequent redesign tasks for Micro Series -->
```bash
# Development workflow (add actual commands as project develops)
# npm run dev              # Start development server
# npm run build:prod       # Build optimized product catalog
# npm run lint:components  # Lint product components
# npm run test:catalog     # Test product catalog functionality
# npm run optimize:images  # Optimize product images
```

**Redesign-specific tasks:**
- **Product data migration** - Extract current product info into structured format
- **Component development** - Build reusable ProductCard, TechnicalSpecs components  
- **Image optimization** - Process product photos for web delivery
- **Document organization** - Structure brochures, IES files, installation manuals

## Notes for AI Agents
- This project is currently empty - refer to this file as code is added
- Update sections above as patterns emerge and conventions are established
- Focus on project-specific approaches rather than general best practices
- Include specific examples from the actual codebase when documenting patterns
- **Micro Series redesign focus**: The main goal is improving the repetitive, basic layout at https://tokistar.com/products/micro-series/
- **Product types to handle**: MicroSpotlight, MicroTracklight, MicroDownlight, MicroFootlight, MicroLight Cannon, MicroPinhole Downlight, MicroDisplay Barlight, MicroOutdoor Spotlight
- **Technical resources**: Each product has brochures, videos, submittals, installation manuals, and IES files that need better organization
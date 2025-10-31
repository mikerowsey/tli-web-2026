# Downloads Directory

This directory contains all downloadable product resources:

## File Types

### PDFs
- **Brochures**: Product marketing materials (`*-brochure.pdf`)
- **Specifications**: Technical specification sheets (`*-specifications.pdf`) 
- **Installation**: Installation guides and manuals (`*-installation.pdf`)

### IES Files
- **Photometric Data**: IES lighting files for design software (`*.ies`)

## Naming Convention

Use product abbreviations as prefixes:
- `msp-` = MicroSpotlight
- `mtk-` = MicroTracklight  
- `mdl-` = MicroDownlight
- `mfl-` = MicroFootlight
- `mlc-` = MicroLight Cannon
- `mpd-` = MicroPinhole Downlight

## Examples
```
downloads/
├── msp-brochure.pdf
├── msp-specifications.pdf
├── msp-installation.pdf
├── msp.ies
├── mtk-brochure.pdf
└── ...
```

## Adding New Files
1. Follow naming convention
2. Update product data in `src/data/products.ts`
3. Test download links in development
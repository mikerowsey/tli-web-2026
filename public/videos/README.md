# Videos Directory

This directory contains product demonstration and installation videos.

## File Types

### Product Videos
- **Demonstrations**: Product showcase videos (`*-demo.mp4`)
- **Installation**: Installation process videos (`*-install.mp4`)
- **Applications**: Real-world application videos (`*-application.mp4`)

### Supported Formats
- **MP4**: Primary format for web compatibility
- **WebM**: Alternative format for better compression
- **Poster Images**: Thumbnail images for video players (`*-poster.jpg`)

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
videos/
├── msp-demo.mp4
├── msp-demo-poster.jpg
├── msp-install.mp4
├── mtk-demo.mp4
├── mtk-application.mp4
└── ...
```

## Video Guidelines
- **Resolution**: 1080p minimum, 4K preferred for product showcases
- **Format**: H.264/MP4 for compatibility
- **Duration**: 30-90 seconds for demos, longer for installations
- **Size**: Optimize for web (under 50MB when possible)

## Adding New Videos
1. Follow naming convention
2. Include poster image for thumbnails
3. Update product data in `src/data/products.ts`
4. Test video playback in development
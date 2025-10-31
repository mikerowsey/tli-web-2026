# SiteGround Deployment Checklist

## Pre-Deployment Setup

- [ ] **Verify SiteGround Plan Details**
  - Check hosting plan features (storage, bandwidth)
  - Confirm SSL certificate is active
  - Note PHP version and available features

- [ ] **Backup Current Site**
  - Download current tokistar.com files
  - Export WordPress database (if applicable)
  - Save current site structure

## Build Process

```bash
# 1. Configure for static export
npm run build:siteground

# 2. Verify build output
ls -la out/
# Should see: index.html, _next/, and all static assets
```

## SiteGround Upload Options

### Option A: File Manager (Easiest)
1. Log into SiteGround control panel
2. Open File Manager
3. Navigate to `public_html/`
4. Upload contents of `out/` folder
5. Set proper permissions (755 for folders, 644 for files)

### Option B: FTP/SFTP
```bash
# Using FileZilla, WinSCP, or command line
# Host: your-domain.com
# Username: your-siteground-username
# Password: your-siteground-password
# Port: 21 (FTP) or 22 (SFTP)

# Upload all files from out/ to public_html/
```

### Option C: Git Integration (If Available)
1. Enable Git in SiteGround control panel
2. Connect to GitHub repository
3. Set up automatic deployment from main branch

## Post-Deployment

- [ ] **Test Website**
  - Visit https://tokistar.com
  - Check mobile responsiveness
  - Verify all pages load correctly
  - Test contact forms (if any)

- [ ] **Performance Check**
  - Run Google PageSpeed Insights
  - Test loading times from different locations
  - Check Core Web Vitals

- [ ] **SEO Verification**
  - Submit updated sitemap to Google Search Console
  - Update meta descriptions and titles
  - Verify structured data markup

## Maintenance

### Regular Updates
```bash
# When making changes:
1. Update code locally
2. Test with npm run dev
3. Build with npm run build:siteground
4. Upload new out/ folder contents to SiteGround
```

### Performance Optimization
- Enable SiteGround CDN (if available)
- Configure caching settings
- Optimize images before upload
- Use SiteGround's built-in optimization tools

## Troubleshooting

### Common Issues:
- **404 errors**: Check file paths and trailing slashes
- **Missing images**: Verify image paths in out/ folder
- **Broken styles**: Ensure CSS files uploaded correctly
- **SSL issues**: Verify SSL certificate in SiteGround panel

### SiteGround Support:
- 24/7 chat and phone support
- Extensive knowledge base
- WordPress-specific help available

## Future Considerations

### When to Consider Upgrading:
- Traffic exceeds SiteGround plan limits
- Need for server-side rendering (SSR)
- Requirement for API routes or databases
- Global CDN performance becomes critical

### Hybrid Approach:
- Keep main site on SiteGround
- Use Vercel free tier for interactive tools
- Subdomain setup: tools.tokistar.com → Vercel
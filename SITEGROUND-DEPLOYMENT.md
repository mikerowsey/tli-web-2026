# SiteGround Deployment Checklist

## Your Infrastructure Overview
- **Domain**: Network Solutions (DNS management)
- **Email**: Google Workspace (@tokistar.com emails)
- **Web Hosting**: SiteGround GoGeek Plan (paid through 2028)

**GoGeek Plan Advantages:**
- ✅ **Advanced caching** - SuperCacher for better performance
- ✅ **Git integration** - Automated deployments possible
- ✅ **Staging environment** - Test before going live
- ✅ **Advanced security** - Better protection features
- ✅ **Priority support** - Faster response times
- ✅ **More resources** - Higher limits for traffic and storage

This premium setup provides excellent performance and professional features.

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

## SiteGround GoGeek Upload Options

### Option A: Git Integration (Recommended for GoGeek)
**Best choice for automated deployments:**
1. Log into SiteGround control panel
2. Navigate to **Git** section (available on GoGeek)
3. Create repository connection to GitHub
4. Set up automatic deployment from `main` branch
5. Configure build command: `npm run build:siteground`

```bash
# GoGeek Git workflow:
1. Push code to GitHub
2. SiteGround automatically pulls changes
3. Runs build command (if configured)
4. Deploys to public_html
```

### Option B: Staging Environment (GoGeek Feature)
**Test before going live:**
1. Deploy to staging environment first
2. Test functionality and performance
3. Push to production when ready
4. Zero downtime deployment

### Option C: File Manager (Traditional)
1. Log into SiteGround control panel
2. Open File Manager
3. Navigate to `public_html/`
4. Upload contents of `out/` folder
5. Set proper permissions (755 for folders, 644 for files)

### Option D: FTP/SFTP
```bash
# GoGeek provides both FTP and SFTP
# Host: your-domain.com
# Username: your-siteground-username
# Password: your-siteground-password
# Port: 21 (FTP) or 22 (SFTP) - SFTP recommended for security
```

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

### Performance Optimization (GoGeek Features)
- **Enable SuperCacher** - SiteGround's advanced caching system
- **Configure Speed Optimizer** - Automatic CSS/JS minification
- **Enable CDN** - CloudFlare integration available on GoGeek
- **Use HTTP/2** - Already enabled on GoGeek plans
- **Optimize images** - Built-in optimization tools
- **Enable Gzip compression** - Available in control panel

### GoGeek Security Features
- **Security hardening** - Advanced server-level protection
- **Free SSL** - Let's Encrypt with auto-renewal
- **Daily backups** - Automatic backup with easy restore
- **Malware scanning** - Regular security scans
- **IP blocking** - Protection against malicious traffic

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

### Future Migration (If Desired):
If you ever want to move to Vercel/Netlify, the process is simple:

**Network Solutions DNS Changes:**
```
# Change A records to point to new hosting
@ → New hosting provider IP
www → New hosting provider IP

# Keep MX records unchanged (Google Workspace)
@ → aspmx.l.google.com (priority 1)
@ → alt1.aspmx.l.google.com (priority 5)
# etc. - Google Workspace MX records stay the same
```

**No Email Disruption**: Since Google Workspace handles email separately, changing web hosting providers won't affect your @tokistar.com emails at all.
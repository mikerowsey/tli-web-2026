# Quick Setup Guide: SiteGround Multi-Site Workflow

## 🚀 Quick Start

### 1. Create Development Subdomain
```bash
# In SiteGround cPanel:
# Subdomains → Create Subdomain
# Name: dev
# Domain: tokistar.com
# Document Root: public_html/dev
```

### 2. Deploy to Development
```bash
# Build and package for deployment
npm run deploy:dev

# Follow the instructions to upload to SiteGround
# Upload the generated zip file to public_html/dev/
# Extract and test at dev.tokistar.com
```

### 3. Test Development Site
- Visit `https://dev.tokistar.com`
- Test all functionality
- Share with team for review

## 📋 Deployment Commands

```bash
# Development deployment
npm run deploy:dev

# Staging deployment (if you create staging subdomain)
npm run deploy:staging  

# Production deployment (when ready to go live)
npm run deploy:production
```

## 🔄 Recommended Workflow

### Development Phase
1. **Code locally** → `npm run dev`
2. **Deploy to dev** → `npm run deploy:dev`
3. **Test on dev.tokistar.com**
4. **Iterate and refine**

### Launch Phase
1. **Final testing** on dev site
2. **Backup current** tokistar.com
3. **Deploy to production** → `npm run deploy:production`
4. **Switch DNS** or replace files

### Ongoing Updates
1. **Code changes** locally
2. **Test on dev** subdomain
3. **Deploy to production** when ready

## 🌐 Domain Setup Options

### Option A: Subdomain Development
```
Current:     tokistar.com (WordPress)
Development: dev.tokistar.com (New site)
Launch:      Replace tokistar.com content
```

### Option B: Separate Domain Development  
```
Current:     tokistar.com (WordPress)
Development: tokistar-new.com (or any available domain)
Launch:      Point tokistar.com to new hosting
```

## 📁 SiteGround File Structure

```
public_html/
├── index.html                 # Current WordPress site
├── wp-content/               # WordPress files
├── dev/                      # Development subdomain
│   ├── index.html           # New Next.js site
│   ├── _next/               # Next.js assets
│   ├── catalog/             # Product catalog
│   └── downloads/           # PDFs, videos
└── staging/                 # Optional staging subdomain
```

## ⚙️ Automation Options

### Current: Manual Upload
- Run deployment script
- Upload zip file via cPanel
- Extract and test

### Future: Git Integration
- SiteGround Git support (if available)
- GitHub Actions workflow
- Automatic deployment on push

## 🔧 Technical Notes

### Static Export Configuration
- Already configured in `next.config.js`
- Optimized for SiteGround hosting
- All assets properly handled

### Performance Optimizations
- Image optimization enabled
- Static file compression
- CDN-ready structure

### SEO Considerations
- Static HTML generation
- Proper meta tags
- Sitemap generation

## 📞 Support Resources

- **SiteGround**: Hosting control panel
- **Network Solutions**: Domain DNS management  
- **Google Workspace**: Email configuration
- **GitHub**: Version control and collaboration

## 🚨 Important Notes

1. **Always backup** before production deployment
2. **Test thoroughly** on dev subdomain first
3. **Check all links** and assets after deployment
4. **Monitor performance** after going live
5. **Keep WordPress site** as backup until confident

---

*This setup gives you a professional development workflow while leveraging your existing SiteGround hosting through 2028.*
# Tokistar Lighting Website - Deployment Guide

## Primary Deployment: SiteGround (Current Hosting)

### Cost-Effective Solution ✅
Since you have **SiteGround hosting paid through 2028**, this is the most economical approach! However, we need to consider the technical requirements:

### SiteGround Deployment Options:

#### **Option 1: Static Export (Recommended)**
- **Best fit for SiteGround** - Works with any hosting provider
- **Fast performance** - Pre-built HTML/CSS/JS files
- **Cost effective** - Uses your existing hosting plan
- **SEO optimized** - Static files are search engine friendly

### SiteGround Setup Steps:

1. **Configure Next.js for Static Export:**
   ```javascript
   // next.config.js - Updated for SiteGround
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true, // Required for static export
     },
   }
   
   module.exports = nextConfig
   ```

2. **Build and Deploy:**
   ```bash
   # Build static files
   npm run build
   
   # Upload 'out' folder contents to SiteGround public_html via:
   # - SiteGround File Manager
   # - FTP/SFTP client
   # - SiteGround Git integration (if available)
   ```

3. **SiteGround Advantages:**
   - **SSL included** - Free SSL certificates
   - **WordPress compatible** - Can run alongside existing WP site
   - **Email hosting** - Keep your @tokistar.com emails
   - **Backup services** - SiteGround handles backups
   - **Support** - 24/7 technical support

#### **Option 2: Node.js Hosting (If Available)**
- Check if your SiteGround plan supports Node.js
- Some SiteGround plans include Node.js hosting
- Would allow full Next.js features (SSR, API routes)

### Alternative: Hybrid Approach

If you need advanced features, consider this cost-effective hybrid:

- **SiteGround**: Host the main website (static export)
- **Vercel Free Tier**: Host interactive tools (Product Selection Guide)
- **Subdomain setup**: tools.tokistar.com → Vercel, main site → SiteGround

### Comparison: SiteGround vs Other Options

| Feature | SiteGround | Vercel | Netlify |
|---------|------------|--------|---------|
| **Cost** | ✅ Already paid through 2028 | $20/month Pro | $19/month Pro |
| **Setup** | Manual upload | Automatic CI/CD | Automatic CI/CD |
| **Performance** | Good (static files) | Excellent (global CDN) | Excellent (global CDN) |
| **SSL** | ✅ Included | ✅ Included | ✅ Included |
| **Email hosting** | ⚠️ Available but you use Google Workspace | ❌ Need separate service | ❌ Need separate service |
| **Support** | ✅ 24/7 phone/chat | Email only | Email only |
| **Best for** | Cost-effective, existing investment | Advanced web apps | JAMstack sites |

**Note**: Since you use Google Workspace for email, the email hosting advantage of SiteGround is less relevant.

## Your Current Infrastructure:

**Domain Management**: Network Solutions
**Email Hosting**: Google Workspace
**Web Hosting**: SiteGround (paid through 2028)

This is an excellent, professional setup that gives you maximum flexibility!

### **DNS Configuration (Network Solutions):**
Your current DNS setup likely looks like:
```
# A Record (Web hosting)
@ → SiteGround IP address
www → SiteGround IP address

# MX Records (Email)
@ → Google Workspace mail servers
(aspmx.l.google.com, etc.)

# Other records as needed
```

### **Deployment Advantages:**
✅ **Domain control** - Full DNS management through Network Solutions
✅ **Email independence** - Google Workspace separate from web hosting
✅ **Hosting flexibility** - Can change web hosting without affecting email
✅ **Professional setup** - Separate providers for domain, email, and hosting

### **Still Recommended: SiteGround (Phase 1)**
**Pros:**
- ✅ **Zero additional cost** - Use existing hosting through 2028
- ✅ **Proven hosting** - Reliable, established platform
- ✅ **Email independence** - Google Workspace handles your @tokistar.com emails
- ✅ **Simple deployment** - Upload static files via File Manager or FTP

**Cons:**
- ⚠️ **Manual deployment** - No automatic CI/CD from GitHub
- ⚠️ **Basic CDN** - Not global edge performance
- ⚠️ **Limited scalability** - Traditional hosting constraints

### **Consider for Future: Modern Platform Migration**
With Google Workspace handling email, migrating hosting becomes easier:

**Option A: Vercel Professional ($20/month)**
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** - Lightning fast worldwide
- ✅ **Advanced features** - Image optimization, analytics, preview deployments
- ✅ **Developer experience** - Built for Next.js
- ✅ **Email setup** - Just point your domain DNS to Vercel, keep Google Workspace MX records

**Option B: Netlify ($19/month)**
- ✅ **Similar benefits** to Vercel
- ✅ **Strong JAMstack focus**
- ✅ **Great for static sites**

### SiteGround Configuration Steps:

### Production Checklist:

- [ ] **Domain**: Set up tokistar.com custom domain
- [ ] **Analytics**: Configure Vercel Analytics or Google Analytics
- [ ] **Images**: Add high-quality product photography
- [ ] **SEO**: Optimize meta descriptions and titles
- [ ] **Performance**: Test Core Web Vitals
- [ ] **Contact Forms**: Implement contact/quote request forms
- [ ] **Product Database**: Connect to existing product catalog

### Recommended Configuration:

```javascript
// next.config.js - Production optimizations
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['tokistar.com'], // Add your domain
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Enable static export if needed
  // output: 'export',
}

module.exports = nextConfig
```

## Expected Performance:
- **Page Speed**: 90+ Lighthouse score
- **Global Load Time**: <2 seconds worldwide
- **Image Optimization**: Automatic WebP/AVIF
- **SEO**: Excellent Next.js built-in optimizations
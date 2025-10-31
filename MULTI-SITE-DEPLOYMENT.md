# SiteGround Multi-Site Deployment Strategy

## Overview
Tokistar Lighting development and deployment workflow using multiple SiteGround domains for development, staging, and production.

## Current Infrastructure
- **Hosting**: SiteGround GoGeek plan (paid through 2028)
- **Domain Management**: Network Solutions
- **Email**: Google Workspace
- **Version Control**: GitHub (tli-web-2026)

## Deployment Strategy Options

### Option 1: Domain Switching (Recommended for Launch)
```
Development: dev.tokistar.com (or separate domain)
Production:  tokistar.com (switch DNS when ready)
```

**Pros:**
- Clean transition
- Zero downtime switch
- Easy rollback
- Keep current site live during development

**Process:**
1. Setup dev site on separate SiteGround domain
2. Develop and test thoroughly
3. Export static build to production domain
4. Update DNS records to switch (or use SiteGround's domain tools)

### Option 2: Automated Deployment (Best for Ongoing Updates)
```
Development: Local/GitHub
Staging:     staging.tokistar.com
Production:  tokistar.com (auto-deploy on main branch)
```

**Pros:**
- Continuous deployment
- Always up-to-date
- Professional workflow
- Easy collaboration

## SiteGround Setup Guide

### Step 1: Create Development Site

1. **Add New Domain in SiteGround**
   ```
   cPanel → Subdomains → Create subdomain
   Name: dev
   Domain: tokistar.com
   Document Root: /public_html/dev
   ```

2. **Alternative: Use Separate Domain**
   ```
   If you have another domain available:
   - Point it to SiteGround
   - Create new hosting account
   - Use for development
   ```

### Step 2: Prepare Static Export

Our project is already configured for static export:

```bash
# Build for SiteGround deployment
npm run build:siteground

# This creates optimized static files in 'out/' directory
```

### Step 3: Upload Methods

#### Method A: Manual Upload (Initial Setup)
```bash
# After build
zip -r tokistar-site.zip out/
# Upload via cPanel File Manager or FTP
```

#### Method B: Automated Deploy (Advanced)
```bash
# Using SiteGround's Git integration (if available)
# Or custom deployment script
```

## Deployment Scripts

Let me create automated deployment scripts for both methods:

### Manual Deployment Script
```bash
#!/bin/bash
# deploy-manual.sh
npm run build:siteground
zip -r dist/tokistar-$(date +%Y%m%d).zip out/
echo "Upload dist/tokistar-$(date +%Y%m%d).zip to SiteGround"
echo "Extract to appropriate domain folder"
```

### Git-Based Deployment (if SiteGround supports)
```bash
# GitHub Actions workflow
# Pushes to SiteGround on main branch commits
```

## Domain Configuration

### Development Domain Options

1. **Subdomain**: dev.tokistar.com
2. **Separate Domain**: tokistar-dev.com (if available)
3. **SiteGround Temp Domain**: Use SiteGround's temporary domain

### DNS Management Steps

1. **Current Setup Verification**
   ```
   Check Network Solutions DNS settings
   Verify current A records and nameservers
   ```

2. **Development Setup**
   ```
   Create CNAME for dev.tokistar.com → SiteGround
   Or point separate domain to SiteGround
   ```

3. **Production Switch**
   ```
   Option A: Change A record to new SiteGround IP
   Option B: Use SiteGround's domain transfer tools
   ```

## Recommended Workflow

### Phase 1: Setup (This Week)
1. Create dev subdomain on SiteGround
2. Deploy current build to dev site
3. Test all functionality
4. Share dev link for review

### Phase 2: Refinement (Next 1-2 Weeks)
1. Iterate on design and content
2. Add real product images and videos
3. Test across devices and browsers
4. Performance optimization

### Phase 3: Launch (When Ready)
1. Final build and deployment to production domain
2. DNS switch (or domain redirect)
3. Monitor and verify
4. Redirect old URLs if needed

### Phase 4: Ongoing (Post-Launch)
1. Setup automated deployment
2. Regular content updates
3. Performance monitoring
4. SEO optimization

## File Structure for SiteGround

```
SiteGround Hosting:
├── public_html/              # Main tokistar.com
│   ├── index.html            # Current WordPress site
│   └── ...
├── public_html/dev/          # Development subdomain
│   ├── index.html            # New Next.js static export
│   ├── _next/
│   ├── products/
│   └── ...
└── public_html/staging/      # Optional staging environment
```

## Environment Configuration

The project supports multiple environments:
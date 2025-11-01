# Tokistar Lighting - Deployment Guide

Complete guide for deploying the Tokistar website redesign from development (rowsey.org) to production (tokistar.com).

---

## 🎯 Overview

**Development Site**: rowsey.org - Safe testing and iteration  
**Production Site**: tokistar.com - Live customer-facing site  
**Hosting**: SiteGround GoGeek plan (same account for both)

---

## 📋 Table of Contents

1. [Initial Setup](#initial-setup)
2. [Deploy to Development (rowsey.org)](#deploy-to-development)
3. [Deploy to Production (tokistar.com)](#deploy-to-production)
4. [Troubleshooting](#troubleshooting)

---

## 🚀 Initial Setup

### **Prerequisites**

- Node.js and npm installed
- Project cloned from GitHub
- SiteGround account access

### **First Time Setup**

```bash
# Clone repository
git clone https://github.com/mikerowsey/tli-web-2026.git
cd tli-web-2026

# Install dependencies
npm install

# Test locally
npm run dev
# Visit http://localhost:3000
```

---

## 🧪 Deploy to Development (rowsey.org)

Use rowsey.org for all development, testing, and client reviews before going to production.

### **Step 1: Prepare rowsey.org (First Time Only)**

#### **A. Clear Old WordPress Site**

1. **Login to SiteGround**
   - Go to https://my.siteground.com
   - Select your hosting account
   - Click "Site Tools"

2. **Access File Manager**
   - Click "File Manager" in left sidebar
   - Navigate to: `/home/username/rowsey.org/public_html/`

3. **Delete All Files**
   - Click "Select All" checkbox
   - Click "Delete" button
   - Confirm deletion
   - Verify folder is empty

4. **Delete WordPress Database (Optional)**
   - Go to: Site Tools → MySQL → Databases
   - Find rowsey.org WordPress database
   - Click delete icon and confirm

#### **B. Verify Deployment Configuration**

Check that `scripts/deploy.sh` has the correct domain:

```bash
DEPLOY_DOMAIN="rowsey.org"
```

### **Step 2: Build and Deploy**

```bash
# Build and create deployment package
npm run deploy
```

This creates a zip file in `dist/` folder (e.g., `tokistar-deploy-20251031_153000.zip`)

### **Step 3: Upload to SiteGround**

1. **Open File Manager**
   - Site Tools → File Manager
   - Navigate to: `/home/username/rowsey.org/public_html/`

2. **Upload Package**
   - Click "Upload" button
   - Select the newest zip from your `dist/` folder
   - Wait for upload (~10 seconds for ~300KB file)

3. **Extract Files**
   - Right-click the uploaded zip file
   - Select "Extract"
   - Choose "Extract to current directory"
   - Wait for extraction (~5 seconds)

4. **Clean Up**
   - Right-click the zip file
   - Select "Delete"

5. **Verify File Structure**
   ```
   public_html/
   ├── index.html
   ├── _next/
   ├── catalog/
   ├── sales-agents/
   ├── downloads/
   ├── products/
   └── videos/
   ```

### **Step 4: Test Development Site**

Visit these URLs and verify everything works:

- **Homepage**: https://rowsey.org
- **Product Catalog**: https://rowsey.org/catalog
- **Sales Agents**: https://rowsey.org/sales-agents

**Test Checklist:**
- [ ] Homepage loads with hero and product showcase
- [ ] Navigation menu works (mobile and desktop)
- [ ] Product catalog search and filters work
- [ ] Sales agents directory filters work
- [ ] All images load correctly
- [ ] No console errors (F12 → Console tab)
- [ ] Mobile responsive (test on phone or DevTools)

### **Step 5: Iterate and Improve**

Make changes locally, then redeploy:

```bash
# 1. Make changes to code
# 2. Test locally
npm run dev

# 3. Deploy to rowsey.org
npm run deploy

# 4. Upload new zip (overwrites previous version)
# 5. Test on rowsey.org
```

---

## 🎉 Deploy to Production (tokistar.com)

Only deploy to production when rowsey.org is perfect and approved.

### **Step 1: Backup Current tokistar.com**

**CRITICAL**: Always backup before deploying to production!

1. **Create Backup**
   - Site Tools → Backups
   - Click "Create Backup"
   - Wait for completion
   - Note the backup name/date

2. **Alternative: Download Files**
   - File Manager → tokistar.com/public_html/
   - Select All → Download
   - Save locally as backup

### **Step 2: Update Deployment Configuration**

Edit `scripts/deploy.sh` line 6:

**Change FROM:**
```bash
DEPLOY_DOMAIN="rowsey.org"
```

**Change TO:**
```bash
DEPLOY_DOMAIN="tokistar.com"
```

### **Step 3: Build Production Package**

```bash
npm run deploy
```

New zip file created with tokistar.com configuration.

### **Step 4: Clear tokistar.com WordPress**

1. **Access File Manager**
   - Site Tools → File Manager
   - Navigate to: `/home/username/tokistar.com/public_html/`

2. **Delete All Files**
   - Click "Select All"
   - Click "Delete"
   - Confirm deletion

3. **Delete WordPress Database**
   - Site Tools → MySQL → Databases
   - Delete tokistar.com WordPress database

### **Step 5: Upload New Site**

Same process as development:

1. Upload zip to tokistar.com/public_html/
2. Extract files
3. Delete zip file
4. Verify file structure

### **Step 6: Test Production Site**

**Immediately test** after deployment:

- **Homepage**: https://tokistar.com
- **Product Catalog**: https://tokistar.com/catalog
- **Sales Agents**: https://tokistar.com/sales-agents

**Production Checklist:**
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Search and filters work
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] SSL certificate valid (https://)
- [ ] No console errors
- [ ] Email still working (send test email)

### **Step 7: Monitor**

After deployment:
- Watch for user feedback
- Monitor Google Analytics (if configured)
- Check for any error reports
- Verify email continues working

### **Step 8: Update for Future Deploys**

After production deploy, change `scripts/deploy.sh` back to rowsey.org:

```bash
DEPLOY_DOMAIN="rowsey.org"  # Back to development
```

This way future updates go to rowsey.org first for testing.

---

## 🔄 Ongoing Workflow

### **Normal Development Cycle**

```
1. Make changes locally
   ├─ Edit code
   ├─ Test with: npm run dev
   └─ Commit to git

2. Deploy to rowsey.org (Development)
   ├─ Run: npm run deploy
   ├─ Upload to rowsey.org
   ├─ Test thoroughly
   └─ Get approval

3. Deploy to tokistar.com (Production)
   ├─ Update deploy.sh domain
   ├─ Run: npm run deploy
   ├─ Upload to tokistar.com
   └─ Test and monitor
```

### **Quick Updates vs Major Changes**

**Quick Updates** (small fixes):
- Fix on rowsey.org first
- Test briefly
- Deploy to production same day

**Major Changes** (new features):
- Develop on rowsey.org over days/weeks
- Thorough testing
- Client review and approval
- Schedule production deployment

---

## 🆘 Troubleshooting

### **Site Not Loading After Deployment**

**Problem**: Blank page or 404 error

**Solutions**:
1. Verify index.html exists in root of public_html
2. Check file permissions (644 for files, 755 for folders)
3. Clear browser cache (Cmd+Shift+R or Ctrl+F5)
4. Try incognito/private browsing mode
5. Check that extraction didn't create nested folders

### **Assets Not Loading**

**Problem**: Page loads but images/styles missing

**Solutions**:
1. Verify _next/ folder exists with content
2. Check browser console (F12) for 404 errors
3. Ensure all files uploaded completely
4. Check file permissions
5. Verify relative paths are correct

### **404 on Sub-Pages**

**Problem**: Homepage works but /catalog gives 404

**Solutions**:
1. Verify folder structure (catalog/index.html exists)
2. Check that folders were extracted properly
3. Ensure no .htaccess issues
4. Verify Next.js static export settings

### **SSL Certificate Warning**

**Problem**: "Not Secure" warning in browser

**Solutions**:
1. Wait 10-15 minutes for SSL auto-generation
2. Site Tools → HTTPS → Force HTTPS
3. Regenerate SSL certificate
4. Contact SiteGround support if persists

### **Old WordPress Still Showing**

**Problem**: Still seeing WordPress after deployment

**Solutions**:
1. Verify all WordPress files were deleted
2. Clear browser cache completely
3. Try different browser
4. Check correct domain folder on SiteGround
5. Ensure files extracted to root of public_html

### **Email Stopped Working**

**Problem**: Email not receiving after deployment

**Solutions**:
1. Check Google Workspace settings (shouldn't be affected)
2. Verify MX records still point to Google
3. Contact SiteGround if DNS was changed
4. This shouldn't happen with file deployment!

### **Need to Rollback**

**Problem**: Major issue, need to restore old site

**Solutions**:
1. Site Tools → Backups → Restore backup
2. Or: Re-upload backup files from local download
3. Contact SiteGround support for assistance

---

## 📞 Getting Help

### **SiteGround Support**
- 24/7 Live Chat (fastest)
- Phone support
- Ticket system
- Very helpful and responsive

### **Project Repository**
- GitHub: https://github.com/mikerowsey/tli-web-2026
- Issues tab for bug reports
- Check commit history for changes

### **Documentation**
- `README.md` - Project overview
- `PROJECT-STATUS.md` - Current progress
- `FLIPPINGBOOK-ANALYSIS.md` - Why we're redesigning
- `SALES-AGENTS-ANALYSIS.md` - Feature details

---

## ✅ Quick Reference

### **Commands**

```bash
# Development
npm run dev                 # Start local dev server
npm run build              # Build for production
npm run deploy             # Create deployment package

# Git
git status                 # Check changes
git add .                  # Stage all changes
git commit -m "message"    # Commit changes
git push origin main       # Push to GitHub
```

### **File Locations**

```
Local:
  Development: /Users/michael/projects/tli-web-2026
  Deployment packages: dist/

SiteGround:
  rowsey.org: /home/username/rowsey.org/public_html/
  tokistar.com: /home/username/tokistar.com/public_html/
```

### **URLs**

```
Development: https://rowsey.org
Production: https://tokistar.com
SiteGround: https://my.siteground.com
GitHub: https://github.com/mikerowsey/tli-web-2026
```

---

## 🎯 Best Practices

1. **Always test on rowsey.org first** - Never deploy untested code to production
2. **Backup before production deploy** - Create SiteGround backup before replacing tokistar.com
3. **Test thoroughly** - Use checklist to verify all features work
4. **Deploy during off-hours** - Evening or weekend for production updates
5. **Monitor after deploy** - Check site for first hour after production deployment
6. **Keep rowsey.org updated** - Use as permanent staging environment
7. **Commit to git** - Always commit and push changes to GitHub
8. **Document changes** - Note what changed in commit messages

---

**Questions?** Refer to this guide, check other docs, or reach out for help!

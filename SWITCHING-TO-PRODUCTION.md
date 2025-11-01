# Switching from rowsey.org to tokistar.com

## 📋 When You're Ready for Production

Once you're happy with the site on rowsey.org and ready to deploy to tokistar.com, follow these simple steps:

---

## 🔄 Step 1: Update Deployment Domain (30 seconds)

Edit `scripts/deploy-separate.sh` line 6:

**Change FROM:**
```bash
DEPLOY_DOMAIN="rowsey.org"  # Current: Development | Change to: tokistar.com for production
```

**Change TO:**
```bash
DEPLOY_DOMAIN="tokistar.com"  # Current: Production
```

That's it! Just change `rowsey.org` to `tokistar.com`

---

## 🚀 Step 2: Deploy to tokistar.com

Same process as before:

```bash
# Build and package
npm run deploy

# Upload to SiteGround
# But this time navigate to tokistar.com/public_html/
```

---

## ⚠️ Important: Backup First!

**Before deploying to tokistar.com:**

1. **Backup Current Site**
   - SiteGround → Site Tools → Backups
   - Create backup of current tokistar.com
   - Or download all files via File Manager

2. **Test on rowsey.org First**
   - Make sure everything works perfectly
   - Test all features thoroughly
   - Get client approval

3. **Choose Deployment Time**
   - Off-hours preferred (evening/weekend)
   - When traffic is lowest
   - When you can monitor

---

## 📦 Deployment Process for tokistar.com

### **Step 1: Prepare**
```bash
# Update domain in script (see above)
# Build package
npm run deploy
```

### **Step 2: Backup Production**
- SiteGround File Manager
- Navigate to tokistar.com/public_html/
- Download all files (just in case)
- Or create backup in Site Tools

### **Step 3: Clear Old Site**
- Delete all files in tokistar.com/public_html/
- Leave the folder empty

### **Step 4: Upload New Site**
- Upload your deployment zip
- Extract to public_html/
- Delete zip file

### **Step 5: Test Production**
- Visit https://tokistar.com
- Test all pages and features
- Check on mobile devices
- Verify everything works

---

## 🎯 Gradual Rollout Option

If you want to be extra careful:

### **Option A: Use Subdirectory First**
1. Upload to tokistar.com/public_html/new/
2. Test at tokistar.com/new/
3. When ready, move files to root
4. Delete /new/ directory

### **Option B: Swap Sites Quickly**
1. Rename current site folder: public_html → public_html_old
2. Upload new site to public_html
3. If issues, rename back
4. Delete public_html_old when confirmed working

---

## 🔄 Quick Reference

### **Currently Developing:**
```bash
Domain: rowsey.org
Command: npm run deploy
Upload to: rowsey.org/public_html/
```

### **When Ready for Production:**
```bash
1. Edit scripts/deploy-separate.sh
2. Change: DEPLOY_DOMAIN="tokistar.com"
3. Run: npm run deploy
4. Upload to: tokistar.com/public_html/
5. Test and celebrate! 🎉
```

---

## ✅ Checklist for Going Live

- [ ] Site fully tested on rowsey.org
- [ ] Client approval received
- [ ] All content finalized (images, text, etc.)
- [ ] Backup current tokistar.com site
- [ ] Update deployment script domain
- [ ] Choose deployment time (off-hours)
- [ ] Run `npm run deploy`
- [ ] Upload to tokistar.com
- [ ] Extract files
- [ ] Test production site
- [ ] Monitor for issues
- [ ] Celebrate launch! 🚀

---

**Remember:** There's no rush. Take your time developing on rowsey.org. When everything is perfect, the switch to tokistar.com is just one line change and the same upload process!

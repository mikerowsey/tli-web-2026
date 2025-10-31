# SiteGround Development Subdomain Setup

## Step 1: Access SiteGround cPanel

1. **Login to SiteGround**
   - Go to https://my.siteground.com
   - Login with your credentials
   - Click on your hosting account

2. **Access cPanel**
   - Click "Go to cPanel" or "Site Tools"
   - Look for the "Domains" section

## Step 2: Create Development Subdomain

### Method A: Using Subdomains Tool
1. **Find Subdomains**
   - In cPanel, look for "Subdomains" in the Domains section
   - Click on "Subdomains"

2. **Create New Subdomain**
   ```
   Subdomain: dev
   Domain: tokistar.com (select from dropdown)
   Document Root: public_html/dev
   ```
   - Click "Create"

### Method B: Using Site Tools (Newer SiteGround Interface)
1. **Navigate to Domains**
   - In Site Tools, go to "Domain" → "Subdomains"
   - Click "Create Subdomain"

2. **Configure Subdomain**
   ```
   Subdomain Name: dev
   Domain: tokistar.com
   Folder: /public_html/dev
   ```
   - Click "Create"

## Step 3: Verify Subdomain Creation

1. **Check DNS Propagation**
   - Wait 5-10 minutes for DNS to propagate
   - Visit `https://dev.tokistar.com`
   - You should see either a blank page or default hosting page

2. **File Manager Verification**
   - Go to cPanel → File Manager
   - Navigate to `public_html/`
   - You should see a new `dev/` folder

## Step 4: Test Deployment

Now that the subdomain is created, let's deploy our site:

1. **Run Deployment Script**
   ```bash
   npm run deploy:dev
   ```

2. **Upload to SiteGround**
   - The script will create a zip file in the `dist/` folder
   - Upload this zip file to `public_html/dev/`
   - Extract the zip file
   - Delete the zip file after extraction

## Step 5: Detailed Upload Instructions

### Using cPanel File Manager:
1. **Access File Manager**
   - cPanel → File Manager
   - Navigate to `public_html/dev/`

2. **Upload Deployment Package**
   - Click "Upload" button
   - Select the zip file from your `dist/` folder
   - Wait for upload to complete

3. **Extract Files**
   - Right-click the uploaded zip file
   - Select "Extract"
   - Choose "Extract files to current directory"
   - Delete the zip file after extraction

### Using FTP (Alternative):
```bash
# FTP credentials from SiteGround
Host: ftp.tokistar.com (or your server IP)
Username: your_cpanel_username
Password: your_cpanel_password
Port: 21 (or 22 for SFTP)

# Upload to: /public_html/dev/
```

## Step 6: Verify Deployment

1. **Visit Development Site**
   - Go to `https://dev.tokistar.com`
   - Should load the new modern Tokistar site

2. **Test Key Features**
   - Homepage loads correctly
   - Navigate to `/catalog` for product catalog
   - Test product search and filtering
   - Check mobile responsiveness

## Step 7: SSL Certificate (If Needed)

If you get SSL warnings:
1. **Generate SSL for Subdomain**
   - cPanel → SSL/TLS → Let's Encrypt
   - Add `dev.tokistar.com` to certificate
   - Or contact SiteGround support

## Troubleshooting

### Common Issues:

1. **Subdomain not accessible**
   - Wait for DNS propagation (up to 24 hours)
   - Clear browser cache
   - Check subdomain spelling

2. **Files not displaying correctly**
   - Ensure files are extracted to root of `/public_html/dev/`
   - Check file permissions (644 for files, 755 for folders)

3. **Assets not loading**
   - Verify all files were uploaded
   - Check browser console for 404 errors
   - Ensure relative paths are correct

### Getting Help:
- **SiteGround Support**: 24/7 chat support
- **Documentation**: SiteGround knowledge base
- **Community**: SiteGround forums

---

Ready to proceed? Let me know when you've created the subdomain and I'll help with the deployment!
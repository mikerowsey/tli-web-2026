#!/bin/bash
# deploy.sh
# Deploy Tokistar Lighting website to SiteGround

# Configuration - Change this when ready to deploy to production
DEPLOY_DOMAIN="rowsey.org"  # Current: Development | Change to: tokistar.com for production
BUILD_DIR="out"
DIST_DIR="dist"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ZIP_NAME="tokistar-deploy-${TIMESTAMP}.zip"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo "${BLUE}🚀 Tokistar Lighting - Website Deployment${NC}"
echo "${BLUE}=========================================${NC}"
echo ""
echo "${YELLOW}📦 Target Domain: ${DEPLOY_DOMAIN}${NC}"
echo "${YELLOW}📂 Build Directory: ${BUILD_DIR}${NC}"
echo "${YELLOW}💾 Output: ${DIST_DIR}/${ZIP_NAME}${NC}"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "${YELLOW}⚠️  node_modules not found. Running npm install...${NC}"
  npm install
  echo ""
fi

# Run Next.js build
echo "${BLUE}🔨 Building Next.js site...${NC}"
npm run build

if [ $? -ne 0 ]; then
  echo ""
  echo "${YELLOW}❌ Build failed! Please fix errors and try again.${NC}"
  exit 1
fi

# Create dist directory if it doesn't exist
mkdir -p ${DIST_DIR}

# Create deployment package
echo ""
echo "${BLUE}📦 Creating deployment package...${NC}"
cd ${BUILD_DIR}

# Create zip excluding unnecessary files
zip -r ../${DIST_DIR}/${ZIP_NAME} . \
  -x "*.DS_Store" \
  -x "__MACOSX/*" \
  -x ".git/*"

cd ..

# Get file size
FILE_SIZE=$(du -h ${DIST_DIR}/${ZIP_NAME} | cut -f1)

echo ""
echo "${GREEN}✅ Deployment package created successfully!${NC}"
echo ""
echo "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "${GREEN}📦 Package Details:${NC}"
echo "   File: ${DIST_DIR}/${ZIP_NAME}"
echo "   Size: ${FILE_SIZE}"
echo "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "${YELLOW}📤 Next Steps - Upload to SiteGround:${NC}"
echo ""
echo "   1. Login to SiteGround (https://my.siteground.com)"
echo "   2. Go to Site Tools → File Manager"
echo "   3. Navigate to your ${DEPLOY_DOMAIN} folder:"
echo "      → /home/username/${DEPLOY_DOMAIN}/public_html/"
echo "   4. Click 'Upload' and select: ${DIST_DIR}/${ZIP_NAME}"
echo "   5. Right-click the uploaded zip → 'Extract'"
echo "   6. Delete the zip file after extraction"
echo "   7. Visit: ${GREEN}https://${DEPLOY_DOMAIN}${NC}"
echo ""
echo "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "${GREEN}✨ Ready to upload to SiteGround!${NC}"
echo ""

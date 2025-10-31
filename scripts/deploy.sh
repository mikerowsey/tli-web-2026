#!/bin/bash

# SiteGround Deployment Script for Tokistar Lighting
# Usage: ./scripts/deploy.sh [dev|staging|production]

set -e

# Configuration
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BUILD_DIR="out"
DIST_DIR="dist"
PROJECT_NAME="tokistar"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Parse environment argument
ENVIRONMENT=${1:-dev}

case $ENVIRONMENT in
    dev|development)
        TARGET="Development (dev.tokistar.com)"
        ;;
    staging)
        TARGET="Staging (staging.tokistar.com)"
        ;;
    prod|production)
        TARGET="Production (tokistar.com)"
        ;;
    *)
        log_error "Invalid environment: $ENVIRONMENT"
        echo "Usage: $0 [dev|staging|production]"
        exit 1
        ;;
esac

log_info "Starting deployment to $TARGET environment..."

# Create dist directory if it doesn't exist
mkdir -p $DIST_DIR

# Clean previous builds
log_info "Cleaning previous builds..."
rm -rf $BUILD_DIR
rm -f $DIST_DIR/${PROJECT_NAME}-*.zip

# Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
    log_info "Installing dependencies..."
    npm install
fi

# Build the project
log_info "Building project for SiteGround..."
npm run build:siteground

# Verify build exists
if [ ! -d "$BUILD_DIR" ]; then
    log_error "Build failed - $BUILD_DIR directory not found"
    exit 1
fi

# Create deployment package
PACKAGE_NAME="${PROJECT_NAME}-${ENVIRONMENT}-${TIMESTAMP}.zip"
log_info "Creating deployment package: $PACKAGE_NAME"

cd $BUILD_DIR
zip -r "../$DIST_DIR/$PACKAGE_NAME" . -x "*.DS_Store" "*.git*"
cd ..

# Verify package was created
if [ ! -f "$DIST_DIR/$PACKAGE_NAME" ]; then
    log_error "Failed to create deployment package"
    exit 1
fi

# Get package size
PACKAGE_SIZE=$(du -h "$DIST_DIR/$PACKAGE_NAME" | cut -f1)

log_success "Deployment package created successfully!"
echo ""
echo "📦 Package: $PACKAGE_NAME"
echo "📏 Size: $PACKAGE_SIZE"
echo "🎯 Target: $TARGET"
echo ""

# Deployment instructions
log_info "Deployment Instructions:"
echo ""
echo "1. 🌐 Log into SiteGround cPanel"
echo "2. 📁 Navigate to File Manager"

case $ENVIRONMENT in
    dev|development)
        echo "3. 📂 Go to public_html/dev/ (or create subdomain first)"
        echo "4. 🧹 Clear existing files in dev folder"
        ;;
    staging)
        echo "3. 📂 Go to public_html/staging/ (or create subdomain first)"
        echo "4. 🧹 Clear existing files in staging folder"
        ;;
    prod|production)
        echo "3. 📂 Go to public_html/"
        echo "4. 🧹 BACKUP and clear existing files"
        log_warning "PRODUCTION DEPLOYMENT - Make sure to backup current site!"
        ;;
esac

echo "5. ⬆️  Upload: $DIST_DIR/$PACKAGE_NAME"
echo "6. 📦 Extract the zip file"
echo "7. 🗑️  Delete the zip file after extraction"
echo "8. ✅ Test the deployed site"
echo ""

# Additional notes
log_info "Additional Notes:"
echo "• Ensure your SiteGround domain is properly configured"
echo "• Test all functionality after deployment"
echo "• Check mobile responsiveness"
echo "• Verify all assets (images, videos, PDFs) load correctly"

if [ "$ENVIRONMENT" = "production" ] || [ "$ENVIRONMENT" = "prod" ]; then
    echo ""
    log_warning "PRODUCTION CHECKLIST:"
    echo "□ Backup current tokistar.com site"
    echo "□ Test dev/staging site thoroughly"
    echo "□ Verify DNS settings"
    echo "□ Check Google Analytics/tracking codes"
    echo "□ Test contact forms and interactions"
    echo "□ Verify SSL certificate"
fi

log_success "Deployment preparation complete!"
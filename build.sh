#!/bin/bash

# Build script for Vercel
# This script runs before the build process

echo "Building kontrola-dokumentu-eshop..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Build the Next.js app
echo "Building Next.js application..."
npm run build

echo "Build completed successfully!"

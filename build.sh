#!/bin/bash

# Exit on error
set -e

echo "Installing dependencies..."
npm install

echo "Building application..."
npm run build

echo "Setting up for production..."
# Create a helper script for Render to detect the right output directory
cat > dist/detect-output.js << 'EOL'
const fs = require('fs');
const path = require('path');

// Check if client directory exists (for new builds)
if (fs.existsSync(path.join(__dirname, 'client'))) {
  console.log('Using dist/client as static content directory');
  process.exit(0);
}

// Check if public directory exists (for older builds)
if (fs.existsSync(path.join(__dirname, 'public'))) {
  console.log('Using dist/public as static content directory');
  
  // Create a symbolic link to help standardize paths
  if (!fs.existsSync(path.join(__dirname, 'client'))) {
    fs.symlinkSync(path.join(__dirname, 'public'), path.join(__dirname, 'client'), 'dir');
    console.log('Created symbolic link from dist/public to dist/client');
  }
}

console.log('Build completed successfully!');
EOL

# Make the script executable
chmod +x dist/detect-output.js

echo "Build completed successfully!"
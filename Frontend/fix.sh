#!/bin/bash

# Fix Tailwind CSS v4 PostCSS configuration
echo "Fixing Tailwind CSS v4 PostCSS configuration..."

# Install the required PostCSS plugin
npm install -D @tailwindcss/postcss

# Update PostCSS configuration
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
EOF

# Update Tailwind configuration to include index.html
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

echo "PostCSS configuration updated successfully!"
echo "You can now run: npm run dev"
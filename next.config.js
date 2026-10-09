/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  // Image optimisation — add allowed external domains here when using next/image with external URLs
  images: {
    domains: [],
  },

  // Fonts are loaded via app/layout.tsx — no additional config needed for Google Fonts with next/font
}

module.exports = nextConfig

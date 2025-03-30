/** @type {import('next').NextConfig} */
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // For static export, images must be unoptimized
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  productionBrowserSourceMaps: false, // Disable source maps in production
  experimental: {
    // Only enable optimizeCss when critters is installed
    optimizeCss: false,
    scrollRestoration: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
  },
  output: 'export', // For Netlify static hosting
  distDir: 'out',
  assetPrefix: '/', // Ensure assets are loaded from the correct path
}

module.exports = withBundleAnalyzer(nextConfig) 
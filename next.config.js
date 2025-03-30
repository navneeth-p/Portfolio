/** @type {import('next').NextConfig} */
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

// Determine if we're in development mode
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Always use unoptimized images for static export compatibility
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: !isDev,
  productionBrowserSourceMaps: false,
  experimental: {
    // Only enable optimizeCss when critters is installed
    optimizeCss: false,
    scrollRestoration: true,
  },
  eslint: {
    // Only ignore during production builds
    ignoreDuringBuilds: !isDev,
  },
  typescript: {
    // Only ignore during production builds
    ignoreBuildErrors: !isDev,
  },
  
  // Only use static export configuration in production
  ...(isDev ? {} : {
    output: 'export',
    distDir: 'out',
    trailingSlash: true, // Add trailing slashes for better Netlify compatibility
  }),
}

module.exports = withBundleAnalyzer(nextConfig) 
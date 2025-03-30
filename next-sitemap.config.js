/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://navneeth-portfolio.netlify.app',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: 'out',
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
} 
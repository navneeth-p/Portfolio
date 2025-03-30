/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://navneeth-portfolio.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://navneeth-portfolio.netlify.app/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/404'],
} 
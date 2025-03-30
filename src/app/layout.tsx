import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@/context/ThemeContext'
import dynamic from 'next/dynamic'

// Only import DevelopmentInfo in development mode
const DevelopmentInfo = process.env.NODE_ENV === 'development'
  ? dynamic(() => import('@/components/DevelopmentInfo'), { ssr: false })
  : () => null

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Navneeth Premanand | Full Stack Developer',
  description: 'Full Stack Developer | Data Engineer | Business Analyst. Portfolio showcasing projects and professional experience in web development, data engineering, and business analysis.',
  keywords: ['full stack developer', 'data engineer', 'business analyst', 'portfolio', 'react', 'typescript', 'next.js'],
  authors: [{ name: 'Navneeth Premanand' }],
  creator: 'Navneeth Premanand',
  openGraph: {
    title: 'Navneeth Premanand | Full Stack Developer',
    description: 'Full Stack Developer | Data Engineer | Business Analyst. Portfolio showcasing projects and professional experience.',
    url: 'https://navneeth-portfolio.netlify.app',
    siteName: 'Navneeth Premanand Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Navneeth Premanand Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navneeth Premanand | Full Stack Developer',
    description: 'Full Stack Developer | Data Engineer | Business Analyst',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL('https://navneeth-portfolio.netlify.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          {/* Only render in development mode */}
          {process.env.NODE_ENV === 'development' && <DevelopmentInfo />}
        </ThemeProvider>
      </body>
    </html>
  )
} 
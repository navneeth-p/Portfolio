'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();
  
  // Theme-based styling
  const textHeading = theme === 'dark' ? 'text-light' : 'text-dark';
  const textBody = theme === 'dark' ? 'text-light/80' : 'text-dark/80';
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${bgClass} p-4`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-6xl md:text-8xl font-bold ${textHeading} mb-6`}
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-2xl md:text-3xl font-semibold ${textHeading} mb-4`}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`${textBody} mb-8`}
        >
          Oops! The page you're looking for doesn't exist or might have been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-md shadow-primary/20"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 
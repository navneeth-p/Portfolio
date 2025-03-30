'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const { resolvedTheme, isClient } = useTheme();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  if (!isClient) return null;

  const bgClass = resolvedTheme === 'dark'
    ? 'bg-gradient-to-b from-dark to-primary/40'
    : 'bg-gradient-to-b from-blue-50 to-blue-100';

  const textMainClass = resolvedTheme === 'dark'
    ? 'text-white'
    : 'text-dark';

  const textSecondaryClass = resolvedTheme === 'dark'
    ? 'text-light/70'
    : 'text-dark/70';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${bgClass} p-4`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isAnimated ? 1 : 0, y: isAnimated ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          className={`text-9xl font-bold ${textMainClass} mb-4`}
        >
          404
        </motion.h1>
        <h2 className={`text-2xl font-semibold ${textMainClass} mb-4`}>
          Page Not Found
        </h2>
        <p className={`mb-8 ${textSecondaryClass}`}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors shadow-md shadow-primary/20"
          >
            Return Home
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent/10 rounded-full"
            initial={{ 
              width: Math.random() * 100 + 20, 
              height: Math.random() * 100 + 20,
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.2
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
} 
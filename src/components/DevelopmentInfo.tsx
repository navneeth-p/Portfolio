'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DevelopmentInfo() {
  const { theme, resolvedTheme, isClient } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    // Only show in development mode
    setIsVisible(process.env.NODE_ENV === 'development');
  }, []);

  if (!isClient || !isVisible) {
    return null;
  }

  // Theme-based styling
  const bgColor = resolvedTheme === 'dark' 
    ? 'bg-primary/10 border-accent/20' 
    : 'bg-white border-primary/20 shadow-md';

  const textColor = resolvedTheme === 'dark' 
    ? 'text-light' 
    : 'text-dark';

  const accentColor = resolvedTheme === 'dark' 
    ? 'text-accent' 
    : 'text-primary';

  const pulseColor = resolvedTheme === 'dark' 
    ? 'bg-accent' 
    : 'bg-primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={`fixed bottom-6 right-6 z-50 ${bgColor} border rounded-lg p-3 text-sm ${textColor} font-mono`}
      style={{ maxWidth: isExpanded ? '400px' : '240px' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <div className={`absolute w-2 h-2 rounded-full ${pulseColor} opacity-75 animate-ping`}></div>
            <div className={`w-2 h-2 rounded-full ${pulseColor}`}></div>
          </div>
          <span className={`font-medium ${accentColor}`}>Development Mode</span>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="ml-2 p-1 hover:bg-primary/10 rounded"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 space-y-1"
        >
          <div className="grid grid-cols-[120px_1fr] gap-1">
            <span className="text-gray-400">Environment:</span>
            <span className={accentColor}>
              {process.env.NODE_ENV}
            </span>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-1">
            <span className="text-gray-400">Theme:</span>
            <span className={accentColor}>
              {theme} {theme === 'system' ? `(${resolvedTheme})` : ''}
            </span>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-1">
            <span className="text-gray-400">Window Size:</span>
            <span className={accentColor}>
              {typeof window !== 'undefined' ? `${window.innerWidth}×${window.innerHeight}` : 'N/A'}
            </span>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-1">
            <span className="text-gray-400">Next.js:</span>
            <span className={accentColor}>
              13.x
            </span>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700/20">
            <div className="flex gap-2 items-center">
              <button 
                onClick={() => setIsVisible(false)}
                className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20"
              >
                Hide
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="text-xs px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20"
              >
                Refresh
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

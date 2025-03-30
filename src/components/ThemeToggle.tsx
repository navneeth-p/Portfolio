'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, toggleTheme, isClient } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  // Dynamically change colors based on resolvedTheme
  const buttonClasses = resolvedTheme === 'dark' 
    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30' 
    : 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30';

  // Prevent tooltip from showing when menu is open
  const handleButtonMouseEnter = () => {
    if (!showMenu) {
      setShowTooltip(true);
    }
  };

  return (
    <div className="fixed z-50 top-6 right-6" ref={menuRef}>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMenu(!showMenu)}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
        className={`flex items-center justify-center w-12 h-12 p-2 rounded-full ${buttonClasses} transition-all duration-300 ease-in-out`}
        aria-label="Theme settings"
      >
        {resolvedTheme === 'dark' ? (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2}
            stroke="currentColor" 
            className="w-6 h-6 text-white"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </motion.svg>
        ) : (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2}
            stroke="currentColor" 
            className="w-6 h-6 text-white"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </motion.svg>
        )}
      </motion.button>
      
      <AnimatePresence>
        {showTooltip && !showMenu && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-2 rounded-lg text-sm whitespace-nowrap
              ${resolvedTheme === 'dark' 
                ? 'bg-primary/90 text-white border border-indigo-500/20' 
                : 'bg-white text-primary border border-blue-500/20 shadow-md'}`}
          >
            Theme settings
            <div 
              className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2
                ${resolvedTheme === 'dark' ? 'bg-primary/90 border-t border-r border-indigo-500/20' : 'bg-white border-t border-r border-blue-500/20'}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`absolute right-0 top-full mt-2 p-2 rounded-xl shadow-xl w-48 border
              ${resolvedTheme === 'dark' 
                ? 'bg-dark/90 backdrop-blur-sm text-light border-accent/20' 
                : 'bg-white/90 backdrop-blur-sm text-primary border-primary/10 shadow-lg'}`}
          >
            <div className="text-sm font-medium px-3 py-2 mb-1">Theme Preference</div>
            
            <button
              onClick={() => { setTheme('light'); setShowMenu(false); }}
              className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors
                ${theme === 'light' 
                  ? resolvedTheme === 'dark' 
                    ? 'bg-primary/20 text-accent' 
                    : 'bg-primary/10 text-primary' 
                  : 'hover:bg-primary/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              Light
              {theme === 'light' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => { setTheme('dark'); setShowMenu(false); }}
              className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors
                ${theme === 'dark' 
                  ? resolvedTheme === 'dark' 
                    ? 'bg-primary/20 text-accent' 
                    : 'bg-primary/10 text-primary' 
                  : 'hover:bg-primary/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              Dark
              {theme === 'dark' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => { setTheme('system'); setShowMenu(false); }}
              className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors
                ${theme === 'system' 
                  ? resolvedTheme === 'dark' 
                    ? 'bg-primary/20 text-accent' 
                    : 'bg-primary/10 text-primary' 
                  : 'hover:bg-primary/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              System
              {theme === 'system' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
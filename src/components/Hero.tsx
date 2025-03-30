'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Theme-based class variables
  const sectionBg = theme === 'dark' 
    ? 'bg-gradient-to-b from-dark to-primary/40' 
    : 'bg-gradient-to-b from-blue-50 to-blue-100';
  
  const headingText = theme === 'dark' ? 'text-white' : 'text-dark';
  const subtitleText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const descriptionText = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const bubblesBg = theme === 'dark' ? 'bg-accent/10' : 'bg-primary/5';
  const scrollArrowClass = theme === 'dark' ? 'text-white/80' : 'text-dark/80';

  return (
    <section className={`min-h-screen flex items-center justify-center ${sectionBg} overflow-hidden relative`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${bubblesBg} rounded-full`}
            initial={{ 
              width: Math.random() * 100 + 50, 
              height: Math.random() * 100 + 50,
              x: Math.random() * windowSize.width, 
              y: Math.random() * windowSize.height,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{
              y: [null, "-100vh"],
              opacity: [null, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 mx-auto md:mx-0"
            >
              <Image
                src="/Navneeth_P.JPG"
                alt="Navneeth"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="rounded-full object-cover border-4 border-accent shadow-lg shadow-accent/30"
                priority
                {...(process.env.NODE_ENV === 'development' 
                  ? { placeholder: 'blur', blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QCBhuQAAAABJRU5ErkJggg==' } 
                  : { unoptimized: true }
                )}
              />
              <motion.div 
                className="absolute -inset-2 rounded-full border border-accent/30"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-4xl md:text-6xl font-bold ${headingText} mb-6`}
            >
              Hi, I'm <motion.span 
                className="text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Navneeth Premanand</motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`text-xl md:text-2xl ${subtitleText} mb-8 font-light`}
            >
              <span className="relative">
                <span className="absolute h-[1px] w-0 bg-accent bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                <motion.span
                  animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 0, -20] }}
                  transition={{ 
                    times: [0, 0.1, 0.9, 1],
                    duration: 3, 
                    repeat: Infinity,
                    repeatDelay: 0 
                  }}
                  className="inline-block"
                >
                  Full Stack Developer
                </motion.span>
              </span> | 
              <span className="relative ml-2">
                <motion.span
                  animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                  transition={{ 
                    times: [0, 0.1, 0.9, 1],
                    duration: 3, 
                    repeat: Infinity,
                    repeatDelay: 0,
                    delay: 1
                  }}
                  className="inline-block"
                >
                  Data Analyst
                </motion.span>
              </span> | 
              <span className="relative ml-2">
                <motion.span
                  animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                  transition={{ 
                    times: [0, 0.1, 0.9, 1],
                    duration: 3, 
                    repeat: Infinity,
                    repeatDelay: 0,
                    delay: 2
                  }}
                  className="inline-block"
                >
                  Business Analyst
                </motion.span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`text-lg ${descriptionText} max-w-2xl mb-8`}
            >
              Transforming complex business requirements into practical, data-driven solutions using modern technologies and best practices.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors shadow-md shadow-primary/20"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "easeInOut" 
          },
          opacity: { duration: 1, delay: 2 }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <a href="#about" className={`${scrollArrowClass} hover:text-primary transition-colors`}>
          <BsArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 
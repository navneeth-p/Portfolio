'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext';

const projects = [
  {
    title: "Agro Marketplace",
    description: "Agricultural digital marketplace with geolocation matching, multi-layered security, and encrypted messaging system.",
    detailedDescription: "A comprehensive platform connecting farmers directly with consumers using advanced geolocation algorithms. The system features a 10km radius smart discovery, role-based access controls, multi-factor authentication, and end-to-end encrypted messaging for secure negotiations.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Geolocation API", "Socket.io"],
    link: "#",
    features: [
      "Dynamic product discovery based on location",
      "Secure user authentication and authorization",
      "Real-time messaging and notifications",
      "Multiple transaction and payment models"
    ]
  },
  {
    title: "MinedFul Process Mining Tool",
    description: "Process mining tool using Python and Pandas to analyze datasets, discover workflows, and identify bottlenecks.",
    detailedDescription: "An analytical tool that automatically discovers business processes from event logs and transaction data. The system visualizes process flows, identifies bottlenecks, and provides recommendations for workflow optimization based on historical data patterns.",
    image: "/projects/dashboard.jpg",
    technologies: ["Python", "Pandas", "Data Analysis", "Visualization", "Process Mining", "Jupyter", "Matplotlib"],
    link: "#",
    features: [
      "Automated workflow discovery from raw data",
      "Interactive process flow visualization",
      "Bottleneck identification and analysis",
      "Performance metrics and KPI tracking"
    ]
  },
  {
    title: "Stellar Image Classification",
    description: "CNN-based system for classifying astronomical observations, achieving 90.08% accuracy with optimized architecture.",
    detailedDescription: "A deep learning system that uses convolutional neural networks to automatically classify astronomical images. The model was trained on a large dataset of stellar objects and optimized through architecture exploration, achieving 90.08% accuracy on test data.",
    image: "/projects/data-pipeline.jpg",
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Keras", "Astronomy", "Image Processing"],
    link: "#",
    features: [
      "Automated classification of stellar objects",
      "Optimized CNN architecture with 90.08% accuracy",
      "Model deployment as web application",
      "Research paper publication on findings"
    ]
  }
]

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  // Lock scroll when modal is open
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial size
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);
    }

    // Lock body scroll when modal is open
    if (selectedId !== null && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    } else if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [selectedId]);

  const bgClass = theme === 'dark' ? 'bg-dark/95' : 'bg-light/95';
  const textClass = theme === 'dark' ? 'text-light' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-dark border-accent/20' : 'bg-white border-accent/20';
  const modalBgClass = theme === 'dark' ? 'bg-dark border-accent/30' : 'bg-white border-accent/30';
  const textSubtleClass = theme === 'dark' ? 'text-light/80' : 'text-dark/80';

  return (
    <section id="projects" className={`py-20 ${bgClass} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {isClient && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent/5 rounded-lg"
            initial={{ 
              width: Math.random() * 200 + 50, 
              height: Math.random() * 200 + 50,
              x: Math.random() * windowSize.width, 
              y: Math.random() * windowSize.height,
              opacity: 0.1 + Math.random() * 0.2,
              rotate: Math.random() * 360
            }}
            animate={{
              x: [null, `${Math.random() * 100 - 50}%`],
              y: [null, `${Math.random() * 100 - 50}%`],
              rotate: Math.random() * 720 - 360
            }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
            Projects
          </h2>
          <p className={`text-lg ${textSubtleClass} max-w-2xl mx-auto`}>
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            },
            hidden: {}
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layoutId={`project-container-${index}`}
              onClick={() => setSelectedId(index)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${cardBgClass} hover:border-accent/40 rounded-lg overflow-hidden transition-all duration-300 shadow-lg shadow-accent/5 cursor-pointer`}
            >
              <motion.div layoutId={`project-image-${index}`} className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-dark to-transparent' : 'bg-gradient-to-t from-white/80 to-transparent'}`}></div>
              </motion.div>
              <motion.div layoutId={`project-content-${index}`} className="p-6">
                <motion.h3 layoutId={`project-title-${index}`} className={`text-xl font-semibold ${textClass} mb-2`}>{project.title}</motion.h3>
                <motion.p layoutId={`project-desc-${index}`} className={`${textSubtleClass} mb-4`}>{project.description}</motion.p>
                <motion.div layoutId={`project-tech-${index}`} className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedId !== null && isClient && (
          <>
            {/* Backdrop with higher z-index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 z-[100]"
              onClick={() => setSelectedId(null)}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            
            {/* Modal content with even higher z-index */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                className={`${modalBgClass} rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto shadow-2xl pointer-events-auto`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={projects[selectedId].image}
                    alt={projects[selectedId].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-dark to-transparent' : 'bg-gradient-to-t from-white/90 to-transparent'}`}></div>
                  <button 
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-dark/70 text-light hover:bg-accent hover:text-dark' : 'bg-white/70 text-dark hover:bg-accent hover:text-white'} flex items-center justify-center transition-colors duration-300 z-10`}
                    onClick={() => setSelectedId(null)}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-semibold ${textClass} mb-3`}>
                    {projects[selectedId].title}
                  </h3>
                  <p className={`${textSubtleClass} mb-6`}>
                    {projects[selectedId].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold ${textClass} mb-3`}>
                      Overview
                    </h4>
                    <p className={textSubtleClass}>
                      {projects[selectedId].detailedDescription}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold ${textClass} mb-3`}>
                      Key Features
                    </h4>
                    <ul className={`list-disc pl-5 ${textSubtleClass} space-y-1`}>
                      {projects[selectedId].features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold ${textClass} mb-3`}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedId].technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * i }}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <motion.a
                      href={projects[selectedId].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-accent text-dark px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>View Project</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 
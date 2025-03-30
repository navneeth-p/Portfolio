'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const experiences = [
  {
    role: 'Full Stack Developer - Freelance',
    company: 'Rynova Trade LLC',
    location: 'Dubai, UAE',
    period: 'Oct 2024 - Present',
    description: [
      'Architected and deployed a production-grade corporate website on AWS EC2 with custom domain configuration and SSL certification.',
      'Developed a modern React application with TypeScript, featuring responsive design and interactive product showcases.',
      'Configured email servers and implemented monitoring solutions for optimized performance.',
      'Implemented a comprehensive DevOps pipeline with automated deployments and environment management.'
    ],
    tags: ['React', 'TypeScript', 'AWS', 'DevOps']
  },
  {
    role: 'Freelance Developer',
    company: 'Agro Marketplace',
    location: 'Kozhikode',
    period: 'Mar 2025 - Present',
    description: [
      'Designed comprehensive technical architecture for agricultural digital marketplace using microservices architecture.',
      'Developed advanced geolocation matching algorithm with 10km radius calculation and dynamic product discovery.',
      'Implemented multi-layered security system including role-based access control and multi-factor authentication.',
      'Created scalable communication platform with encrypted messaging and negotiation workflows, supporting multiple transaction models.'
    ],
    tags: ['Microservices', 'Geolocation', 'Security', 'Full Stack']
  },
  {
    role: 'Business Process Automation - Intern',
    company: 'ACZ Global Pvt Ltd',
    location: 'Bengaluru',
    period: 'Feb 2024 - Apr 2024',
    description: [
      'Led business process documentation initiatives in collaboration with a 5-member team.',
      'Developed detailed System Requirement Specifications (SRS) focusing on data flow and analysis requirements.',
      'Mapped and analyzed existing workflows to identify optimization opportunities.',
      'Created end-to-end business flow documentation aligned with predictive model development goals.'
    ],
    tags: ['Business Analysis', 'Process Optimization', 'Documentation', 'Team Collaboration']
  },
  {
    role: 'AI Engineering - Intern',
    company: 'Open Weaver',
    location: 'Bengaluru',
    period: 'Jun 2023',
    description: [
      'Implemented and evaluated various AI/ML models through hands-on applications.',
      'Created detailed analytical reports and visualizations to communicate findings.',
      'Successfully completed complex project deliverables focusing on artificial intelligence implementations.'
    ],
    tags: ['AI/ML', 'Data Visualization', 'Analytics']
  },
  {
    role: 'Full Stack Developer - Freelance',
    company: 'ACZ Global Pvt Ltd',
    location: 'Bengaluru',
    period: 'Sep 2021 - Jul 2022',
    description: [
      'Designed and developed an ERP/HRMS solution serving 40+ active users using MERN Stack.',
      'Implemented AWS infrastructure utilizing EC2, Route53, and IAM services.',
      'Spearheaded a digital transformation initiative that achieved full paperless documentation.',
      'Implemented continuous system monitoring and performance optimization strategies, ensuring high reliability and operational efficiency.'
    ],
    tags: ['MERN Stack', 'AWS', 'Digital Transformation', 'ERP/HRMS']
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);
  const { theme } = useTheme();
  
  // Theme-based styling
  const textHeading = theme === 'dark' ? 'text-light' : 'text-dark';
  const textSubtle = theme === 'dark' ? 'text-light/80' : 'text-dark/80';
  const textMuted = theme === 'dark' ? 'text-light/60' : 'text-dark/60';
  const cardBg = theme === 'dark' ? 'bg-dark/80' : 'bg-white';
  const cardBorder = theme === 'dark' ? 'border-accent/20' : 'border-primary/20';
  const cardShadow = theme === 'dark' ? 'shadow-accent/5' : 'shadow-primary/5';
  const timelineBg = theme === 'dark' ? 'bg-accent/30' : 'bg-primary/30';
  const dotBg = theme === 'dark' ? 'bg-accent/20 border-accent' : 'bg-primary/20 border-primary';
  const dotIconColor = theme === 'dark' ? 'text-accent' : 'text-primary';
  const tagBg = theme === 'dark' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary';
  const sectionBg = theme === 'dark' ? 'bg-primary/5' : 'bg-blue-50/50';

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textHeading} mb-4`}>Professional Experience</h2>
          <p className={`text-lg ${textHeading} max-w-2xl mx-auto`}>
            My career journey across various roles and projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative before:absolute before:left-4 md:before:left-1/2 before:-ml-0.5 before:h-full before:w-0.5 before:${timelineBg}`}>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative pl-10 md:pl-0 mb-10 ${
                  index % 2 === 0 ? 'md:ml-auto md:pr-[50%] md:pl-8' : 'md:mr-auto md:pl-[50%] md:pr-8'
                }`}
              >
                <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 mt-1.5">
                  <div className={`w-8 h-8 rounded-full ${dotBg} border-2 flex items-center justify-center`}>
                    <FaBriefcase className={`${dotIconColor} text-sm`} />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${cardBg} p-5 rounded-lg border ${cardBorder} shadow-lg ${cardShadow}`}
                >
                  <div 
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div>
                      <h3 className={`text-xl font-semibold ${textHeading}`}>{experience.role}</h3>
                      <div className={`flex items-center ${theme === 'dark' ? 'text-accent/80' : 'text-primary/80'} mt-1`}>
                        <FaBuilding className="mr-2 text-sm" />
                        <span>{experience.company}, {experience.location}</span>
                      </div>
                      <div className={`flex items-center ${textMuted} mt-1`}>
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    {expandedId === index ? (
                      <FaChevronUp className={theme === 'dark' ? 'text-accent mt-1.5' : 'text-primary mt-1.5'} />
                    ) : (
                      <FaChevronDown className={theme === 'dark' ? 'text-accent mt-1.5' : 'text-primary mt-1.5'} />
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedId === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2">
                          {experience.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className={`${textSubtle} flex`}
                            >
                              <span className={theme === 'dark' ? 'text-accent mr-2' : 'text-primary mr-2'}>•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                              className={`px-3 py-1 ${tagBg} rounded-full text-xs`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
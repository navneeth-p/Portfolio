'use client';

import { FaCode, FaDatabase, FaChartLine, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const skills = [
  {
    title: 'Full Stack Development',
    icon: <FaCode className="w-8 h-8" />,
    description: 'Building scalable web applications using React, Node.js, and MERN Stack. Proficient in TypeScript, RESTful APIs, and modern front-end development practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Express']
  },
  {
    title: 'Data Engineering',
    icon: <FaDatabase className="w-8 h-8" />,
    description: 'Skilled in building ETL pipelines, data warehousing, and implementing microservices architecture. Experienced with AWS (EC2, Route53, IAM) and data processing tools.',
    technologies: ['Python', 'SQL', 'AWS', 'ETL', 'Data Warehousing', 'Microservices']
  },
  {
    title: 'Business Analysis',
    icon: <FaChartBar className="w-8 h-8" />,
    description: 'Translating complex business requirements into technical solutions. Expertise in requirements engineering, process mapping, and strategic planning.',
    technologies: ['Requirements Analysis', 'Process Mapping', 'Strategic Planning', 'SRS Documentation', 'Workflow Optimization']
  },
  {
    title: 'Machine Learning & AI',
    icon: <FaChartLine className="w-8 h-8" />,
    description: 'Proficient in implementing AI/ML models, feature engineering, and model deployment. Experienced with TensorFlow, Keras, and deep learning architectures.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Deep Learning', 'Model Deployment']
  }
];

const About = () => {
  const { theme } = useTheme();
  
  // Theme-based styling
  const textHeading = theme === 'dark' ? 'text-light' : 'text-dark';
  const textBody = theme === 'dark' ? 'text-light/80' : 'text-dark/80';
  const cardBg = theme === 'dark' 
    ? 'bg-primary/10 border border-accent/20 hover:border-accent/40' 
    : 'bg-white border border-primary/20 hover:border-primary/40 shadow-md hover:shadow-lg';
  const iconColor = theme === 'dark' ? 'text-accent' : 'text-primary';
  const tagBg = theme === 'dark' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textHeading} mb-4`}>
            What I Do
          </h2>
          <p className={`text-lg ${textBody} max-w-2xl mx-auto`}>
            I combine technical expertise with business acumen to deliver innovative solutions
            that drive business growth and efficiency.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`${cardBg} p-6 rounded-lg transition-all duration-300`}
            >
              <div className={`${iconColor} mb-4`}>{skill.icon}</div>
              <h3 className={`text-xl font-semibold ${textHeading} mb-3`}>{skill.title}</h3>
              <p className={`${textBody} mb-4`}>{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 ${tagBg} rounded-full text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
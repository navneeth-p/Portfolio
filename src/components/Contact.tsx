'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub className="w-5 h-5" />,
    url: '#',
    color: 'hover:bg-[#333] hover:border-[#333]'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-5 h-5" />,
    url: '#',
    color: 'hover:bg-[#0077b5] hover:border-[#0077b5]'
  }
];

const Contact = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    loading: false,
    error: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Theme-based styling
  const textHeading = theme === 'dark' ? 'text-light' : 'text-dark';
  const textBody = theme === 'dark' ? 'text-light/80' : 'text-dark/80';
  const inputBg = theme === 'dark' ? 'bg-dark' : 'bg-white';
  const inputBorder = theme === 'dark' ? 'border-accent/20' : 'border-primary/20';
  const inputText = theme === 'dark' ? 'text-light' : 'text-dark';
  const labelText = theme === 'dark' ? 'text-light' : 'text-dark';
  const focusedColor = theme === 'dark' ? 'text-accent' : 'text-primary';
  const formBg = theme === 'dark' ? 'bg-accent/10 border-accent/20' : 'bg-primary/10 border-primary/20';
  const iconBg = theme === 'dark' ? 'bg-accent/20' : 'bg-primary/20';
  const iconColor = theme === 'dark' ? 'text-accent' : 'text-primary';
  const sectionBg = theme === 'dark' ? 'bg-dark/90' : 'bg-light/90';
  const submitBtnBg = theme === 'dark' ? 'bg-accent text-dark' : 'bg-primary text-white';
  const submitBtnHover = theme === 'dark' ? 'hover:bg-accent/90' : 'hover:bg-primary/90';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true, 
        loading: false,
        name: '',
        email: '',
        message: ''
      }));
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className={`py-20 ${sectionBg} relative overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textHeading} mb-4`}>
            Get In Touch
          </h2>
          <p className={`text-lg ${textBody} max-w-2xl mx-auto`}>
            Feel free to reach out for any inquiries, collaboration opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-semibold ${textHeading} mb-6`}>
              Send Me a Message
            </h3>
            {formState.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-lg ${formBg} border text-center`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, 0] }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`w-16 h-16 mx-auto ${iconBg} rounded-full flex items-center justify-center mb-4`}
                >
                  <FaPaperPlane className={`${iconColor} w-6 h-6`} />
                </motion.div>
                <h4 className={`text-xl font-semibold ${textHeading} mb-2`}>Message Sent!</h4>
                <p className={textBody}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 ${iconColor} hover:opacity-80`}
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block ${labelText} mb-2 transition-all duration-300 ${
                      focusedField === 'name' || formState.name ? focusedColor : labelText
                    }`}
                  >
                    Name
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'name' ? 
                        (theme === 'dark' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(37, 99, 235, 0.6)') : 
                        (theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.2)')
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none ${inputText}`}
                      placeholder="Your Name"
                      required
                    />
                    <motion.span 
                      initial={{ width: '0%' }}
                      animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-0.5 ${theme === 'dark' ? 'bg-accent/80' : 'bg-primary/80'}`} 
                    />
                  </motion.div>
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block ${labelText} mb-2 transition-all duration-300 ${
                      focusedField === 'email' || formState.email ? focusedColor : labelText
                    }`}
                  >
                    Email
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'email' ? 
                        (theme === 'dark' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(37, 99, 235, 0.6)') : 
                        (theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.2)')
                    }}
                    className="relative"
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none ${inputText}`}
                      placeholder="Your Email"
                      required
                    />
                    <motion.span 
                      initial={{ width: '0%' }}
                      animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-0.5 ${theme === 'dark' ? 'bg-accent/80' : 'bg-primary/80'}`} 
                    />
                  </motion.div>
                </div>
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block ${labelText} mb-2 transition-all duration-300 ${
                      focusedField === 'message' || formState.message ? focusedColor : labelText
                    }`}
                  >
                    Message
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'message' ? 
                        (theme === 'dark' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(37, 99, 235, 0.6)') : 
                        (theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.2)')
                    }}
                    className="relative"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:outline-none ${inputText} resize-none`}
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <motion.span 
                      initial={{ width: '0%' }}
                      animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-0.5 ${theme === 'dark' ? 'bg-accent/80' : 'bg-primary/80'}`} 
                    />
                  </motion.div>
                </div>
                <motion.button
                  type="submit"
                  disabled={formState.loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    ${submitBtnBg} px-6 py-3 rounded-lg font-semibold 
                    ${submitBtnHover} transition-colors w-full relative
                    flex items-center justify-center
                    ${formState.loading ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                >
                  {formState.loading ? (
                    <motion.div
                      className={`w-6 h-6 border-2 ${theme === 'dark' ? 'border-dark border-t-transparent' : 'border-white border-t-transparent'} rounded-full`}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-semibold ${textHeading} mb-6`}>
              Contact Information
            </h3>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center shrink-0`}>
                  <FaEnvelope className={theme === 'dark' ? 'text-accent' : 'text-primary'} />
                </div>
                <div>
                  <h4 className={`font-medium ${textHeading} mb-1`}>Email</h4>
                  <a href="mailto:your.email@example.com" className={`${textBody} hover:${focusedColor}`}>
                    kannan.nambiar9@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center shrink-0`}>
                  <FaPhone className={theme === 'dark' ? 'text-accent' : 'text-primary'} />
                </div>
                <div>
                  <h4 className={`font-medium ${textHeading} mb-1`}>Phone</h4>
                  <a href="tel:+1234567890" className={`${textBody} hover:${focusedColor}`}>
                    +91 83104 69810 | +971 54 403 4810
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center shrink-0`}>
                  <FaMapMarkerAlt className={theme === 'dark' ? 'text-accent' : 'text-primary'} />
                </div>
                <div>
                  <h4 className={`font-medium ${textHeading} mb-1`}>Location</h4>
                  <p className={textBody}>
                    Dubai, UAE
                  </p>
                </div>
              </motion.div>
            </div>
            
            <h4 className={`text-xl font-semibold ${textHeading} mt-10 mb-4`}>
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border ${inputBorder} ${inputText} ${link.color} hover:text-white transition-all duration-300`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
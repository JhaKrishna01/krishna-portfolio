import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaChevronUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/JhaKrishna01',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/krishna-nand-jha/',
      label: 'LinkedIn'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jha.krishna1357@gmail.com',
      label: 'Email'
    }
  ];

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 focus:outline-none"
          aria-label="Back to top"
        >
          <FaChevronUp size={20} />
        </button>
      )}
      {/* Footer Content */}
      <footer className="pt-12 pb-6 px-4 md:px-0 bg-gray-200 text-gray-900 dark:bg-[#10101a] dark:text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-indigo-300 font-bold text-lg">
              <a href="https://jhakrishna01.github.io/krishna-portfolio" className="focus:outline-none" aria-label="Go to homepage">
                Krishna Nand Jha
              </a>
            </div>
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              © 2024 Krishna Nand Jha. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1" />
              using React & Framer Motion
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Available for opportunities in AI/ML and Full-stack Development
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 
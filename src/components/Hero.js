import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'AI/ML Engineer',
    'Full-Stack Developer', 
    'Deep Learning Specialist',
    'Computer Vision Expert'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setCurrentText(
        isDeleting 
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, roles]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/JhaKrishna01',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/krishna-nand-jha/',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jha.krishna1357@gmail.com',
      label: 'Email',
      color: '#ea4335'
    },
    {
      icon: FaPhone,
      href: 'tel:+917794058579',
      label: 'Phone',
      color: '#25d366'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-100 text-black dark:bg-[#18182a] dark:text-white overflow-hidden">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-4 py-24 md:py-32">
        <motion.div
          className="w-full text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Krishna Nand Jha
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-lg md:text-2xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gray-300">I'm a</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold min-w-[180px] inline-block">
              {currentText}
              <span className="text-indigo-400 animate-pulse">|</span>
            </span>
          </motion.div>
          <motion.p
            className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Computer Science undergrad specializing in <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text font-semibold">AI/ML</span> with hands-on experience in <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text font-semibold">full-stack development</span> and <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text font-semibold">deep learning</span>.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex gap-5 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-white text-2xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-110 focus:outline-none"
              title={link.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-2 rounded-lg font-semibold border-2 border-indigo-500 text-indigo-300 bg-transparent hover:bg-indigo-500 hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg font-semibold border-2 border-purple-500 text-purple-300 bg-transparent hover:bg-purple-500 hover:text-white flex items-center gap-2 transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={16} /> Resume
          </motion.a>
        </motion.div>
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex flex-col items-center shadow-lg min-w-[100px]">
            <span className="text-2xl font-bold text-indigo-400">10+</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Projects</span>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex flex-col items-center shadow-lg min-w-[100px]">
            <span className="text-2xl font-bold text-indigo-400">3+</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex flex-col items-center shadow-lg min-w-[100px]">
            <span className="text-2xl font-bold text-indigo-400">5+</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Technologies</span>
          </div>
        </motion.div>
      </div>
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-1 opacity-80 cursor-pointer hover:opacity-100 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-2xl flex items-start justify-center relative">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
        <span className="text-xs text-white/80 tracking-widest uppercase">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero; 
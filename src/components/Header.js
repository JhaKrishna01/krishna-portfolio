import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    // On mount, respect saved theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.navbar-container')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#10101a]/95 shadow-lg' : 'bg-transparent'} backdrop-blur-md`}> 
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6 md:px-8">
        <motion.div 
          className="text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text select-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://jhakrishna01.github.io/krishna-portfolio" className="focus:outline-none" aria-label="Go to homepage">
            Krishna Jha
          </a>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-purple-500 focus:outline-none py-1 px-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              tabIndex={0}
              aria-label={`Go to ${item.name} section`}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-xl p-2 rounded-lg bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 hover:bg-indigo-500/30 transition focus:outline-none"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-300" />}
        </button>
        {/* Download Resume Button */}
        <a
          href="/Krishna_Jha_Resume_AI&ML_FullStack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 flex items-center gap-2 text-sm"
        >
          <FaDownload /> Resume
        </a>
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 rounded-lg bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 hover:bg-indigo-500/30 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="bg-[#18182a] border border-white/10 rounded-2xl p-8 flex flex-col gap-4 min-w-[220px] w-[90%] max-w-xs shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white text-lg font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 
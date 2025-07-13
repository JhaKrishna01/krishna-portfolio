import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
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
    },
    {
      icon: FaPhone,
      href: 'tel:+917794058579',
      label: 'Phone'
    }
  ];

  return (
    <section id="home" className="hero animated-bg">
      <div className="container hero-content section-animate">
        <motion.h1
          className="hero-title gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Krishna Nand Jha
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Computer Science undergrad specializing in <span className="gradient-text">AI/ML</span> with hands-on experience in <span className="gradient-text">full-stack development</span> and <span className="gradient-text">deep learning</span>
        </motion.p>
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </motion.div>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </motion.div>
      </div>
      {/* Animated Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-dot"></div>
      </div>
    </section>
  );
};

export default Hero; 
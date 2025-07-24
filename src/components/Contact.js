import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("2Bfl4olA0wvlIcdY7");
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jha.krishna1357@gmail.com',
      href: 'mailto:jha.krishna1357@gmail.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'krishna-nand-jha',
      href: 'https://www.linkedin.com/in/krishna-nand-jha/'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'JhaKrishna01',
      href: 'https://github.com/JhaKrishna01'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Amaravati, Andhra Pradesh, India',
      href: null
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setToastMsg('Please fill in all fields.');
      setShowToast(true);
      return;
    }
    if (!validateEmail(formData.email)) {
      setToastMsg('Please enter a valid email address.');
      setShowToast(true);
      return;
    }
    
    // Debug: Check environment variables
    console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    
    setIsSubmitting(true);
    setShowToast(false);
    
    try {
      const result = await emailjs.send(
        "service_6gykqf5",
        "template_4nc0vuf",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'jha.krishna1357@gmail.com'
        },
        "2Bfl4olA0wvlIcdY7"
      );
      
      if (result.status === 200) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setToastMsg('Thank you for your message! I will get back to you soon.');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setToastMsg('Sorry, there was an error sending your message. Please try again or contact me directly.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-100 text-gray-900 dark:bg-[#23233a] dark:text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <div className="relative">
          <AnimatePresence>
            {showToast && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 z-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                onAnimationComplete={() => setTimeout(() => setShowToast(false), 2500)}
              >
                {toastMsg}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always interested in new opportunities, collaborations, or just a friendly chat about technology. 
                Feel free to reach out through any of the channels below or send me a message directly.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-indigo-200 hover:text-pink-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-indigo-200">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Additional Info */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Currently Available For</h4>
                <ul className="space-y-2 text-indigo-200">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    Full-time opportunities in AI/ML and Full-stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    Internship positions in Data Science and Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    Collaborative projects and hackathons
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-medium text-gray-900 dark:text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium text-gray-900 dark:text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-medium text-gray-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-medium text-gray-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:border-pink-500 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
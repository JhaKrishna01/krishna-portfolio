import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18182a] via-[#23233a] to-[#10101a] dark:bg-[#10101a]">
    <motion.div
      className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-12 shadow-2xl flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: [ -10, 10, -10 ] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-6"
      >
        <FaExclamationTriangle className="text-5xl text-pink-500" />
      </motion.div>
      <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">404 - Page Not Found</h1>
      <p className="text-indigo-200 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200"
      >
        <FaHome /> Go Home
      </Link>
    </motion.div>
  </section>
);

export default NotFound; 
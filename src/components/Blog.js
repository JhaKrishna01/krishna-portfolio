import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Building a Voice-Activated AI Assistant',
    date: 'May 2024',
    summary: 'A deep dive into the architecture and challenges of creating a hands-free AI assistant using modern ML models.',
    link: '#'
  },
  {
    title: 'Satellite Imagery for Disaster Response',
    date: 'April 2024',
    summary: 'How deep learning and computer vision can help identify hazards after natural disasters using satellite data.',
    link: '#'
  },
  {
    title: 'From Hackathons to Real-World Impact',
    date: 'March 2024',
    summary: 'Lessons learned from competitive coding events and how to turn prototypes into production-ready solutions.',
    link: '#'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
  })
};

const Blog = () => (
  <section id="blog" className="section bg-gray-100 text-gray-900 dark:bg-[#23233a] dark:text-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Blog & Articles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <motion.div
            key={a.title}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-8 shadow-2xl flex flex-col hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.07 }}
          >
            <div className="mb-2 text-indigo-300 text-xs font-semibold">{a.date}</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{a.title}</h3>
            <p className="text-indigo-200 mb-4">{a.summary}</p>
            <a href={a.link} className="mt-auto inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200">Read More</a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog; 
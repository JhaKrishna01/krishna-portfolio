import React, { useState } from 'react';
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

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Why did the developer go broke? Because he used up all his cache!",
  "Why do Java developers wear glasses? Because they don't see sharp.",
  "To understand what recursion is, you must first understand recursion.",
  "There are only 10 types of people in the world: those who understand binary and those who don't.",
  "Why was the JavaScript developer sad? Because he didn't 'null' his feelings.",
  "How many programmers does it take to change a light bulb? None. It's a hardware problem!",
  "Why did the computer show up at work late? It had a hard drive!",
  "Why do Python programmers wear glasses? Because they can't C.",
  "Why did the function return early? Because it had a date with a callback!",
  "Why did the coder get kicked out of school? Because he kept taking classes!",
  "Why did the computer get cold? Because it left its Windows open!",
  "Why did the developer go broke? Because he used up all his cache!",
  "Why do programmers hate nature? It has too many bugs.",
  "Why did the developer quit his job? He didn't get arrays.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
  "Why was the cell phone wearing glasses? Because it lost its contacts!"
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
  })
};

const Blog = () => {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [randomJoke, setRandomJoke] = useState('');

  const handleReadMore = () => {
    setShowToast(true);
    setShowModal(true);
    setRandomJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
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
              <button
                onClick={handleReadMore}
                className="mt-auto inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
            Blog coming soon! Stay tuned for updates.
          </div>
        )}
        {/* Modal with Under Construction and Joke */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-[#23233a] rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative">
              <button
                className="absolute top-3 right-4 text-xl text-indigo-300 hover:text-pink-400"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="text-5xl mb-4 animate-bounce">🚧</div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Under Construction</h3>
              <p className="text-indigo-200 mb-4">We're working hard to bring you awesome blog content. Check back soon!</p>
              <div className="bg-white/10 rounded-lg p-4 text-indigo-100 text-base italic mb-2">
                <span className="font-semibold">Easter Egg:</span> {randomJoke}
              </div>
              <div className="mt-4 text-xs text-gray-400">(You found a tech joke! 🥚)</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 
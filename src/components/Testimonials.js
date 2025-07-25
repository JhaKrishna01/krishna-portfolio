import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Shailaj',
    title: 'lead developer,Prayana Electric',
    text: 'Krishna is a highly skilled engineer with a passion for learning and delivering quality work. His AI/ML expertise and teamwork made a real impact on our project.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Dr. Sudha Ellison Mathe',
    title: 'Founder & CEO - PrayanaElectric Pvt. Ltd.',
    text: 'A creative problem solver and a quick learner. Krishna consistently exceeded expectations in both technical and collaborative tasks.',
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    name: 'Nandhan Golla',
    title: 'Project Lead, Hackathon',
    text: 'His leadership and technical skills were crucial to our hackathon win. Krishna brings energy and innovation to every team.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
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

const Testimonials = () => (
  <section id="testimonials" className="section bg-gray-100 text-gray-900 dark:bg-[#18182a] dark:text-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-8 shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.07 }}
          >
            <p className="text-indigo-200 mb-4">"{t.text}"</p>
            <div className="mt-auto">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{t.name}</h4>
              <span className="text-sm text-indigo-300">{t.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 
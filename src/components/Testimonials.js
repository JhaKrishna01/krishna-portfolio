import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amit Sharma',
    title: 'Senior Developer, TechCorp',
    text: 'Krishna is a highly skilled engineer with a passion for learning and delivering quality work. His AI/ML expertise and teamwork made a real impact on our project.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Priya Singh',
    title: 'Mentor, VIT-AP',
    text: 'A creative problem solver and a quick learner. Krishna consistently exceeded expectations in both technical and collaborative tasks.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Rahul Verma',
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
  <section id="testimonials" className="py-20 bg-gradient-to-br from-[#18182a] via-[#23233a] to-[#10101a] dark:bg-[#10101a]">
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
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-indigo-400 object-cover" />
            <p className="text-indigo-200 mb-4">"{t.text}"</p>
            <div className="mt-auto">
              <h4 className="text-lg font-bold text-white">{t.name}</h4>
              <span className="text-sm text-indigo-300">{t.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 
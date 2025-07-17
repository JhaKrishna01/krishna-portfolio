import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "Speech-Activated Machine (SAM)",
      subtitle: "OSC Hackathon Project",
      date: "April 2025",
      description: "A hands-free AI voice assistant using speech recognition and Meta's Segment Anything Model (SAM), enabling seamless interaction through voice commands.",
      achievements: [
        "Engineered a hands-free AI voice assistant using speech recognition and Meta's Segment Anything Model (SAM)",
        "Designed a futuristic, accessible UI in Figma and deployed a working prototype",
        "Enhanced user accessibility through voice-controlled interactions"
      ],
      technologies: ["Python", "Speech Recognition", "Meta SAM", "Figma", "AI/ML"],
      category: "AI/ML",
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Post-Hurricane Danger Detection",
      subtitle: "Using Satellite Imagery",
      date: "Jan 2025 - Apr 2025",
      description: "A deep learning pipeline to identify hazardous zones from satellite images following hurricanes, implementing multiple CNN architectures for improved accuracy.",
      achievements: [
        "Developed a deep learning pipeline to identify hazardous zones from satellite images",
        "Implemented and evaluated three CNN architectures: base CNN, L2 regularized CNN, and hybrid CNN",
        "Achieved notable improvements in performance and generalization across test datasets"
      ],
      technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Computer Vision", "Satellite Imagery"],
      category: "Deep Learning",
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Collect unique categories and technologies
  const categories = Array.from(new Set(projects.map(p => p.category)));
  const technologies = Array.from(new Set(projects.flatMap(p => p.technologies)));
  const filters = ['All', ...categories, ...technologies];

  // Filter logic
  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p =>
        p.category === selectedFilter || p.technologies.includes(selectedFilter)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section bg-gray-100 text-black dark:bg-[#10101a] dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200 text-sm
                ${selectedFilter === filter
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-500 shadow-md'
                  : 'bg-white/10 text-indigo-200 border-indigo-500/30 hover:bg-indigo-500/20 hover:text-white'}
              `}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 backdrop-blur-lg flex flex-col md:flex-row hover:shadow-indigo-500/30 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-purple-700/80 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-6 transition-all duration-300">
                  <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-semibold text-sm mb-4 shadow-lg backdrop-blur-md">
                    {project.category}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEye size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between p-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <FaCalendarAlt size={14} /> {project.date}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-1">
                    {project.title}
                  </h3>
                  <h4 className="text-lg text-purple-300 font-semibold mb-2">{project.subtitle}</h4>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="mb-3">
                    <h5 className="text-base font-semibold text-white flex items-center gap-2 mb-1"><FaCode size={16} /> Key Achievements</h5>
                    <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h5 className="text-base font-semibold text-white mb-1">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium shadow-sm" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg font-semibold border-2 border-indigo-500 text-indigo-300 bg-transparent hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={16} /> View Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-10 shadow-2xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new projects to expand my skills and create innovative solutions. 
              Check out my GitHub for more of my work!
            </p>
            <motion.a
              href="https://github.com/JhaKrishna01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={16} /> View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
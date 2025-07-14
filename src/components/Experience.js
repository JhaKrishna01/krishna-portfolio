import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      company: "Prayana Electric",
      position: "Full Stack Web Development Intern",
      location: "VIT-AP, Amaravati",
      duration: "Nov 2024 – Apr 2025",
      description: "Developed responsive web applications and collaborated with cross-functional teams to build innovative solutions.",
      achievements: [
        "Developed responsive front-end interfaces using React.js, improving user engagement",
        "Integrated back-end APIs with Node.js and Express, reducing latency by 20%",
        "Collaborated with cross-functional teams to build a dashboard for vehicle tracking"
      ],
      technologies: ["React.js", "Node.js", "Express", "JavaScript", "HTML/CSS", "Git"],
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#18182a] via-[#23233a] to-[#10101a] dark:bg-[#10101a]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              ref={ref}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
              <div className="relative pl-20 pb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full border-4 border-[#18182a]"></div>
                {/* Experience Card */}
                <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-xs text-indigo-300 font-medium">
                          {experience.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-400 mt-4 md:mt-0">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt size={14} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-4">Key Achievements</h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 + achievementIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 shadow-sm"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Future Opportunities */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-10 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                I'm actively seeking roles where I can apply my skills in AI/ML and full-stack development 
                to build scalable, intelligent systems that solve real-world problems.
              </p>
              <motion.a
                href="#contact"
                className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FaExternalLinkAlt size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Specialization in AI & ML",
    university: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh",
    graduation: "2026"
  };

  const highlights = [
    "Delivered real-world solutions in internships and hackathons",
    "Built voice-controlled assistant and satellite-based hazard detection system",
    "Adept in Python, React, Node.js, and AWS",
    "Seeking roles to build scalable, intelligent systems"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Computer Science Student & AI/ML Enthusiast
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I'm a passionate Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. 
              My journey in technology has been driven by a desire to create intelligent systems that solve real-world problems.
            </p>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Through my internships and hackathon experiences, I've developed a strong foundation in full-stack development 
              and deep learning. I'm particularly interested in building scalable, intelligent systems that can make a 
              meaningful impact on people's lives.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card">
              <h4 className="text-2xl font-bold mb-6 gradient-text">Education</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-white mb-2">
                      {education.degree}
                    </h5>
                    <p className="text-purple-400 font-medium mb-2">
                      {education.specialization}
                    </p>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={14} />
                        <span>{education.university}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={14} />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt size={14} />
                        <span>Graduation: {education.graduation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4">Areas of Interest</h5>
                <div className="flex flex-wrap gap-2">
                  {['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Data Analytics'].map((area, index) => (
                    <motion.span
                      key={area}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
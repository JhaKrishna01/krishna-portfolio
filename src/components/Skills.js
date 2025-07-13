import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaJs, FaHtml5, FaDatabase, 
  FaReact, FaNodeJs, FaDocker, FaGithub, FaAws 
} from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, level: 90 },
        { name: "JavaScript", icon: FaJs, level: 85 },
        { name: "HTML/CSS", icon: FaHtml5, level: 80 },
        { name: "R", icon: FaDatabase, level: 70 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "NumPy", icon: SiNumpy, level: 85 },
        { name: "Pandas", icon: SiPandas, level: 85 },
        { name: "Scikit-Learn", icon: SiScikitlearn, level: 80 },
        { name: "TensorFlow", icon: SiTensorflow, level: 75 },
        { name: "OpenCV", icon: SiOpencv, level: 70 },
        { name: "React", icon: FaReact, level: 80 },
        { name: "Node.js", icon: FaNodeJs, level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", icon: FaGithub, level: 85 },
        { name: "Docker", icon: FaDocker, level: 70 },
        { name: "AWS", icon: FaAws, level: 65 },
        { name: "VS Code", icon: FaJs, level: 90 },
        { name: "Google Colab", icon: FaPython, level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Self-learning",
    "Presentation",
    "Adaptability",
    "Critical Thinking",
    "Communication"
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management System",
    "Introduction to AI",
    "Machine Learning",
    "Deep Learning",
    "NLP"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">Technical Skills</h3>
            
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <skill.icon size={20} className="text-purple-400" />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Coursework */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Soft Skills */}
              <div className="card">
                <h4 className="text-xl font-bold mb-6 gradient-text">Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-gray-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="card">
                <h4 className="text-xl font-bold mb-6 gradient-text">Relevant Coursework</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="card">
                <h4 className="text-xl font-bold mb-6 gradient-text">Areas of Interest</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Data Science & Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Cloud Computing & DevOps</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
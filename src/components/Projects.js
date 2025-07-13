import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`project-content ${index % 2 === 1 ? 'reverse' : ''}`}>
                {/* Project Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="project-category">
                    {project.category}
                  </div>
                </div>
                {/* Project Details */}
                <div className="project-details">
                  <div className="project-date">
                    <FaCalendarAlt size={14} /> {project.date}
                  </div>
                  <h3 className="project-title gradient-text">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-achievements">
                    <h5><FaCode size={16} /> Key Achievements</h5>
                    <ul>
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-tags">
                    <h5>Technologies Used</h5>
                    <div className="project-tags-list">
                      {project.technologies.map((tech, i) => (
                        <span className="project-tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <FaGithub size={16} /> View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new projects to expand my skills and create innovative solutions. 
              Check out my GitHub for more of my work!
            </p>
            <a
              href="https://github.com/JhaKrishna01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub size={16} /> View All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
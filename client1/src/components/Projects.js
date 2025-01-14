import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    
    {
      title: "My Portfolio",
      description: "A full-stack e-commerce platform built with MERN stack. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/images/project1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-site.com"
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with MERN stack. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/images/project2.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-site.com"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with features like private messaging, group chats, and file sharing.",
      image: "/images/chat-app.jpg",
      technologies: ["Socket.io", "React", "Node.js", "Express"],
      githubLink: "https://github.com/yourusername/chat-app",
      liveLink: "https://your-chat-app.com"
    },
    // Add your other projects here...
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of my recent works
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image Container */}
              <div className="relative group h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 right-3 flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FaGithub className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
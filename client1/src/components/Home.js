import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rahul jangir</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A Full-Stack Developer passionate about creating interactive applications 
            and experiences on the web.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
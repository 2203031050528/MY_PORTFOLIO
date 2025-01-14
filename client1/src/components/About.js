import React from 'react';
import { motion } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Rahul-resume.pdf';
    link.download = 'Rahul-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    'JavaScript', 'React.js', 'Node.js', 'Express.js', 
    'MongoDB', 'HTML', 'CSS', 'Tailwind CSS',
    'Git', 'REST APIs', 'SQL', 'Python'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Image with improved shadow and hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-2/3 space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                About Me
              </h1>
              <div className="w-20 h-1 bg-blue-600 rounded-full" />
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm a passionate Full Stack Developer with a keen interest in building 
                digital solutions that make a difference. I specialize in creating responsive 
                web applications using modern technologies and best practices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With a strong foundation in both frontend and backend development, 
                I enjoy tackling complex problems and turning them into simple, elegant solutions.
              </p>
            </div>

            <motion.button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* Skills Section with improved animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md 
                         hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full" />
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Bachelor's in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Parul University • 2022-2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
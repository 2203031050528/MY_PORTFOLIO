import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL'],
    tools: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack', 'VS Code']
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              variants={skillVariants}
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 capitalize">
                {category}
              </h3>
              <div className="space-y-3">
                {skillList.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        className="h-full bg-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 40 + 60}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
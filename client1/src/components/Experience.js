import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: 'Led development of multiple web applications using React and Node.js.',
      achievements: [
        'Improved application performance by 40%',
        'Implemented CI/CD pipeline',
        'Mentored junior developers'
      ]
    },
    // Add more experiences...
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
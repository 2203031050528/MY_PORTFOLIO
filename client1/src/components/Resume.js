import React from 'react';
import { motion } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/path/to/your/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Download My Resume
          </h2>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 
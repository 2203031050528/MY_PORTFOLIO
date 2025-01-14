import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Project Manager',
      company: 'Tech Corp',
      text: 'Excellent developer with strong problem-solving skills.',
      image: 'path/to/image.jpg'
    },
    // Add more testimonials...
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What People Say
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
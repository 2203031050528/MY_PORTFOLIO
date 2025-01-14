import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/2203031050528',
      icon: FaGithub,
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rahul-jangir-7649312b9',
      icon: FaLinkedinIn,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/rahuljangir9643',
      icon: FaInstagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: FaTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/9680664368',
      icon: FaWhatsapp,
      color: 'hover:text-green-500'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/@rahuljangir90',
      icon: FaTelegram,
      color: 'hover:text-blue-500'
    }
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'rahuljangir9643@gmail.com',
      link: 'mailto:rahuljangir9643@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '9680664368',
      link: 'tel:+9680664368'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Vadodara, Gujarat, India',
      link: 'https://maps.google.com/?q=your+location'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's connect! Feel free to reach out through any platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                  Failed to send message. Please try again.
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <info.icon className="h-6 w-6" />
                    <span>{info.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Connect with Me
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${social.color}`}
                  >
                    <social.icon className="h-6 w-6 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
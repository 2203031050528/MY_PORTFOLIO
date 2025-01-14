import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();
  const [imageError, setImageError] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {!imageError ? (
              <img 
                src={process.env.PUBLIC_URL + '/images/logo.png'} 
                alt="Logo" 
                className="h-8 w-8 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
            )}
            <span className="text-2xl font-bold">Rahul Jangir</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {['/', '/about', '/projects', '/contact'].map((path) => {
              const name = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    location.pathname === path
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                >
                  {name}
                </Link>
              );
            })}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
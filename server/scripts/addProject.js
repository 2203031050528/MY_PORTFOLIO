const mongoose = require('mongoose');
const Project = require('../models/Project');
require('dotenv').config();

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with MERN stack...",
    image: "/images/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubLink: "https://github.com/2203031050528/DSA-PROJECT---Social-Network",
    liveLink: "https://your-ecommerce-site.com",
    featured: true
  },
  {
    title: "chat app",
    description: "A full-stack e-commerce platform built with MERN stack...",
    image: "/images/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://your-ecommerce-site.com",
    featured: true
  },
  // Add more projects...
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Project.insertMany(projects);
    console.log('Projects added successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error:', err)); 
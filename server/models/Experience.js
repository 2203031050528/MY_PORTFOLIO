const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  period: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  achievements: [{
    type: String,
    required: true
  }],
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Experience', experienceSchema); 
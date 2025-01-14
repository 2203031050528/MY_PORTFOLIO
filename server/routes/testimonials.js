const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { check } = require('express-validator');
const validateInput = require('../middleware/validateInput');

router.get('/', testimonialController.getAllTestimonials);

router.post(
  '/',
  [
    check('name').trim().notEmpty().withMessage('Name is required'),
    check('role').trim().notEmpty().withMessage('Role is required'),
    check('company').trim().notEmpty().withMessage('Company is required'),
    check('text').trim().notEmpty().withMessage('Testimonial text is required'),
    check('image').trim().notEmpty().withMessage('Image URL is required'),
  ],
  validateInput,
  testimonialController.addTestimonial
);

module.exports = router; 
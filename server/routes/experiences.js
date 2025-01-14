const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');
const { check } = require('express-validator');
const validateInput = require('../middleware/validateInput');

router.get('/', experienceController.getAllExperiences);

router.post(
  '/',
  [
    check('title').trim().notEmpty().withMessage('Title is required'),
    check('company').trim().notEmpty().withMessage('Company is required'),
    check('period').trim().notEmpty().withMessage('Period is required'),
    check('description').trim().notEmpty().withMessage('Description is required'),
    check('achievements').isArray().withMessage('Achievements must be an array'),
  ],
  validateInput,
  experienceController.addExperience
);

module.exports = router; 
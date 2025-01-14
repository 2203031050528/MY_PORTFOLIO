const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { check } = require('express-validator');
const validateInput = require('../middleware/validateInput');

router.get('/', projectController.getAllProjects);
router.get('/featured', projectController.getFeaturedProjects);

router.post(
  '/',
  [
    check('title').trim().notEmpty().withMessage('Title is required'),
    check('description').trim().notEmpty().withMessage('Description is required'),
    check('image').trim().notEmpty().withMessage('Image URL is required'),
    check('technologies').isArray().withMessage('Technologies must be an array'),
    check('githubLink').trim().notEmpty().withMessage('GitHub link is required'),
    check('liveLink').trim().notEmpty().withMessage('Live link is required'),
  ],
  validateInput,
  projectController.createProject
);

module.exports = router;
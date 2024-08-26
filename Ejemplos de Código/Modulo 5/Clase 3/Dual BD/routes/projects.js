const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const ProjectService = require('../services/ProjectService');

const projectService = new ProjectService();
const projectController = new ProjectController(projectService);

router.get('/', projectController.getAllProjects.bind(projectController));
router.get('/:id', projectController.getProjectById.bind(projectController));
router.post('/', projectController.createProject.bind(projectController));
router.put('/:id', projectController.updateProject.bind(projectController));
router.delete('/:id', projectController.deleteProject.bind(projectController));

module.exports = router;

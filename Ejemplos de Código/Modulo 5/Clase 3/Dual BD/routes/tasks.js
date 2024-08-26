const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const TaskService = require('../services/TaskService');

const taskService = new TaskService();
const taskController = new TaskController(taskService);

router.get('/', taskController.getAllTasks.bind(taskController));
router.get('/:id', taskController.getTaskById.bind(taskController));
router.post('/', taskController.createTask.bind(taskController));
router.put('/:id', taskController.updateTask.bind(taskController));
router.delete('/:id', taskController.deleteTask.bind(taskController));

module.exports = router;

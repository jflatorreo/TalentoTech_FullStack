const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado de la tarea
 *         title:
 *           type: string
 *           description: El título de la tarea
 *         description:
 *           type: string
 *           description: Una descripción detallada de la tarea
 *         completed:
 *           type: boolean
 *           description: Indica si la tarea está completada
 *           default: false
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Recupera la lista de todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: La lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/', taskController.getAllTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: La tarea fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Algún error del servidor
 */
router.post('/', taskController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea por su id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la tarea
 *     responses:
 *       200:
 *         description: La tarea por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: La tarea no fue encontrada
 */
router.get('/:id', taskController.getTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualiza una tarea por su id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: La tarea fue actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: La tarea no fue encontrada
 *       500:
 *         description: Algún error del servidor
 */
router.put('/:id', taskController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea por su id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la tarea
 *     responses:
 *       200:
 *         description: La tarea fue eliminada
 *       404:
 *         description: La tarea no fue encontrada
 */
router.delete('/:id', taskController.deleteTask);

module.exports = router;
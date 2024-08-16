const express = require('express');
const router = express.Router();
const OtraPruebaController = require('../controllers/OtraPruebaController');

/**
 * @swagger
 * components:
 *   schemas:
 *     OtraPrueba:
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
 * /OtraPruebas:
 *   get:
 *     summary: Recupera la lista de todas las tareas
 *     tags: [OtraPruebas]
 *     responses:
 *       200:
 *         description: La lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OtraPrueba'
 */
router.get('/', OtraPruebaController.getAllOtraPruebas);

/**
 * @swagger
 * /OtraPruebas:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [OtraPruebas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OtraPrueba'
 *     responses:
 *       201:
 *         description: La tarea fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OtraPrueba'
 *       500:
 *         description: Algún error del servidor
 */
router.post('/', OtraPruebaController.createOtraPrueba);

/**
 * @swagger
 * /OtraPruebas/{id}:
 *   get:
 *     summary: Obtiene una tarea por su id
 *     tags: [OtraPruebas]
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
 *               $ref: '#/components/schemas/OtraPrueba'
 *       404:
 *         description: La tarea no fue encontrada
 */
router.get('/:id', OtraPruebaController.getOtraPrueba);

/**
 * @swagger
 * /OtraPruebas/{id}:
 *   put:
 *     summary: Actualiza una tarea por su id
 *     tags: [OtraPruebas]
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
 *             $ref: '#/components/schemas/OtraPrueba'
 *     responses:
 *       200:
 *         description: La tarea fue actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OtraPrueba'
 *       404:
 *         description: La tarea no fue encontrada
 *       500:
 *         description: Algún error del servidor
 */
router.put('/:id', OtraPruebaController.updateOtraPrueba);

/**
 * @swagger
 * /OtraPruebas/{id}:
 *   delete:
 *     summary: Elimina una tarea por su id
 *     tags: [OtraPruebas]
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
router.delete('/:id', OtraPruebaController.deleteOtraPrueba);

module.exports = router;
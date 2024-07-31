const express = require('express');
const router = express.Router();
const MongouserRepository = require('../repositories/mongoUserRepository');
const MySQLuserRepository = require('../repositories/mySQLUserRepository');
const User = require('../models/user');

// Elegir el repositorio basado en una variable de entorno
const userRepository = process.env.DB_TYPE === 'mysql'
    ? new MySQLuserRepository()
    : new MongouserRepository();

router.get('/', async (req, res) => {
    try {
        const users = await userRepository.obtenerTodos();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener users'
        });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const User = await userRepository.obtenerPorId(req.params.id);
        if (User) {
            res.json(User);
        } else {
            res.status(404).json({ error: 'User no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el User' });
    }
});
router.post('/', async (req, res) => {

    try {
        const newUser = new User(null, req.body.nombre, req.body.edad);
        const CreatedUser = await userRepository.crear(newUser);
        res.status(201).json(CreatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el User' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const UpdatedUser = new User(req.params.id, req.body.nombre, req.body.edad);
        const result = await userRepository.actualizar(req.params.id, UpdatedUser);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el User' });
        }
    });
    router.delete('/:id', async (req, res) => {
        try {
            await userRepository.eliminar(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el User' });
            }
        });
        module.exports = router;

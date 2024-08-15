const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        const token = jwt.sign(

            { userId: user._id, isAdmin: user.isAdmin },
            'YOUR_SECRET_KEY',
            { expiresIn: '1h' }
        );
        console.log(user)
        res.json({ token, isAdmin: user.isAdmin });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
// db.js

const express = require('express');
const connectDB = require('./Mongodb');
const usersRouter = require('./Repository/routes/users');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/users', usersRouter);

// Manejador de errores general
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error en el servidor!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`));


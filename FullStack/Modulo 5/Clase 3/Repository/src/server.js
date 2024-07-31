const express = require('express');
const usuariosRouter = require('./routes/usuarios');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
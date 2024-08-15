const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/miTienda';

app.use(express.static(path.join(__dirname, '../Frontend/build')));


// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(MONGODB_URI, {})
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error de conexión a MongoDB:', err));
console.log(MONGODB_URI)
// Rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
});
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');


const app = express();

app.use(bodyParser.json());

// Simular una base de datos con un array
let libros = [];
// Implementar rutas aquí



app.get('/libros/', (req, res) => {
    console.log("Ruta /libros/");
    console.log(req.query);

    // Si `id` está presente en la cadena de consulta
    const libroId = req.query.id;

    if (libroId) {
        const libro = libros.find(l => l.id === libroId);
        if (libro) {
            res.json(libro);
        } else {
            res.status(404).send('Libro no encontrado');
        }
    } else {
        // Si no hay `id`, devuelve todos los libros
        res.status(200).json(libros);
    }
});

app.post('/libros', (req, res) => {
    const nuevoLibro = {
        id: uuid.v4(),
        titulo: req.body.titulo,
        autor: req.body.autor,
        anioPublicacion: req.body.anioPublicacion
    };

    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
})

app.put('/libros/:id', (req, res) => {
    const index = libros.findIndex(l => l.id === req.params.id);
    if (index >= 0) {
        libros[index] = { ...libros[index], ...req.body, id: req.
                params.id };
        res.json(libros[index]);
    } else {
        res.status(404).send('Libro no encontrado');
    }
});

app.patch('/libros/:id', (req, res) => {
    const libro = libros.find(l => l.id === req.params.id);
    if (libro) {
        Object.assign(libro, req.body);
        res.json(libro);
    } else {
        res.status(404).send('Libro no encontrado');
    }
});

app.delete('/libros/:id', (req, res) => {
    const index = libros.findIndex(l => l.id === req.params.id);
    if (index >= 0) {
        libros.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Libro no encontrado');
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


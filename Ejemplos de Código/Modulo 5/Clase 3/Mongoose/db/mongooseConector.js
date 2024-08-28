const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/",{useMongoClient:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error en la conexión'));

db.once('open', ()=>{
    //Logica de manejo de la conexión
})


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/tallerDB';


async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(url);
        console.log('Conectado a MongoDB');
        const db = client.db('tallerDB');
        // Aquí irían las operaciones con la base de datos
        await client.close();
        console.log('Conexión cerrada');
    } catch (err) {
        console.error('Error:', err);
    }
}

connectToMongoDB();


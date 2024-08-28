const MongoClient = require('mongodb').MongoClient;

module.exports = MongoClient.connect("mongodb://127.0.0.1:27017/",(err, client) => {
    if(err) throw err;

    const db = client.db('miBD');

    // db...Usar la BD


    client.close();
});



const mysql = require("mongodb")

const url = "mongodb://localhost:27017"
const dbName = "base";

let db = null

async function connect (){
        if (db) return db;
        const client  = new MongoClient(url, dbName);

        await client.connect();
        return db;
}

module.exports = {connect}
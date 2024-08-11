//db.js
const mysql = require("mysql2")

const pool  = mysql.createPool(
    {
        host: "localhost",
        user: 'test',
        password: '1234',
        database: 'users',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
)
module.exports = pool.promise()
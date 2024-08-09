const mysql2 = require ("mysql2")
const mongoose = require("mongoose")

beforeAll(
    async () =>{
        global.mysqlConnection = await mysql2.createConnection(
            {
                host: 'localhost',
                user: 'root', //Usar un usuario exclusivo para pruebas
                password: 'MySql123',
                database: 'test'
            }).promise()
    }
)

beforeAll(
    async () =>{
        const mongoConnection = await mongoose.connect('mongodb://localhost/test')
    }
)

afterEach(
    async () => {
       // mysqlConnection.query("TRUNCATE table Users")
       // await mongoose.connection.db.dropDatabase()
    }
)

afterAll(
    async () => {
        await mongoose.connection.close()
        mysqlConnection.end()
    }
)

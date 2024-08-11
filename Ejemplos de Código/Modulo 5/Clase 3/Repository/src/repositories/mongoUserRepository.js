const UserRepository = require('./userRepository')
const {connectMongo} = require('../../config/database')
const User = require('../models/user')
const {ObjectId} = require("mongodb");
class MongoUserRepository extends UserRepository {
    constructor() {
        super();
        this.collection = 'users';
    }

    async obtenerTodos() {
        const db = await connectMongo();
        const users = await db.collection(this.collection).find
        ().toArray();
        return users.map(u => new User(u._id.toString(), u.nombre, u.edad));
    }

    async obtenerPorId(id) {
        const db = await connectMongo();
        const user = await db.collection(this.collection).findOne
        ({_id: new ObjectId(id)});

        return user ? new User(user._id.toString(), user.name, user.age) : null;
    }

    async crear(user) {
        const db = await connectMongo();
        const result = await db.collection(this.collection).insertOne(user);

        return result ? new User (result.insertedId.toString(), user.name, user.age):null;
    }

    async actualizar(id, user) {
        const db = await connectMongo();
        const result = db.collection(this.collection).updateOne(
            {_id: new ObjectId(id)},
            {$set: {name: user.name, age: user.age}}
        )
        return result ? new User(id, user.name, user.age) : null
    }

    async eliminar(id) {
        const db = await connectMongo();
        const result = db.collection(this.collection).deleteOne(
            {_id: new ObjectId(id)});
        return result.deletedCount > 0 ? "Borrado con exito": null; // Asegurar que haya sido borrado el documento
    }
}
module.exports = MongoUserRepository


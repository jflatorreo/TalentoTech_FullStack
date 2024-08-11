const {connectMySQL} = require ("../../config/database");
const UserRepository = require("./userRepository");
const User = require("../models/user");

class MySQLUserRepository extends UserRepository {
    async obtenerTodos() {
        const pool = connectMySQL();
        const [rows] = await pool.query('SELECT * FROM Users');
        return rows.map(r => new User(r.id, r.nombre, r.edad));
    }

    async obtenerPorId(id) {
        const pool = connectMySQL();
        const [rows] = await pool.query('SELECT * FROM Users WHERE id = ?', [id]);
        return rows.length ? new User(rows[0].id, rows[0].nombre, rows[0].edad) : null;
    }

    async crear(User) {
        const pool = connectMySQL();
        const [result] = await pool.query(
            'INSERT INTO Users (nombre, edad) VALUES (?, ?)',
            [User.nombre, User.edad]
        );
        return new User(result.insertId, User.nombre, User.edad);
    }

    async actualizar(id, user) {
        const pool = connectMySQL();
        const result = await pool.query(
            'UPDATE Users SET nombre = ?, edad = ? WHERE id = ?'
            ,
            [user.nombre, user.edad, id]
        );
        return result ? new User(id, user.nombre, user.edad) : null;
    }

    async eliminar(id) {
        const pool = connectMySQL();
        const result = await pool.query('DELETE FROM Users WHERE id = ?', [id]);
        return result ? "Usuario eliminado":null
    }
}

module.exports = MySQLUserRepository;

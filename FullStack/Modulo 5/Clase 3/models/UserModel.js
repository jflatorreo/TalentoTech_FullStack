// /models/UserModel.js
const db = require ("../db")

class userModel{
    static async getAllUsers(){
        const [rows] = await db.query("SELECT * FROM users")
        return rows;
    }
}

module.exports = userModel;
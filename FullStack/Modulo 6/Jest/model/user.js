const mysql2 = require ("mysql2")



class MySqlUser {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    async saveUser() {


        mysqlConnection.query("INSERT INTO users (name,email,password) VALUES (?,?,?)",[this.name,this.email,this.password])
    }
}


module.exports = MySqlUser


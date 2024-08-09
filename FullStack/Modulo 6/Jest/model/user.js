const mysql2 = require ("mysql2")



class MySqlUser {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    async saveUser() {


        const [ rows ] = await global.mysqlConnection.query("INSERT INTO users (name,email,password) VALUES (?,?,?)",[this.name,this.email,this.password]);
        return this ;
    }
}


module.exports = MySqlUser


const {Model,DataTypes} = require('sequelize');

module.exports = (sequelize) => {

  class User extends Model {}

    User.init({

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false
        },
        other:{
            type: DataTypes.INTEGER,
            allowNull: true
        }



    },{
        sequelize,
        modelName:'User',
        tableName:'User'})

    return User;
}


// Class User {
// constructor (id,name, email, role){
// this.id =  id;
// this.name = name;
// this.email = email;
// this.role = role;
// }
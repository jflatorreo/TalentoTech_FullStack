const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Other: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Other2: {
      type: DataTypes.STRING,
      allowNull: true
    },Other3: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User'
  });

  return User;
};

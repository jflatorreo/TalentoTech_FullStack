const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Team extends Model {}

  Team.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'Team'
  });

  return Team;
};

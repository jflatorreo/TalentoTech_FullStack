const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Project extends Model {}

  Project.init({
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
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'Project'
  });

  return Project;
};

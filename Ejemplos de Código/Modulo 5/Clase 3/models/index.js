const Sequelize = require('sequelize');
const sequelize = new Sequelize('tasksmanager', 'root', 'MySql123', {
  host: 'localhost',
  dialect: 'mysql'
});

const Project = require('./sequelize/Project')(sequelize);
const User = require('./sequelize/User')(sequelize);
const Team = require('./sequelize/Team')(sequelize);


Project.belongsTo(Team, { foreignKey: 'teamId' });
Team.hasMany(Project, { foreignKey: 'teamId' });

sequelize.sync({ force: false, alter: true  }).then(() => {
  console.log("Database synchronized");
});

module.exports = {
  Project,
  User,
  Team
};

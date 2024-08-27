'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
sequelize = new Sequelize(config);

const User = require('./mysql/User')(sequelize);

sequelize.sync({ force: true, alter:true}).then( ()=>{
  console.log("Base de datos sincronizada")
});

module.exports = {User};

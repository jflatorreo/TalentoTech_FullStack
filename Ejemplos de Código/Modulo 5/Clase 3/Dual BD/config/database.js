const mysql = require('mysql2/promise');
const { MongoClient } = require('mongodb');

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'MySql123',
  database: 'tasksmanager'
};

const mongoConfig = {
  url: 'mongodb://localhost:27017',
  dbName: 'tasks_manager'
};

const getMySQLConnection = async () => {
  return await mysql.createConnection(mysqlConfig);
};

const getMongoConnection = async () => {
  const client = new MongoClient(mongoConfig.url);
  await client.connect();
  return client.db(mongoConfig.dbName);
};

module.exports = { getMySQLConnection, getMongoConnection };

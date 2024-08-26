const { getMySQLConnection } = require('../config/database');

class MySQLRepository {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async findAll() {
    console.log("Repository FindAll")
    const connection = await getMySQLConnection();
    const [rows] = await connection.query(`SELECT * FROM ${this.tableName}`);
    await connection.end();
    return rows;
  }

  async findById(id) {
    const connection = await getMySQLConnection();
    const [rows] = await connection.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
    await connection.end();
    return rows[0];
  }

  async create(entity) {
    const connection = await getMySQLConnection();
    const [result] = await connection.query(`INSERT INTO ${this.tableName} SET ?`, entity);
    await connection.end();
    return result.insertId;
  }

  async update(id, entity) {
    const connection = await getMySQLConnection();
    await connection.query(`UPDATE ${this.tableName} SET ? WHERE id = ?`, [entity, id]);
    await connection.end();
  }

  async delete(id) {
    const connection = await getMySQLConnection();
    await connection.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
    await connection.end();
  }
}

module.exports = MySQLRepository;

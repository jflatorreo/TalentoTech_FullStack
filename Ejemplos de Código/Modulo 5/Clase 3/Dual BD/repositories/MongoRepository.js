const { getMongoConnection } = require('../config/database');

class MongoRepository {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  async getCollection() {
    const db = await getMongoConnection();
    return db.collection(this.collectionName);
  }

  async findAll() {
    const collection = await this.getCollection();
    return collection.find({}).toArray();
  }

  async findById(id) {
    const collection = await this.getCollection();
    return collection.findOne({ id });
  }

  async create(entity) {
    const collection = await this.getCollection();
    const result = await collection.insertOne(entity);
    return result.insertedId;
  }

  async update(id, entity) {
    const collection = await this.getCollection();
    await collection.updateOne({ id }, { set: entity });
  }

  async delete(id) {
    const collection = await this.getCollection();
    await collection.deleteOne({ id });
  }
}

module.exports = MongoRepository;

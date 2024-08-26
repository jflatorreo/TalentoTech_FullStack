const MongoRepository = require('../repositories/MongoRepository');
const Task = require('../models/mongo/Task');

class TaskService {
  constructor() {
    this.repository = new MongoRepository('tasks');
  }

  async getAllTasks() {
    const tasks = await this.repository.findAll();
    return tasks.map(t => new Task(t.id, t.title, t.description, t.status, t.projectId, t.assigneeId, t.dueDate, t.customFields));
  }

  async getTaskById(id) {
    const task = await this.repository.findById(id);
    return task ? new Task(task.id, task.title, task.description, task.status, task.projectId, task.assigneeId, task.dueDate, task.customFields) : null;
  }

  async createTask(taskData) {
    const id = await this.repository.create(taskData);
    return this.getTaskById(id);
  }

  async updateTask(id, taskData) {
    await this.repository.update(id, taskData);
    return this.getTaskById(id);
  }

  async deleteTask(id) {
    await this.repository.delete(id);
  }
}

module.exports = TaskService;

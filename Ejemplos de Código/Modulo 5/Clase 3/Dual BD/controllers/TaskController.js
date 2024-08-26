class TaskController {
  constructor(taskService) {
    this.taskService = taskService;
  }

  async getAllTasks(req, res) {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTaskById(req, res) {
    try {
      const task = await this.taskService.getTaskById(req.params.id);
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTask(req, res) {
    try {
      const newTask = await this.taskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const updatedTask = await this.taskService.updateTask(req.params.id, req.body);
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      await this.taskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TaskController;

const MySQLRepository = require('../repositories/MySQLRepository');
const Project = require('../models/mysql/Project');

class ProjectService {
  constructor() {
    this.repository = new MySQLRepository('project');
  }

  async getAllProjects() {
    console.log("Service FindAll")
    const projects = await this.repository.findAll();
    return projects.map(p => new Project(p.id, p.name, p.description, p.startDate, p.endDate));
  }

  async getProjectById(id) {
    const project = await this.repository.findById(id);
    return project ? new Project(project.id, project.name, project.description, project.startDate, project.endDate) : null;
  }

  async createProject(projectData) {
    const id = await this.repository.create(projectData);
    return this.getProjectById(id);
  }

  async updateProject(id, projectData) {
    await this.repository.update(id, projectData);
    return this.getProjectById(id);
  }

  async deleteProject(id) {
    await this.repository.delete(id);
  }
}

module.exports = ProjectService;

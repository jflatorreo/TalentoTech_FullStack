class ProjectController {
  constructor(projectService) {
    this.projectService = projectService;
  }

  async getAllProjects(req, res) {
    console.log("GetAll Projects")
    try {
      const projects = await this.projectService.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProjectById(req, res) {
    try {
      const project = await this.projectService.getProjectById(req.params.id);
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProject(req, res) {
    try {
      const newProject = await this.projectService.createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProject(req, res) {
    try {
      const updatedProject = await this.projectService.updateProject(req.params.id, req.body);
      if (updatedProject) {
        res.json(updatedProject);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProject(req, res) {
    try {
      await this.projectService.deleteProject(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProjectController;

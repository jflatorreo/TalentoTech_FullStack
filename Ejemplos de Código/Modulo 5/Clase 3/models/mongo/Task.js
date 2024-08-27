class Task {
  constructor(id, title, description, status, projectId, assigneeId, dueDate, customFields) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.projectId = projectId;
    this.assigneeId = assigneeId;
    this.dueDate = dueDate;
    this.customFields = customFields || {};
  }
}

module.exports = Task;

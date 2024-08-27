class Comment {
  constructor(id, content, authorId, taskId, timestamp, attachments) {
    this.id = id;
    this.content = content;
    this.authorId = authorId;
    this.taskId = taskId;
    this.timestamp = timestamp;
    this.attachments = attachments || [];
  }
}

module.exports = Comment;

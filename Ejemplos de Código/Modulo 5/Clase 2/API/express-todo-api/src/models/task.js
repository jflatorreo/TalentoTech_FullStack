const { v4: uuidv4 } = require('uuid');
class Task {
    constructor(title, description = '') {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
    }
}
module.exports = Task
const Task = require('../models/task');
let tasks = [];

exports.getAllTasks = (req, res) => {
    const id = req.query.id;
    if(id){
        const task = tasks.find(t => t.id === id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }else{
    res.json(tasks);}
};

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task(title, description);
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.getTask = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};
exports.updateTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index !==-1) {
        tasks[index] = { ...tasks[index], ...req.body };
        res.json(tasks[index]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index !==-1) {
        tasks.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};
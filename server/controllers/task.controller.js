const Task = require("../models/task.model");

// Create 
module.exports.createTask = (req, res) => {
    Task.create(req.body)
    .then(newTask => res.json(newTask))
    .catch(err => res.json({message: "Error createTask", error: err}))
};

// Read All
module.exports.findAllTasks = (req, res) => {
    Task.find()
    .then(allTasks => res.json(allTasks))
    .catch(err => res.json({message: "Error findAllTasks", error: err}))
};

// Read One
module.exports.findOneTask = (req, res) => {
    Task.find({_id: req.params._id})
    .then(oneTask => res.json(oneTask))
    .catch(err => res.json({message: "Error findOneTask", error: err}))
}; 

// Update 
module.exports.updateTask = (req, res) => {
    Task.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(oneTask => res.json(oneTask))
    .catch(err => res.json({message: "Error updateTask", error: err}))
};

// Delete
module.exports.deleteTask = (req, res) => {
    Task.deleteOne({_id: req.params._id})
    .then(res.json({message: "Task was successfully deleted"}))
    .catch(err => res.json({message: "Error deleteTask", error: err}))
};


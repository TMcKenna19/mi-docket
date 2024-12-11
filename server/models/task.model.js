const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Task name is required"]
    },

    notes: {
        type: String
    },

    priority: {
        type: String,
        required: [true, "Task must have a priority"]
    },

    status: {
        type: String,
    },

    dueDate: {
        type: String,
        required: [true, "Due date is required"]
    },

    city: {
        type: String,
        required: [true, "City is required"]
    }

    
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task; 
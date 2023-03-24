const TaskController = require("../controllers/task.controller");

module.exports = app => {

    // Create 
    app.post("/api/tasks/create", TaskController.createTask);

    // Read All
    app.get("/api/tasks", TaskController.findAllTasks);

    // Read One
    app.get("/api/tasks/:_id", TaskController.findOneTask);

    // Update
    app.put("/api/tasks/update/:_id", TaskController.updateTask);
    
    // Delete
    app.delete("/api/tasks/delete/:_id", TaskController.deleteTask);

}

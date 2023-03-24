const express = require("express");
const app = express();
const port = 8000; 

require("./server/config/mongoose.config"); // <- connection to mongoose

app.use(express.json(), express.urlencoded({extended: true})); // <- post request code

require("./server/routes/task.routes")(app);  // <- conection to routes

app.listen(port, () => console.log(`*** Express running on port ${port}`));
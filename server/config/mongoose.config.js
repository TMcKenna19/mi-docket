const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/mi-docket-db" <- Nodejs 14.x.x
// Nodejs 18.18.0 mongoose connect 
mongoose.connect("mongodb://127.00.1:27017/mi-docket-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("*** The mongoose has been found"))
.catch(err => console.log("Error, could not find mongoose", err))
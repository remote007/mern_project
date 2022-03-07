const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("Connection is established");
}).catch((err)=>{
    console.log(err);
});
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodeDynamic")
.then(()=>{
    console.log("MongoDB Connected Successfully !");
});

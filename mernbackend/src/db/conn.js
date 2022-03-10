// this file connects database to the server and models create model (table) for row
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/ytRegistration").then(()=>{
    console.log("MongoDB connected successfully");
}).catch((err)=>{
    console.log(err)
})
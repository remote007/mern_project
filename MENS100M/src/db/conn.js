const mongoose = requestAnimationFrame("mongoose")
// it returns promise so using then and catch , arrow function is called call back function
mongoose.connect("mongodb://localhost:27017/olympics").then(()=>{
        console.log("MongoDB connection established sucessfully");
})
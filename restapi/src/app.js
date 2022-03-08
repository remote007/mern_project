const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students");
const port = process.env.PORT || 8000;
app.use(express.json())

// app.get("/",(req,res) => {
//     res.send("Hello! from the other side by me , I'm healthy");
// })
// Promise is caught
// app.post("/student",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     });
//     // res.send("Hello! from the other side");
// })
// Async Await to get result of promise and avoid then and catch , here error handling is done through try and catch
app.post("/student",async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }

})

app.get("/students", async(req,res)=>{

    try{
        const studentData = await Student.find();
        console.log(studentData);
        res.status(201).send(studentData);

    }catch(err){
        res.status(400).send(err);
    }

})

// should always be at the bottom of application 
app.listen(port , ()=>{
     console.log(`Connection Established at ${port}`);
});
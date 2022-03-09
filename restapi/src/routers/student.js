const express = require("express");
const Student = require("../models/students");
const router = new express.Router();
router.use(express.json())
// app.use(express.json())

router.post("/students",async(req,res)=>{
    
    try{
        console.log("Hi Post")
        console.log(req.body);
        const user = new Student(req.body);console.log(user);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }

})

router.get("/students", async(req,res)=>{

    try{
        const studentsData = await Student.find();
        console.log(studentsData);
        res.status(201).send(studentsData);

    }catch(err){
        res.status(400).send(err);
    }

})
// get by student individual id 
router.get("/student/:id",async(req,res)=>{
    try{
        const studentData = await Student.findById(req.params.id);
        if(!studentData){
            res.status(400).send("Incorrect Data");
        }else{
            res.status(201).send(studentData);
        }
        
    }catch(err){
        res.status(400).send(err);
    }

})
//delete the document or row

router.delete("/student/:id",async(req,res) => {

    try{
        const _id = req.params.id;
        const deletedUser = await Student.findByIdAndDelete({"_id":_id});
        if(!deletedUser){
            res.status(400).send("Id Not Found");
        }else{
            res.status(201).send(deletedUser);
        }
        
    }catch(err){
        res.status(400).send(err);
    }

})
// update student with put and patch
router.patch("/student/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updatedUser = await Student.findByIdAndUpdate({"_id":_id},req.body,{new:true});
        if(!updatedUser){
            res.status(400).send("Invalid Id");
        }else{

            res.status(201).send(updatedUser);
        }

    }catch(err){
        res.status(400).send(err);
    }


})

module.exports = router;
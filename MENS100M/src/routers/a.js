const express = require("express");
const Student = require("../models/mens");
const router = new express.Router();
router.use(express.json())

router.post("/mens",async(req,res)=>{

    try{
        const newMan = new mens(req.body);
        const man = await newMan.save();
        res.status(201).send(man);

    }catch(err){
       res.status(400).send(err);
    }
})
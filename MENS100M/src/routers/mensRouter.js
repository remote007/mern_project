const express = require("express");
// model variable initialise with file inside models
const MensRanking = require("../models/mens");
const router = new express.Router();
router.use(express.json())

router.post("/mens",async(req,res)=>{

    try{
        // console.log(req.body)
        // new model_variable of file inside model , which is exported
        // date is in mm-dd-yyformat by default when stored
        const newMan = new MensRanking(req.body);
        console.log(newMan)
        const man = await newMan.save();
        res.status(201).send(man);

    }catch(err){
       res.status(400).send(err);
    }
})

router.get("/mens",async(req,res)=>{
    try{
        const man = await MensRanking.find();
        res.status(201).send(man);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/mens/:id",async(req,res)=>{

    try{
        const man = await MensRanking.findById({"_id":req.params.id});
        if(!man)
            res.status(400).send("Invalid Id");
        else
            res.status(201).send(man);
    }catch(err){
        res.status(400).end(err);
    }

})

router.delete("/mens/:id",async(req,res)=>{

try{
    // don't forget to use await
    const man = await MensRanking.findByIdAndDelete({"_id":req.params.id}); 
    if(!man)
    res.status(400).send("iNVALID iD");
    else
        res.status(201).send(man);
}catch(err){
    res.status(400).send(err);
}

})

router.patch("/mens/:id",async(req,res)=>{

        try{
            const newMan = await MensRanking.findByIdAndUpdate({"_id":req.params.id},req.body,{new:true});
            if(!newMan)
                res.status(400).send("Invalid Id");
            else
                res.status(201).send(newMan);
        }catch(err){
            res.status(400).send(err);
        }
})

module.exports = router
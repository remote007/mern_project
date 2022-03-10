const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
app.get("/hi",async(req,res)=>{
    res.send("Hi , I love and then develop then master habits. I built the world I live in")
})
app.listen(port,()=>{
    console.log(`Server runs successfully on ${port}`)
})
// Express application
const express = require("express")
// a constant app get all powers  or properties of express function
const app = express();
// process is from node
const port = process.env.PORT || 3000;
const path = require("path");
const static_path = path.join;
require("./db/conn")
app.use(express.static())


//  `/`hi is the root and req and res are objects 
app.get("/hi",async(req,res)=>{
    res.send("Hi , I love and then develop then master habits. I built the world I live in")
})
app.listen(port,()=>{
    console.log(`Server runs successfully on ${port}`)
})
// Express application
const express = require("express")
// a constant app get all powers  or properties of express function
const app = express();
// process is from node
const port = process.env.PORT || 3000;
require("./db/conn")
// setting pAth for static file
const path = require("path");
// gives complete directory path from the drive to src and put "../public" , to go back as public folder is in mern project
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path))
// setting views engine
app.set("view engine","hbs")
//  `/`hi is the root and req and res are objects 
app.get("/hi",async(req,res)=>{
    // res.send("Hi , I love and then develop then master habits. I built the world I live in")
    // rendering dynamic html file to respond
    res.render("index")
})
app.listen(port,()=>{
    console.log(`Server runs successfully on ${port}`)
})
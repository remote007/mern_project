const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
require("./db/conn")

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css/bootstrap.min.css")))
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))

app.set("view engine","hbs")

app.get("/",(req,res)=>{
    // res.send("Hi")
    res.render("index");
})

app.get("/contact",(req,res)=>{
   
    res.render("contact");
})

app.listen(port, ()=>{
    console.log(`Server Connected Successfully at ${port}`);
})
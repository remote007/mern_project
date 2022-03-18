const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
require("./db/conn")

const static_path = path.join(__dirname,"../public");
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css/bootstrap-grid.min.css")))
app.use("/js",express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use(express.static(static_path))

app.get("/",(req,res)=>{
    res.send("Hi")
})

app.listen(port, ()=>{
    console.log(`Server Connected Successfully at ${port}`);
})
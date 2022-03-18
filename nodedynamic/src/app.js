const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
require("./db/conn")

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path))

app.get("/",(req,res)=>{
    res.send("Hi")
})

app.listen(port, ()=>{
    console.log(`Server Connected Successfully at ${port}`);
})
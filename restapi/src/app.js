const express = require("express");
const app = express();
app.get("/students",(req,res) => {
    res.send("Hell! from the other side");
})
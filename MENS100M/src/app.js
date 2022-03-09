const express = require("express")
const app = express();
// process's environment will give port if to host remote online otherwise 3000 for loalhost
const port = process.env.PORT || 3000;
// listen application 
app.listen(()=>{
    console.log("Connection established successfully ");
})

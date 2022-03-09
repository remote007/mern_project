const express = require("express")
const app = express();
// process's environment will give port if to host remote online otherwise 3000 for loalhost
const port = process.env.PORT || 8000;

app.get("/hi",async(req,res) => {

    res.send("!");

})



// listen application 
app.listen(port,()=>{
    console.log(`Server connection established successfully at port ${port}`);
})

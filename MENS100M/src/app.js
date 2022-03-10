const express = require("express")
const app = express();
require("./db/conn")
require("./models/mens")
require("./routers/a")
// process's environment will give port if to host remote online otherwise 3000 for loalhost
const port = process.env.PORT || 8000;

// listen application 
app.listen(port,()=>{
    console.log(`Server connection established successfully at port ${port}`);
})

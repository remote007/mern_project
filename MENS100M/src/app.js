const express = require("express")
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn")
require("./models/mens")
const mensRouter = require("./routers/mensRouter")
// process's environment will give port if to host remote online otherwise 3000 for loalhost

app.use(mensRouter);
// listen application 
app.listen(port,()=>{
    console.log(`Server connection established successfully at port ${port}`);
})

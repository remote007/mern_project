const http = require("http");
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.writeFileSync("home.html" ,"utf-8");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        //installed with npm and now require it
       
    }
});
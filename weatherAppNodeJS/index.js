const http = require("http");
const fs = require("fs");
const homeFile = fs.writeFileSync("home.html" ,"utf-8");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        //installed with npm and now require it
        const requests = require("requests");
    }
});
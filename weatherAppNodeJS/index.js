const http = require("http");
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.writeFileSync("home.html" ,"utf-8");
const server = http.createServer((req,res)=>{
    // req is request from internal server;
    if(req.url=="/"){
        //installed with npm and now require it , requests is used to send it from the application
       requests("api.openweathermap.org/data/2.5/weather?q=Pune&appid=95444cb615c878ae792a1033de5525b9")
       .on(data,(chunk)=>{
            console.log()
       })
       .on("end",(err)=>{
        if(err){
            console.log(err);
        }
        })
    }
});

//after creating server you must listen to it for mode to work , inde is also js file like app
server.listen(8000,"127.0.0.1"); 

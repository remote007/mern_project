const http = require("http");
const fs = require("fs");
'use strict';
const requests = require("requests");
const homeFile = fs.readFileSync("home.html" ,"utf-8");
const server = http.createServer((req,res)=>{
    // req is request from internal server;
    if(req.url=="/"){
        //installed with npm and now require it , requests is used to send it from the application
       requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=95444cb615c878ae792a1033de5525b9")
       .on('data', function (chunk) {
        const onjdata = JSON.parse(chunk);
        console.log(onjdata)
      })
      .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
       
        console.log('end');
      });
    }
});

//after creating server you must listen to it for mode to work , inde is also js file like app
server.listen(8000,"127.0.0.1"); 

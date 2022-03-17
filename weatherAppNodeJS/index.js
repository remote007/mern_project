const http = require("http");
const fs = require("fs");
'use strict';
const requests = require("requests");
const homeFile = fs.readFileSync("home.html" ,"utf-8");

const replaceVal = (tempVal,originalVal) =>{

    let temperature = tempVal.replace("{%tempval%}",originalVal.main.temp);
    temperature = temperature.replace("{%tempmin%}",originalVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}",originalVal.main.temp_max);
    temperature = temperature.replace("{%location%}",originalVal.name);
    temperature = temperature.replace("{%country%}",originalVal.sys.country);
    return temperature;

}
const server = http.createServer((req,res)=>{
    // req is request from internal server;
    if(req.url=="/"){
        //installed with npm and now require it , requests is used to send it from the application
       requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=95444cb615c878ae792a1033de5525b9")
       .on('data', function (chunk) {
        const objdata = JSON.parse(chunk);
        const arr = [objdata];
        // console.log(arr[0].main.temp);
        const realTimeData = arr.map((val)=>replaceVal(homeFile,val)).join("");
        console.log(realTimeData);
        res.write(realTimeData);
      })
      .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
               console.log('end');
               res.end();
      });
    }
});

//after creating server you must listen to it for mode to work , inde is also js file like app
server.listen(8000,"127.0.0.1"); 

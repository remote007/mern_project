const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodemgoDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name : String,
    student : Boolean
})

const Playlist = new mongoose.model("Playlist",playlistSchema);

// for one doc or row
//create and save one doc or row
const createDoc = async() =>{
    try{
        const studentPlaylist = new Playlist({
            name : "Ram",
            student : true
        })
        
        const res = await studentPlaylist.save();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
// createDoc();

//for many

const createDocs = async() =>{
    try{
        const teacherPlaylist = new Playlist({
            name : "Rama",
            student : false
        })
        const supervisorPlaylist = new Playlist({
            name : "Ramu",
            student : false
        })
        const principalPlaylist = new Playlist({
            name : "Ram Dhaniya",
            student : false
        })

        const res = await Playlist.insertMany([teacherPlaylist,supervisorPlaylist,principalPlaylist]);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
// createDocs();

// read docs or row 
const getDocs = async() => {
 try{
    const res2 = await Playlist.find();
    const res3 = await Playlist.find({name:"Ram Dhaniya"});
    const res4 = await Playlist.find({name:"Ram Dhaniya"}).select({student:1});
    const res5 = await Playlist.find({student:{$eq: false}}).select({name:1}).limit(2);    
    const res6 = await Playlist.find({student:{$eq: false}}).select({name:1}).countDocuments();
    const res7 = await Playlist.find({student:{$eq: false}}).select({name:1}).sort({name:-1});
    console.log(res7);
   
 }catch(err){
     console.log(err);
 }
}
// getDocs();

const updateDocs = async (_id) => {
try{

    // const r7 = await Playlist.updateOne({_id},{$set : {name : "Lata"}});
    // console.log(r7);
    const r8 = await Playlist.findByIdAndUpdate({_id},{$set : {name : "Naintara"}},{new:true,useFindAndModify : false});
    console.log(r8);

}catch(err){
    console.log(err);
}

}

// updateDocs("6222e10d28ce9729324b26d9");


const deleteDocs = async (_id) => {
    try{
        const r9 = await Playlist.deleteOne({_id});
        console.log(r9);
    }catch(err){
        console.log(err);
    }
}
deleteDocs("6222dd0577c720082d17dc1b");









// const http = require('http');

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//     // Set a response type of plain text for the response
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');
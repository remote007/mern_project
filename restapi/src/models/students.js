const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    }
});
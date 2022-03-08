const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already present !"],
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Not a valid email");
        }

    },
    phone:{
        type:Number,
        unique:true,
        required:true,
        minlength:10,
        
    },
    address:{
        type: String,
        required:true
    }
});

// new collection (table using model)
const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;
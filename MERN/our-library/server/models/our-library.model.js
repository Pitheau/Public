
const mongoose = require('mongoose');


const  StudentSchema = new mongoose.Schema({
    //create atributes for this obect as a string of objects
    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least three characters"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        min: [70000, "Password must be at least three characters"]
    },
    level:{
        type: String,
        required: [true, "Level is required"],
    },
    history:{
        type: Array,
        required: [false],
    },
},{ timestamps : true })


module.exports.Student = mongoose.model('Student' , StudentSchema)




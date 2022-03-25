// 1. import mongoose
const mongoose = require('mongoose');

// 2. create model below JobSchema is a variable
const  JobSchema = new mongoose.Schema({
    //create atributes for this obect as a string of objects
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least three characters"]
    },
    salary:{
        type: Number,
        required: [true, "Salary is required"],
        min: [70000, "Salary must be at least $70,000"]
    },
    remote:{
        type: SVGAnimatedBoolean,
        required: [true, "Remote option is required"],
    },
},{ timestamps : true })

// exporting to project below is with Job and JobSchema variables
module.exports.Job = mongoose.model('Job' , JobSchema)


//workflow: got to controller.js and set up

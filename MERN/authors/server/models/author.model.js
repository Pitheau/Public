const mongoose = require('mongoose');

const  AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Author's name is required"],
        minlength: [3, "Title must be at least three characters"]
    },
},{ timestamps : true })

module.exports.Author= mongoose.model('Author' , AuthorSchema)

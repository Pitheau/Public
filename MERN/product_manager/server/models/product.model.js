const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,  "Title is required"],
        minlength: [4, "Title must be four characters"]
    },
    price:{
        type: Number,
        required: [true,  "Price is required "],
        min: [1, "There must be a postive price"]
    },
    description:{
        type: String,
        required: [true,  "Description is required"],
        minlength: [4, "Deescription must be four characters"]
    },
},{timestamps: true})


module.exports.Product = mongoose.model('Product', ProductSchema)
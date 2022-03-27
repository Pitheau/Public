const {Author} = require("../models/author.model")

module.exports.index = (request, response) =>{
    response.json({
        message: "Hello World"
    });
}

// get all 
module.exports.allAuthors= (req , res) =>{
    Author.find({})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

//get one
module.exports.oneAuthor= (req , res) =>{
    Author.findOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

//create
module.exports.createAuthor= (req , res) =>{
    Author.create(req.body)
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

//edit
module.exports.editAuthor = (req , res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true , runValidators:true})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

//delete
module.exports.deleteAuthor = (req , res) =>{
    Author.deleteOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}
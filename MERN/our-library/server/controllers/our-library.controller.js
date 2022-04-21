const {Student} = require("../models/our-library.model")

module.exports.index = (request, response) =>{
    response.json({
        message: "Hello World"
    })
}
// get all 
module.exports.allStudent= (req , res) =>{
    Student.findAll({})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}
//get one
module.exports.oneStudent = (req , res) =>{
    Student.findOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

//create
module.exports.createStudent = (req , res) =>{
    J
    Student.create(req.body)
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}


//edit
module.exports.editStudent= (req , res) =>{
    Student.findOneAndUpdate({_id: req.params.id}, req.body, {new:true , runValidators:true})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

//delete
module.exports.deleteStudent = (req , res) =>{
    Student.deleteOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}

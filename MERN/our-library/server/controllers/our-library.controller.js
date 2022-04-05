const {Student} = require("../models/our-library.model")

// 2 TEST controller below then config routes.js to test if information is flowing from controller to route
// use browser or postman to check route and confirm you are getting the message below
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

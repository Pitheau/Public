// 1. import model below is from the model that is exporting Job
const {Job} = require("../models/job.model")

// 2 TEST controller below then config routes.js to test if information is flowing from controller to route
// use browser or postman to check route and confirm you are getting the message below
module.exports.index = (request, response) =>{
    response.json({
        message: "Hello World"
    });
}
//workflow: after confirmation complete the controller.js and routes.js

// 3. create the  functionality
// below are set up for Job project
// get all 
module.exports.allJobs = (req , res) =>{
    Job.find({})
        .then(jobs=>res.json(jobs))
        .catch(err => res.status(400).json(err))
}

//get one
module.exports.oneJobs = (req , res) =>{
    Job.findOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}
//create
module.exports.createJobs = (req , res) =>{
    Job.create(req.body)
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}
//edit
module.exports.editJobs = (req , res) =>{
    Job.findOneAndUpdate({_id: req.params.id}, req.body, {new:true , runValidators:true})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}
//delete
module.exports.deleteJobs = (req , res) =>{
    Job.deleteOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err => res.status(400).json(err))
}
// Use Postman to test all the routes and controllers

//workflow the completes the back end begin the front end.

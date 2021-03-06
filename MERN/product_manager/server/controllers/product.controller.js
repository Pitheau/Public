const {Product} = require("../models/product.model")

// create
module.exports.createProduct = ( req,  res ) =>{
    console.log(res.body)
    Product.create(req.body)
    .then(response=> res.json(response))
    .catch(err=>res.status(400).json(err))

}
// get all products
module.exports.allProducts = ( req,  res ) =>{
    Product.find({})
    .then(response=> res.json(response))
    .catch(err=>res.status(400).json(err))
}

// get one product
module.exports.oneProduct = ( req,  res ) =>{
    Product.findOne({_id:req.params.id})
        .then(oneJob=>res.json(oneJob))
        .catch(err=>res.status(400).json(err))
}
module.exports.updateProduct = ( req,  res ) =>{
    Product.findOneAndUpdate({_id : req.params.id}, req.body, {new:true, runValidators:true})
    .then(res=>res.json(res))
    .catch(err=>res.status(400).json(err))
}
// delete
module.exports.deleteProduct = ( req,  res ) =>{
    Product.deleteOne({_id : req.params.id},{new:true, runValidators:true})
    .then(res=>res.json(res))
    .catch(err=>res.status(400).json(err))
}
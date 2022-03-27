//rafce to  formate
import React, {useEffect, useState} from 'react'
//useEffect and useState to populate on load
import axios from "axios"
//axios to update backend
import { useHistory, useParams } from "react-router"
//useParams to grab id within the route to populate and to update

//inside the function
const {id} = useParams()
// this will set id to the id in useParams

//creates variable the same as the object atributes 
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
const [description, setDescription] = useState("")
const [remote, setRemote] = useState(false)
const [errors, serErrors] = useHistory([])
//this variable is to used to get the validations at the end of the form
const history = useHistory()
//this variable is to redirect after a successful response in the .then


useEffect (() => {
    axios.get(`http://localhost:8000/api/jobs/${id}`)
        .then(res=>{
            const product = res.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
            setRemote(product.remote)
        })
        .catch(err=>console.log(err))
},[])

const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/${id}`, {title, price, descrption,remote})
        .then(res => history.push("/api/products"))
        .catch(err=> {
            const errorResponse= err.response.data.errors
            const errorArray = []
            for(const key of Object.keys(errorResponse)){
                errorArray.push(errorResponse[key].message)
            }
            setErrors(errorArray)
        })
}

// This id is from const id
const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => history.push("/api/products"))
        .catch(err=> console.log(err))
}

// form, should be in the Return statement
<>
    <form onSubmit = {handleSubmit} className = "form">
        <div className= "col-12">
            <label> Title </label>
            <input className = "form-control" type="text" name ="title" value={title}
            onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className= "col-12">
            <label> Price </label>
            <input className= "form-control" type="number" name ="price" value={price}
            onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className= "col-12">
            <label> Description</label>
            <input className = "form-control" type="text" name ="description" value={description}
            onChange={e => setDescription(e.target.value)}/>
        </div>
        <div className= "col-12">
            <label> Remote?</label>
            <input className = "form-control" type="checkbox" name ="remote" checked={remote}
            onChange={e => setRemote(e.target.checked)}/>
        </div>
        <button className="btn btn-primary">Create</button>
    </form>
    //error message 
    {
        errors.map((err , i) =>(
            <p style = {{color: "red"}} key = {i}>{err}</p>
        ))
    }
    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
</>
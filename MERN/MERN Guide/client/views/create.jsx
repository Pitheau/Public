//rafce to  format

// imports
import React, {useState} from 'react'
// form- will use for the inputs
import axios from "axios"
//axios to post the data to the backend
const history = useHistory()
//useHistory for after submission, redirect to dashboard
const [errors, serErrors] = useHistory([])
//this variable is to used to get the validations at the end of the form


// set the state inside the function before the return. Product in this example
const CreateJob = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [remote, setRemote] = useState(false)

const handleSubmit = (e) =>{
    e.preventDefault()
    // note use of back-ticks below and directs to a post job route, then has req.body as object
    axios.post(`http://localhost:8000/api/jobs`, {title, price,description,remote})
    //history.push redirects to the "/" route
    .then(res => history.push("/"))
    .catch(err=> {
        const errorResponse= err.response.data.errors
        const errorArray = []
        for(const key of Object.keys(errorResponse)){
            errorArray.push(errorResponse[key].message)
        }
        setErrors(errorArray)
    })
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
</>
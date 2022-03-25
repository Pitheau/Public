import React, {useState} from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'

const CreateForm = (props) => {
    const[title, setTitle]= useState()
    const[price, setPrice]= useState()
    const[description, setDescription] = useState()
    const[errors, setErrors]= useState()
    const history= useHistory()


const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http:localhost:8000/api/products`, {title, price, description})
    .then(res=>{
        props.reload()
        history.push("/api/products")
    })
    .catch(err=>{
        const errRes= err.response.data.errors
        const errArr = []
        for ( const key of Object.keys(errRes)){
            errArr.push(errRes[key]["message"])
        }
        setErrors(errArr)
    })
}

return (
    <div>
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
                    <button className="btn btn-primary btn-block mt-3">Create</button>
            </form>
            {/* {
                errors.map((err,  i)  => (
                    <p key = {i}  style = {{color:"red"}} >{err}</p>
                ))
            } */}

    </div>
)
}

export default CreateForm
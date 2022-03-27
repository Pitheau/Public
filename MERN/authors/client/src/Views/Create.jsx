import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState()
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/author`, {name})
        .then(res => history.push("/api/author"))
        .catch(err=>console.log(err))
    }
return (
<div>
    <form onSubmit = {handleSubmit} className = "form">
        <div className= "col-12">
            <label> Title </label>
            <input className = "form-control" type="text" name ="title" value={name}
            onChange={e => setName(e.target.value)}/>
        </div>
        <button className="btn btn-primary">Create</button>
    </form>
</div>
)
}

export default Create
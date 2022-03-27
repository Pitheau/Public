import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams, useHistory } from "react-router"
import {Link} from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()

    const [name, setName] = useState("")

    const history = useHistory()


    useEffect (() => {
        console.log(id)
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res=>{
                const author = res.data
                console.log(res.data)
                setName(author.name)
            })
            .catch(err=>console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then(res => history.push("/api/author"))
            .catch(err=>console.log(err))
        }
        const handleDelete = () => {
            axios.delete(`http://localhost:8000/api/author/${id}`)
                .then(res => history.push("/api/author"))
                .catch(err=> console.log(err))
        }

return (
    <div>
        <h1>Favorite authors</h1>
        <div>
        <Link to = "/api/author"> Home </Link>
        </div>
        <form onSubmit = {handleSubmit} className = "form">
        <div className= "col-12">
            <label>Name: </label>
            <input className = "form-control" type="text" name ="name" value={name}
            onChange={e => setName(e.target.value)}/>
        </div>
        <button className="btn btn-primary">Create</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </form>
    </div>
)
}

export default Edit
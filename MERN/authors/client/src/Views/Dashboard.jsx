import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import axios from "axios"
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [author, setAuthor] = useState()
    const [refresh, setRefresh] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author`)
        .then(res=>setAuthor(res.data))
        .catch(err=>console.log(err))
    }, [refresh])

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/author/${deleteId}`)
            .then(res =>{
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1> Favorite authors</h1>
            <div>
            <Link to = "/api/author/new"> Add an author </Link>
            </div>
            {
                author?
            <table className= "table">
                <thead >
                    <tr>
                        <th> Name</th>
                        <th colSpan = {2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        author.map((author, i)=> (
                            <tr key = {i}>
                                    <td>{author.name} </td>
                                    <td> <Link className= "btn btn-success" to={`/api/author/edit/${author._id}`}> Edit</Link> </td>
                                    <td> <button className="btn btn-danger" onClick={() =>handleDelete(author._id)}> Delete </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>:
                <h1>There are no authors availible</h1>
            }
        </div>
    )
}
export default Dashboard
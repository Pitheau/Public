//rafce to  format

// imports useEffect & useState(pulls data into object and populate)
import React, {useEffect, useState} from 'react'

import {useHistory} from "react-router-dom"
// grab from back end
import axios from "axios"

// link import
import {Link} from 'react-router-dom'

// Below is in the function    const Dashboard = () => {}

//set the information in state.  This example is for jobs
const [jobs, setJobs] = useState()
const [refresh, setRefresh] = useState()

//useEffect process to grab data on load
useEffect(() => {
    // Pulling from axios to mongoose.  Notice use of back-ticks
    // use .then(res=>console.log(res.data)) in place of the .then below to go into brower console to confirm data is being provided
    axios.get(`http:/localhost:8000/api/jobs`)
    .then(res=>setJob(res.data))
    .catch(err=>console.log(err))
    //below empty array is to trigger refresh of the the useEffect
}, [refresh])

// note the refresh above is trigger by the change in state of refresh in the handleDelete below
const handleDelete = (deleteId) =>{
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res =>{
            setRefresh(!refresh)
        })
        .catch(err=>console.log(err))

}

// to add a Link to another page(must be in return statement)Below is for a product project, puts the link above the table

<Link to = "/api/product/new"> Create a new job </Link>
</>
//table for data basic with boolean example. Below is for product and includes two turnary operator "product?"" then ":" and for the boolean input to check box
<>
{
    job?
    <table className= "table">
        <thead >
            <tr>
                <th> Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Availible</th>
                <th colspan = {2}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product, i)=>(
                    <tr key = {i}>
                                {/* Note the use of braces and back-ticks for path  & use of ${product._id} to get the data by using the _id atribute*/}
                            <td> <Link to={`api/products/showOne/${product._id}`}>{product.title}</Link> </td>
                            <td> {product.price} </td>
                            <td> {product.avaible?"Yes":"No"} </td>
                            {/* Below is styled to look like a button */}
                            <td> <Link className= "btn btn-success" to={`/api/products/edit/${product._id}`}>{product.title}</Link>Edit </td>
                            <td> <button className="btn btn-danger" onClick={() =>handleDelete(product._id)}> Delete </button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>:
    <h1>There are no products availible</h1>
}
</>


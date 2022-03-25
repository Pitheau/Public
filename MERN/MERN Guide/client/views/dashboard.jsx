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

//useEffect process to grab data on load
useEffect(() => {
    // Pulling from axios to mongoose.  Notice use of back-ticks
    // use .then(res=>console.log(res.data)) in place of the .then below to go into brower console to confirm data is being provided
    axios.get(`http:/localhost:800/api/jobs`)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    //below empty array is to trigger refresh of the the useEffect
}, [])

// to add a Link to another page(must be in return statement)Below is for a jog project
<>
<Link to = "/jobs/new"> Create a new job </Link>
</>
//table for data basic with boolean example. Below is for product and includes two turnary operator "product?"" then ":" and for the boolean input to check box
<>
<table className= "table">
    <thead >
        <tr>
            <th> Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Availible</th>
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
                </tr>
            ))
        }
    </tbody>
</table>:
<h1>There are no products availible</h1>
</>


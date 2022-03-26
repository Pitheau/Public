//rafce to  format

//imports
import React, {useState, useEffect} from 'react'
// useState and useEffect are for loading the view upon loading
import axios from "axios"
//axios will get data from the server side
import {useParams, Link} from 'react-router-dom'
//useParams for getting the id variable from the route


//inside the the OneJob function
//id is set to useParams()  and set state of job
const {id} = useParams
const [job, setJob] = useState()

useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=setJob(res.data))
        // this catch, error in the response , will set the job to be empty
        .catch(err=>setJob())
})

//  Inside the return statement
{"this is just a filler to keep down the red marks"}  

// ternary operator to display single item
    <div>
        {
            product?
                <div>
                    <h3> Title: {product.title}</h3>
                    <h5> Price: {product.price}</h5>
                    <h5>Description: {product.description}</h5>
                    <h5>Remote: {product.remote?"Yes":"No"} </h5>

                </div>:
                <h1> Please check you ID for accuracy</h1>
        }
    </div>

    // Link to navigate from current. This expample a back button to return to dashboard

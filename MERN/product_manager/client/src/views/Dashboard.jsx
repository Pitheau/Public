import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import axios from "axios"
const Dashboard = () => {
    const [products, setProducts] = useState()
    const[title, setTitle]= useState()
    const[price, setPrice]= useState()
    const[description, setDescription] = useState()
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    }, [])
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http:localhost:8000/api/products`, {title, price, description})
            .then(res=>  history.push("/api/dashboard"))
            .catch(err=>{
                const errRes= err.response.data.errors
                console.log(errRes)
                const errArr = []
                for ( const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr)

            })
    }


    return (
    <div>
            <form className = "form">
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
                errors.map((err,  i)) => (
                    <p style = {{color:"red"}} key = i >{err}</p>
                ))
            } */}
        <hr/>

        <h1>All Products</h1>
            {
                products?

                <table className= "table">
                    <thead >
                        <tr>
                            <th> Title</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i)=>(
                                <tr key = {i}>
                                        <td> {product.title} </td>
                                        <td> {product.price} </td>
                                        <td> {product.description} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>:
                <h1>There are no products availible</h1>
            }

    </div>



)
}

export default Dashboard
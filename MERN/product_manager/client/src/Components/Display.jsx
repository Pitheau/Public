import React from 'react'
import {Link }from 'react-router-dom'

const Display = (props) => {
    const {products} = props

return (
<div>  {
                products?

                <table className= "table">
                    <thead >
                        <tr>
                            <th> Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i)=>(
                                <tr key = {i}>
                                        <td> <Link to ={`/api/products/${product._id}`} >{product.title}</Link> </td>
                                        <td><Link to ={`/api/products/update/${product._id}`}>Edit</Link></td>
                                        <td><button>Delete</button></td>
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

export default Display
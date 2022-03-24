import React, {useEffect, useState}from 'react'
import axios from "axios"
import CreateForm from '../Components/CreateForm'
import Display from '../Components/Display'


const Main = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(true)


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    }, [refresh])

    const reload = ()=>{
        setRefresh(!refresh)
    }

return (
    <div>
        <CreateForm reload = {reload}/>
        {
            products &&

            <Display products= {products}/>
        }
        <hr/>
       
        
    </div>
)
}

export default Main
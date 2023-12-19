import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
export default function Productdetails() {
var api_url  = 'https://fakestoreapi.com/products'
var [product,setproducts] = useState({})
useEffect(()=>{
fetch(`${api_url}/ ${params.productId}`).then((res)=> res.json()).then((product)=>setproducts(product))


},[])
var params = useParams();
console.log(params);
  return (
    <Product product={product} showbutton={true}/>
  )
}

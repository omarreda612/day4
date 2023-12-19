import React, { useEffect, useState } from 'react'
import Product from './Product'
import { json } from 'react-router-dom';
import axios from 'axios'
export default function Productlist() {

    var apiurl = 'https://fakestoreapi.com/products';
var[products,useproducts] = useState([]);
var[categories,setcategories] = useState([])
var getproducts =  async ()=>{

    try {
        const response = await axios.get(`${apiurl}`);
        useproducts(response.data);
      } catch (error) {
        console.log(error);
      }
}

var getcategories = async () => {
    try {
      const response = await axios.get(`${apiurl}/categories`);
      setcategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  
var getproductsincategory = async (catname) =>{
    try {
        const response = await axios.get(`${apiurl}/categories/${catname}`);
        useproducts(response.data);
      } catch (error) {
        console.log(error);
      }
}

    useEffect(()=> {
  getproducts();
    getcategories();
    
    },[]);

   
        
      
  return (
<div>
    <h1 className='text-center p-3'> our products</h1>

   
    <div className='container'>
        <div className='row'> 
        {/* {products.map((cat)=>{
            return <button key={cat} className='btn btn-info'>{cat}</button>
                
            
         })} */}
         {
            categories.map((cat)=>{
                return <button key={cat} className='btn btn-info' onClick={()=>{getproductsincategory()}}> {cat}</button>
            })
         }

         {products.map((product)=>{
            return(
                <div className='col-3' key={product.id}>
                <Product product={product} showbutton={true} ></Product>
            </div>
            )
         })}

        </div>
    </div>
        
</div>
    

  )
}

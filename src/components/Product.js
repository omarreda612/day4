
import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    console.log(props)
    var {product, showbutton} = props;
  return (
    
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}/</p>
                        <p>price :{product.price}$</p>
                        {showbutton && <Link href="/#" className="btn btn-primary" to={`/product/${product.id}`}>buy </Link>}
                    </div>
            </div>

   
  )
}

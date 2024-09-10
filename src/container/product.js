import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";

function Product (props){

    const params = useParams();

    const item = ProductList.find((element)=>element.id === parseInt(params.id))


    return(
        <div className="card m-2">
        <div className="d-flex justify-content-center mt-2">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="border-radius-9 img-fluid"
            style={{ height: 350, width: 400 }}/>
        </div>
        <div className="card-body text-center ">
          <h5 className="card-title">{item.title}</h5>
          <h6 className="mt-2">Price: ${item.price}</h6>
          <h6 className="mt-2">Rating: {item.rating}</h6>
        </div>
      
      <div className="d-flex justify-content-center mb-2 mt-1">{item.stock ? <div><button className=" ms-2 btn btn-success" >Buy Now</button> <button className=" ms-2 btn btn-warning">Add to cart</button></div>: <button className="btn btn-outline-danger">Out of stock</button>}</div>
      
      </div>

    )
}

export default Product;
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCart(props){

const navigate = useNavigate();

    return(

        <div className="card m-2 cursor-pointer" style={{ width: 300 }} role="button" onClick={()=>navigate(`/product/${props.id}`)}>
  <div className="d-flex justify-content-center mt-2">
    <img
      src={props.thumbnail}
      alt={props.title}
      className="border-radius-9 img-fluid"
      style={{ height: 150, width: 200 }}
    />
  </div>
  <div className="card-body text-center">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="mt-2">Price: ${props.price}</h6>
    <h6 className="mt-2">Rating: {props.rating}</h6>
  </div>

<div className="d-flex justify-content-center mb-2">{props.stock ? <button className="btn btn-success  ">Available</button>: <button className="btn btn-outline-danger">Out of stock</button>}</div>

</div>


    )
}
export default ProductCart;
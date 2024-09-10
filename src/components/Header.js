import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import mt from '../assets/mt.png'
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();
    return(
        <div className="bg-success">
  
  <div className="row align-items-center">
    <div className="col-auto align-items-center">
    <img src={mt} alt="Logo" style={{ width: '80px', height: 'vh-100' }} />
    </div>
    <div className="col text-center">
     
      <h3 className="text-center " style={{color:'#e5560f'}}>Mobile Tree</h3>
    </div>
  </div>

  
  <div className="row justify-content-center ">
    <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center mb-2">
      <button className="btn btn-primary me-2" onClick={()=>navigate('/')}>Home</button>
      <input className="form-control me-2" type="search" placeholder="Search..." />
      <button className="btn btn-warning">Cart</button>
    </div>
  </div>
</div>

    )
}
export default Header;
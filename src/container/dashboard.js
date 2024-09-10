import React from "react";
import { ProductList } from "../data/ProductList";
import ProductCart from "../components/productCart";

function Dashboard(){
    return(
        <div className="d-flex flex-wrap justify-content-center p-3">
            {ProductList.map((product,i)=><ProductCart {...product} />)}

        </div>
    )
}
export default Dashboard;
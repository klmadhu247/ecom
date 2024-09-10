import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from "./product";


function Home() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />}> </Route>
                <Route path="/product/:id" element={<Product/>}/>

            </Routes>


        </div>

    )


}
export default Home;
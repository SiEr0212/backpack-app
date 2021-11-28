import React from 'react';
import {Link} from "react-router-dom";
import Backpack from '../Backpack';

export default function Navbar() {
    return (
        <div>
           <Link to="/">Home</Link>
           <Link to="/register">Register</Link> 
           <Link to="/login">Login</Link> 
           <Link to="/customer">Customer</Link>
           <Link to="/backpack">Backpack</Link>  
        </div>
    )
}
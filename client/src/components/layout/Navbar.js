import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Navbar() {

  const {loggedIn} = useContext(AuthContext);
  
  console.log(loggedIn)

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/customer">Customer</Link>
      <Link to="/backpack">Backpack</Link>
    </div>
  );
}

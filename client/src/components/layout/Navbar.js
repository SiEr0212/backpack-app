import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import Card from "@mui/material/Card";

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  console.log(loggedIn);

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        marginBottom: "6vw",
      }}
    >
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>

      {loggedIn === false && (
        <>
          <Link to="/register" style={{ margin: "10px" }}>
            Register
          </Link>
          <Link to="/login" style={{margin: "10px"}}>Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer" style={{margin: "10px"}}>Customer</Link>
          <Link to="/backpack" style={{margin: "10px"}}>Backpack</Link> 
          <LogOutBtn />
        </>
      )}
    </Card>
  );
}

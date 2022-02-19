import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import Button from "@mui/material/Card";
import "./Navbar.css";

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  console.log(loggedIn);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        marginBottom: "6vw",
      }}
    >
      <Button variant="contained" class="navButtons">
        <Link to="/" style={{ margin: "10px", textDecoration: "none"}}>
          Home
        </Link>
      </Button>

      {loggedIn === false && (
        <>
          <Button variant="contained" class="navButtons">
            <Link to="/register" style={{ margin: "10px", textDecoration: "none" }}>
              Register
            </Link>
          </Button>
          <Button variant="outlined" color="secondary" class="navButtons">
            <Link to="/login" style={{ margin: "10px", textDecoration: "none" }}>
              Login
            </Link>
          </Button>
        </>
      )}
      {loggedIn === true && (
        <>
          <Button variant="contained" class="navButtons">
            <Link to="/customer" style={{ margin: "10px", marginLeft: "10px" }}>
              Customer
            </Link>
          </Button>
          <Button variant="contained" class="navButtons">
            <Link to="/backpack" style={{ margin: "10px" }}>
              Backpack
            </Link>
          </Button>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

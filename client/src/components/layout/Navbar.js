import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import Button from "@mui/material/Card";

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
      <Button variant="contained">
        <Link to="/" style={{ margin: "10px" }}>
          Home
        </Link>
      </Button>

      {loggedIn === false && (
        <>
          <Button variant="contained">
            <Link to="/register" style={{ margin: "10px" }}>
              Register
            </Link>
          </Button>
          <Button variant="outlined"color="secondary">
            <Link to="/login" style={{ margin: "10px" }}>
              Login
            </Link>
          </Button>
        </>
      )}
      {loggedIn === true && (
        <>
          <Button variant="contained">
            <Link to="/customer" style={{ margin: "10px",marginLeft: "10px" }}>
              Customer
            </Link>
          </Button>
          <Button variant="contained">
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

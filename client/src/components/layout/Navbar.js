import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

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
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>

      {loggedIn === false && (
        <>
          <Link to="/register" style={{ margin: "10px" }}>
            Register
          </Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer">Customer</Link>
          <LogOutBtn />
          <Link to="/backpack">Backpack</Link>
        </>
      )}
    </div>
  );
}

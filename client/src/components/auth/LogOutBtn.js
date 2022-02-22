import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../layout/Navbar.css";

export default function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logout() {
    await axios.get("http://localhost:5000/auth/logout"); //returns an empty cookie
    await getLoggedIn();
    navigate("/");
  }

  return <button onClick={logout} id="logoutBtn">Logout</button>;
}

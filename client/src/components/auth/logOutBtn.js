import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function logOutBtn() {

  const {getLoggedIn} = useContext

  async function logout() {
await axios.get("http://localhost:5000/auth/logout");//returns an empty cookie

  }

  return <button onClick={logout}>
  
  Logout
  
  </button>
  
}

import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


export default function LogOutBtn() {

  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logout() {
    await axios.get("http://localhost:5000/auth/logout"); //returns an empty cookie
    await getLoggedIn();
   
  }

  return <button onClick={logout}>Logout</button>;
}

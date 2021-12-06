import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export default function AuthContextProvider() {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/");
    setLoggedIn(loggedInRes.data); //sets it to the boolean true or false
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return <AuthContext.Provider></AuthContext.Provider>;
}

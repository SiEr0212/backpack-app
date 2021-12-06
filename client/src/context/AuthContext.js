import React from "react";
import axios from "axios";

export default function AuthContextProvider() {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/");
  }
  return <></>;
}

import React from "react";

export default function logOutBtn() {
  async function logout() {
await axios.get("http://localhost:5000/auth/logout");//returns an empty cookie

  }

  return <button onClick={logout}>
  
  Logout
  
  </button>
  
}

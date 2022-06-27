import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Backpacks from "./components/backpack/Backpacks";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Customers from "./components/customers/Customers";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" />
        {loggedIn === false && (
          <>
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/customer" element={<Customers />} />

            <Route path="/backpack" element={<Backpack />} />
            <Route path="/backpacks" element={<Backpacks />} />
          </>
        )}
      </Routes>
    </>
  );
}
export default Router;

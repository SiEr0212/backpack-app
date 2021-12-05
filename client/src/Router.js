import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Backpack from "./components/Backpack";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function Router() {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route exact path="/" />

        <Route path="/register" element={ <Register />} />
        
        <Route path="/login" element={<Login />}/>

        <Route path="/customer" />

        <Route path="/backpack" element = {<Backpack />} />
      
      </Routes>
    </>
  );
}
export default Router;

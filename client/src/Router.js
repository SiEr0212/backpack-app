import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Backpack from "./components/Backpack";

function Router() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" />
        <div>Home</div>
        <Route path="/register" />
        <div>Register</div>
        <Route path="/login" />
        <div>Login</div>
        <Route path="/customer" />
        <div>Customer</div>
        <Route path="/backpack" />
        <div>Backpack</div>
      </Routes>
    </>
  );
}
export default Router;

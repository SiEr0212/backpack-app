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
      
        <Route path="/register" />
        
        <Route path="/login" />
        
        <Route path="/customer" />
        
        <Route path="/backpack" />
        
      </Routes>
    </>
  );
}
export default Router;

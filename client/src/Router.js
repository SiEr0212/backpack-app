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
        <>Home</>
        <Route path="/register" />
        <>Register</>
        <Route path="/login" />
        <>Login</>
        <Route path="/customer" />
        <>Customer</>
        <Route path="/backpack" />
        <>Backpack</>
      </Routes>
    </>
  );
}
export default Router;

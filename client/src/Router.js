import React from "react";
import {  Routes, Route} from "react-router-dom";

 function Router() {
  return (
 
    <Routes>
      <Route exact path="/"/>
        
      <Route path="/register"/>
        
      <Route path="/login"/>
        
      <Route path="/customer"/>
        
      <Route path="/backpack"/>
        
    </Routes>
  
  );
  
}
export default Router;

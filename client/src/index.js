import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import App from "./App";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <BrowserRouter>
    <App   />
  </BrowserRouter>,
  document.getElementById("root")
);

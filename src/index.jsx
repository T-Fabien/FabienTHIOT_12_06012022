import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";

import "./styles/style.css";

const id = window.location.pathname.substring(6,8);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar pathname={window.location.pathname}/>
      <Routes>
        <Route exact path="*" element={<Home id={id}/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

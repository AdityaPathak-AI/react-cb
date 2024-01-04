import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="container">
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;

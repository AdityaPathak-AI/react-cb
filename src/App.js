import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Landing" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;

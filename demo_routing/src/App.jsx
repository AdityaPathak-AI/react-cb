import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Login from "./Component/Login";
import Menu from "./Component/Menu";
import Register from "./Component/Register";
class App extends React.Component
{

  render() 
  {
    return (
      <div className="container-fluid ">
        {/*
        <BrowserRouter>

          <Link to="/">Home</Link> &nbsp;&nbsp;
          <Link to="/about">About</Link> &nbsp;&nbsp;
          <Link to="/contact">Contact</Link> &nbsp;&nbsp;
          <Link to="/login">Login</Link> &nbsp;&nbsp;

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>

        </BrowserRouter>
       */}

       
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path = "/register" element={<Register/>}></Route> 
          </Routes>
        
      </div>
    );
  }
}
export default App; 

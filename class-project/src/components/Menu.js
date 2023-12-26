import { Link } from "react-router-dom";
import React from "react";

const Menu = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Portfolio
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact" >Contact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/Login">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </Link>
            </li>
            <li>
              <Link to="/Register">
                <span className="glyphicon glyphicon-user"></span> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;

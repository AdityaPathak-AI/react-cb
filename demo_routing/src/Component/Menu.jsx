import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component
{
    render() {
        return (
          <div>
            <Link to="/">Home</Link> &nbsp;&nbsp;
            <Link to="/about">About</Link> &nbsp;&nbsp;
            <Link to="/contact">Contact</Link> &nbsp;&nbsp;
            <Link to="/login">Login</Link> &nbsp;&nbsp;
          </div>
        );
    }

}
export default Menu
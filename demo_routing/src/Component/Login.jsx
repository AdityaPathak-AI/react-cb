import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component
{
    render() {
        return (
          <div className="container">
            <h1 style={{ textAlign: "center", color: "red" }}>Login Here</h1>
            <form>
              <div className="form-group">
                <label>Enter Email</label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <br />
              <div className="form-group">
                <label>Enter Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
                <br />
              </div>
              <div className="form-group">
                <input
                  type="button"
                  value="Login"
                  className="btn btn-success form-control"
                />
              </div>
            </form>
            <br />
            <Link to="/register">Register Here</Link>
          </div>
        );
    }

}
export default Login
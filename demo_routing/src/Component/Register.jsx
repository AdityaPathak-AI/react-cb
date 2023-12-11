import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", color: "red" }}>Register Here</h1>
        <form>
          <div className="form-group">
            <label>Enter Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
            />
          </div>
          <br/>
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
              placeholder="Enter Email"
              className="form-control"
            />
            <br />
          </div>
          <div className="form-group">
            <label>Enter Mobile</label>
            <br />
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="form-control"
            />
            <br />
            <div className="form-group">
              <label>Select Gender</label> &nbsp;
              <select>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-group">
            <input
              type="button"
              value="Register"
              className="btn btn-success form-control"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Register
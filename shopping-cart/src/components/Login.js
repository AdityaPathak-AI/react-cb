import React from "react";
const Login = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Login to Place Order</h1>
        </div>
      </div>
      <div className="container bg-3 text-center">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                <label for="email">Email address : </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-group">
                <label for="pwd">Password : </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success form-control">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

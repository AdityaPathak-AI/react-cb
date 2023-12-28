import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  var email = useRef();
  var password = useRef();

  const navigate = useNavigate();

  var loginUser = (event) => {
    event.preventDefault();
    var em = email.current.value;
    var pass = password.current.value;

    console.log(em + " : " + pass);

    if (em.status) {
      navigate();
    }
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Login Here !</h1>
        </div>
      </div>

      <div className="container-fluid bg-3 text-center">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={loginUser}>
              <div className="form-group">
                <label for="email">Email address : </label>
                <input
                  type="email"
                  ref={email}
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-group">
                <label for="pwd">Password : </label>
                <input
                  type="password"
                  ref={password}
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
}
export default Login;

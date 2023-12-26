import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();
    const em = email.current.value;
    const pass = password.current.value;

    const userCredentials = { email: em, password: pass };

    try {
      const response = await fetch(
        "http://tutorials.codebetter.in:7082/emall/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userCredentials),
        }
      );

      const result = await response.json();

      if (result.status) {
        navigate("/success");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      
    }
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Login Here !</h1>
        </div>
      </div>

      <div className="container bg-3 text-center">
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
};
export default Login;

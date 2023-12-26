import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  var name = useRef();
  var email = useRef();
  var password = useRef();
  var mobile = useRef();

  const navigate = useNavigate();

  var registerUser = (event) => {
    event.preventDefault();
    var nm = name.current.value;
    var em = email.current.value;
    var pass = password.current.value;
    var mob = mobile.current.value;

    console.log(nm + " : " + em + " : " + pass + " : " + mob);

    var obj = { name: nm, phone: mob, email: em, password: pass };
    console.log("Object is : " + obj);

    fetch("http://tutorials.codebetter.in:7082/emall/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log("Result is : " + res);
        console.log("String Result is : " + JSON.stringify(res));

        if (res.status) {
          navigate("/login");
        } else {
          navigate("/error");
        }
      })
      .catch((err) => {
        console.log("Error is : " + JSON.stringify(err));
      });
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Register Here !</h1>
        </div>
      </div>

      <div className="container bg-3 text-center">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={registerUser}>
              <div className="form-group">
                <label>Name : </label>
                <input
                  type="text"
                  className="form-control"
                  ref={name}
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label>Email address : </label>
                <input
                  type="email"
                  className="form-control"
                  ref={email}
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label>Password : </label>
                <input
                  type="password"
                  className="form-control"
                  ref={password}
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group">
                <label>Mobile : </label>
                <input
                  type="text"
                  className="form-control"
                  ref={mobile}
                  placeholder="Enter Mobile"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success form-control">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;

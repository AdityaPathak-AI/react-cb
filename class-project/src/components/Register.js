import { useRef } from "react";

function Register() {
  var name = useRef();
  var email = useRef();
  var password = useRef();
  var gender = useRef();
  var mobile = useRef();

  var registerUser = (event) => {
    event.preventDefault();
    var nm = name.current.value;
    var em = email.current.value;
    var pass = password.current.value;
    var mob = mobile.current.value;
    var gen = gender.current.value;

    console.log(nm + " : " + em + " : " + pass + " : " + mob + " : " + gen);
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Register Here !</h1>
        </div>
      </div>

      <div className="container-fluid bg-3 text-center">
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
              <div class="form-group">
                <label>Password : </label>
                <input
                  type="password"
                  className="form-control"
                  ref={password}
                  placeholder="Enter Password"
                />
              </div>
              <div class="form-group">
                <label>Mobile : </label>
                <input
                  type="text"
                  className="form-control"
                  ref={mobile}
                  placeholder="Enter Mobile"
                />
              </div>
              <div class="form-group">
                <label>Gender : </label>
                <select className="form-control" ref={gender}>
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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

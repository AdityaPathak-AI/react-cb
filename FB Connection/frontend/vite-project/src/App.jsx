import { useState } from "react";
import "./App.css";

import axios from "axios"



function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:4000/contact_us",formData).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    console.log("form data", formData);
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Login</h1>
        </div>
      </div>
      <div className="container bg-3 text-center">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="text">Name : </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formData.name}
                  name="name"
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password : </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleOnchange}
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

export default App;

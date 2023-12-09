import React from "react";
class AddStudent extends React.Component {
  constructor() {
    super();
    this.state = { checkStatus: false };
  }
  render() {
    return (
      <div className="container ">
        <div className="bg-success container">
          <h1 className="text-center">Edit Student Data:</h1>
          <form>
            <input
              type="number"
              placeholder="Enter Roll No"
              ref={(data) => (this.roll = data)}
              onBlur={this.checkValidation}
              onFocus={() => this.setState({ checkStatus: false })}
            />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Enter Name"
              ref={(data) => (this.name = data)}
            ></input>
            &nbsp;&nbsp;
            <select ref={(data) => (this.class = data)}>
              <option value="">Select Class</option>
              <option value="11th">11</option>
              <option value="12th">12</option>
            </select>
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter Physics Marks"
              ref={(data) => (this.p = data)}
            ></input>
            &nbsp;&nbsp;
            <input
              type="number"
              placeholder="Enter Chemistry Marks"
              ref={(data) => (this.c = data)}
            ></input>
            &nbsp;&nbsp;
            <input
              type="number"
              placeholder="Enter Maths Marks"
              ref={(data) => (this.m = data)}
            ></input>
            &nbsp;&nbsp;
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Fees"
              ref={(data) => (this.fees = data)}
            ></input>
            &nbsp;&nbsp;
            <input
              type="number"
              placeholder="Enter Mobile No"
              ref={(data) => (this.mobile = data)}
              onBlur={this.checkValidation}
              onFocus={() => this.setState({ checkStatus: false })}
            ></input>
            &nbsp;&nbsp;
            {this.state.checkStatus ? (
              <b style={{ color: "red" }}>
                Roll Number Or Mobile Already Exists
              </b>
            ) : (
              <button className="btn btn-primary">
                Add Student Data
              </button>
            )}
            <br />
          </form>
        </div>
      </div>
    );
  }
}
export default AddStudent;

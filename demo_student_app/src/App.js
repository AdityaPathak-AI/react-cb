import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      std: [
        {
          roll: 101,
          name: "Rudrapratap",
          fees: 50000,
          mobile: "9893180362",
          class: "12th",
          p: 53,
          c: 84,
          m: 56,
        },
        {
          roll: 102,
          name: "Divyendu",
          fees: 50000,
          mobile: "9893180363",
          class: "11th",
          p: 44,
          c: 44,
          m: 56,
        },
        {
          roll: 103,
          name: "Zorawar",
          fees: 50000,
          mobile: "7893180365",
          class: "12th",
          p: 83,
          c: 74,
          m: 76,
        },
        {
          roll: 104,
          name: "Vijayan",
          fees: 50000,
          mobile: "8893180672",
          class: "12th",
          p: 90,
          c: 44,
          m: 86,
        },
        {
          roll: 105,
          name: "Rudiger",
          fees: 50000,
          mobile: "6893180672",
          class: "12th",
          p: 90,
          c: 44,
          m: 86,
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="bg-success container">
          <h1 className="text-center">Enter Student Data:</h1>
          <form>
            <input
              type="number"
              placeholder="Enter Roll No"
              ref={(data) => (this.roll = data)}
            ></input>
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
              type="text"
              placeholder="Enter Mobile No"
              ref={(data) => (this.mobile = data)}
            ></input>
            &nbsp;&nbsp;
            <button className="btn btn-primary">Add Student Data</button>
            <br />
          </form>
        </div>

        <div className="table-responsive bg-info">
          <h1 className="text-center">Student Data</h1>

          <table className="table table-bordered table-striped table-hover bs-success text-dander">
            <thead>
              <tr>
                <th>sno</th>
                <th>Roll no</th>
                <th>Name</th>
                <th>Fees</th>
                <th>Mobile</th>
                <th>Class</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Maths</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody className="table">
              {this.state.std.map((data, index) => {
                let total = data.c + data.p + data.p;
                let per = (total / 3).toFixed(2);
                         
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.roll}</td>
                    <td>{data.name}</td>
                    <td>{data.class}</td>
                    <td>{data.fees}</td>
                    <td>{data.mobile}</td>
                    <td>{data.p}</td>
                    <td>{data.c}</td>
                    <td>{data.m}</td>
                    <td>{total}</td>
                    <td>{per}</td>
                    <td>
                      {per >= 60
                        ? "A Grade"
                        : per >= 55
                        ? "B Grade"
                        : per >= 45
                        ? "C Grade"
                        : per >= 33
                        ? "D Grade"
                        : "Fail..."}

                    </td>
                  </tr>
                );
              })}
              ;
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
class ArrayOfObjects extends React.Component {
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
      <div className="container bg-primary">
        <div className="table-responsive">
          <h1 className="text-center"> Student Data</h1>

          <table className="table table-bordered table-striped table-hover bg-success text-danger">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Fees</th>
                <th>Mobile</th>
                <th>Class</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Maths</th>
                <th>Total</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {this.state.std.map((data, index) => {
                let total = data.p + data.c + data.m;
                let per = (total / 3).toFixed(2);
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.roll}</td>  
                    <td>{data.name}</td>
                    <td>{data.fees}</td>
                    <td>{data.mobile}</td>
                    <td>{data.class}</td>
                    <td>{data.p}</td>
                    <td>{data.c}</td>
                    <td>{data.m}</td>
                    <td>{total}</td>
                    <td>
                      {per > 60
                        ? "A"
                        : per >= 55
                        ? "B"
                        : per >= 45
                        ? "C"
                        : per >= 33
                        ? "D"
                        : "Fail"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ArrayOfObjects;

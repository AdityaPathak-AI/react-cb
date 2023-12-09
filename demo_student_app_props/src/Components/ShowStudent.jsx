import React from "react";
class ShowStudent extends React.Component {
  render() {
    return (
      <div className="container bg-danger">
        <h1 className="text-center"> Student Data:</h1>
        <div className="table-responsive bg-primary">
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
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className="table">
              {this.props.stud.map((data, index) => {
                let total = data.c + data.p + data.m;
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
                      {per >= 90
                        ? "A Grade"
                        : per >= 80
                        ? "B Grade"
                        : per >= 70
                        ? "C Grade"
                        : per >= 60
                        ? "D Grade"
                        : "Fail..."}
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.props.editStud(data.roll)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.props.delStud(data.roll)}
                      >
                        Delete
                      </button>
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
export default ShowStudent;

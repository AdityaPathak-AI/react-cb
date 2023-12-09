import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      std: [
        {
          roll: 101,
          name: "Rudrapratap ",
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
          p: 70,
          c: 64,
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
          name: "Antonie Rudiger",
          fees: 50000,
          mobile: "6893180672",
          class: "12th",
          p: 90,
          c: 44,
          m: 86,
        },
      ],
      checkStatus: false,
    };
  }


  addStudentdata = (event) => 
  {
    alert("New Student Added.");
    event.preventDefault();

    var Rno = this.roll.value;
    var nm = this.name.value;
    var cls = this.class.value;
    var fees = this.fees.value;
    var mob = this.mobile.value;
    var ph = this.p.value * 1;
    var ch = this.c.value * 1;
    var mh = this.m.value * 1;

    if (
      !Rno ||
      !nm ||
      !cls ||
      !fees ||
      !mob ||
      isNaN(ph) ||
      isNaN(ch) ||
      isNaN(mh) ||
      mob.length !== 10
      ) 
     {
      alert("Please fill in all the fields and enter valid numerical values for marks.");
      return;
    }
    
    //Student Object Created

    var obj = {
      roll: Rno,
      name: nm,
      class: cls,
      mobile: mob,
      fees: fees,
      p: ph,
      c: ch,
      m: mh,
    };

    //get std state

    var arr = this.state.std;
    arr.push(obj); //object added in array

    //array set on state
    this.setState({ std: arr });
  };

  checkValidation = (event) => {
    var data = event.target.value;
    console.log(data);

    for (var st of this.state.std) {
      //console.log(st);
      if (data == st.roll || data == st.mobile ) {
        this.setState({ checkStatus: true });
      }
    }
  };


  editStudentdata = (index) => 
  {
    
    
  };

  deleteStudentdata = (index) => 
  {
    const updatedStudents = [...this.state.std];
    updatedStudents.splice(index, 1);
    this.setState({ std: updatedStudents });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="bg-warning container">
          <h1 className="text-center">Enter Student Data:</h1>
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
              <button onClick={this.addStudentdata} className="btn btn-primary">
                Add Student Data
              </button>
            )}
            <br />
          </form>
        </div>
        <hr />

        <div className="table-responsive bg-warning ">
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
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className="table">
              {this.state.std.map((data, index) => {
                let total = data.c + data.p + data.m;
                let per = (total / 3).toFixed(2);
                
                return (
                  <tr key={index}>
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
                      <button className="btn btn-success"onClick={this.editStudentdata}>Edit</button>
                       &nbsp;
                      <button className="btn btn-danger" onClick={this.deleteStudentdata}>Delete </button>
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

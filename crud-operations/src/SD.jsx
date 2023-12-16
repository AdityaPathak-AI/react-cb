import { useRef, useState } from "react";

function SD() {
  var roll = useRef();
  var name = useRef();
  var fees = useRef();
  var mobile = useRef();
  var p = useRef();
  var c = useRef();
  var m = useRef();
  var cls = useRef();

  const [std, setStd] = useState([
    {
      roll: 101,
      name: "Rudrapratap ",
      fees: 50000,
      mobile: "9893180362",
      cls: "12th",
      p: 53,
      c: 84,
      m: 56,
    },
    {
      roll: 102,
      name: "Divyendu",
      fees: 50000,
      mobile: "9893180363",
      cls: "11th",
      p: 70,
      c: 64,
      m: 56,
    },
    {
      roll: 103,
      name: "Zorawar",
      fees: 50000,
      mobile: "7893180365",
      cls: "12th",
      p: 83,
      c: 74,
      m: 76,
    },
    {
      roll: 104,
      name: "Vijayan",
      fees: 50000,
      mobile: "8893180672",
      cls: "12th",
      p: 90,
      c: 44,
      m: 86,
    },
    {
      roll: 105,
      name: "Antonie Rudiger",
      fees: 50000,
      mobile: "6893180672",
      cls: "12th",
      p: 90,
      c: 44,
      m: 86,
    },
  ]);

  var addStudent = (event) => {
    event.preventDefault();
    var rno = roll.current.value;
    var nm = name.current.value;
    var mob = mobile.current.value;
    var fs = fees.current.value;
    var cs = cls.current.value;
    var ph = p.current.value * 1;
    var ch = c.current.value * 1;
    var ma = m.current.value * 1;

    var obj = {
      roll: rno,
      name: nm,
      cls: cs,
      p: ph,
      c: ch,
      m: ma,
      mobile: mob,
      fees: fs,
    };

    setStd([...std, obj]);
  };

  const [st, setSt] = useState({});
  var editStudent = (rno) => {
    for (var st of std) {
      if (st.roll == rno) {
        setSt(st);
      }
    }
  };

  return (
    <div className="container bg-info">
      <h1 style={{ textAlign: "center", color: "red" }}>
        Enter Student Records
      </h1>
      <input type="number" placeholder="Enter the roll no" ref={roll} />
      &nbsp;&nbsp;
      <input type="text" placeholder="Enter the Name" ref={name} />
      &nbsp;&nbsp;
      <select ref={cls}>
        <option value="">Select Class</option>
        <option value="11th">11</option>
        <option value="12th">12</option>
      </select>
      <br />
      <br />
      <input type="number" placeholder="Enter the phy marks" ref={p} />
      &nbsp;&nbsp;
      <input type="number" placeholder="Enter the chem marks" ref={c} />
      &nbsp;&nbsp;
      <input type="number" placeholder="Enter the maths marks" ref={m} />
      <br />
      <br />
      <input type="text" placeholder="Enter the fees" ref={fees} />
      &nbsp;&nbsp;
      <input type="number" placeholder="Enter the Mobile No." ref={mobile} />
      &nbsp;&nbsp;
      <div className="form-group">
        <button className="btn btn-success form-control" onClick={addStudent}>
          {" "}
          Add Student Data
        </button>
      </div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Show Student Data :{" "}
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Roll</td>
              <td>Name</td>
              <td>Class</td>
              <td>Fees</td>
              <td>Mobile</td>
              <td>Phy</td>
              <td>Chem</td>
              <td>Maths</td>
              <td>Total</td>
              <td>Per</td>
              <td>Grade</td>
              <td>Operation</td>
            </tr>
          </thead>
          <tbody>
            {std.map((data, index) => {
              var total = data.p + data.c + data.m;
              var per = (total / 3).toFixed(3);
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.roll}</td>
                  <td>{data.name}</td>
                  <td>{data.cls}</td>
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
                      : "Fail"}
                  </td>
                  <td>
                    <button onClick={() => editStudent(data.roll)}>Edit</button>
                    &nbsp;&nbsp;||&nbsp;&nbsp;
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <h1 style={{ textAlign: "center", color: "red" }}>
          Upadate Student Records
        </h1>
        <input
          type="number"
          placeholder="Enter the roll no"
          ref={roll}
          disabled
          value={st.roll}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter the Name"
          ref={name}
          value={st.name}
        />
        &nbsp;&nbsp;
        <select ref={cls}>
          <option value="">Select Class</option>
          <option value="11th">11</option>
          <option value="12th">12</option>
        </select>
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter the phy marks"
          ref={p}
          value={st.p}
        />
        &nbsp;&nbsp;
        <input
          type="number"
          placeholder="Enter the chem marks"
          ref={c}
          value={st.c}
        />
        &nbsp;&nbsp;
        <input
          type="number"
          placeholder="Enter the maths marks"
          ref={m}
          value={st.m}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter the fees"
          ref={fees}
          value={st.p}
        />
        &nbsp;&nbsp;
        <input
          type="number"
          placeholder="Enter the Mobile No."
          ref={mobile}
          value={st.mobile}
        />
        &nbsp;&nbsp;
        <div className="form-group">
          <button className="btn btn-success form-control">
            {" "}
            Upadate Student Data
          </button>
        </div>
      </div>
    </div>
  );
}
export default SD;

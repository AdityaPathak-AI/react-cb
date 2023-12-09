import React from 'react';
import ShowStudent from './Components/ShowStudent';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
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

  

  addStudentData = (event) => {
    event.preventDefault();

    // Retrieve values from form fields
    const Rno = this.roll.current.value;
    const nm = this.name.current.value;
    const cls = this.class.current.value;
    const fees = this.fees.current.value;
    const mob = this.mobile.current.value;
    const ph = parseInt(this.p.current.value, 10);
    const ch = parseInt(this.c.current.value, 10);
    const mh = parseInt(this.m.current.value, 10);

    // Basic validation
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
    ) {
      alert(
        "Please fill in all the fields and enter valid numerical values for marks."
      );
      return;
    }

    // Check if the roll number or mobile already exists
    const isRollExist = this.state.std.some((student) => student.roll === Rno);
    const isMobileExist = this.state.std.some(
      (student) => student.mobile === mob
    );

    if (isRollExist || isMobileExist) {
      alert("Roll number or mobile already exists.");
      return;
    }

    // Create a new student object
    const newStudent = {
      roll: Rno,
      name: nm,
      class: cls,
      mobile: mob,
      fees: fees,
      p: ph,
      c: ch,
      m: mh,
    };

    // Update the state
    this.setState((prevState) => ({
      std: [...prevState.std, newStudent],
    }));

    // Optional: Reset form fields
    this.roll.current.value = "";
    this.name.current.value = "";
    this.class.current.value = "";
    this.fees.current.value = "";
    this.mobile.current.value = "";
    this.p.current.value = "";
    this.c.current.value = "";
    this.m.current.value = "";

    alert("New Student Added.");
  };

  editStudentData = (roll) => {
    alert(roll);

    for (var obj of this.state.std) {
      if (roll == obj.roll) {
        var rn = obj.roll;
        var nm = obj.name;
        var fes = obj.fees;
        var mob = obj.mobile;
        var cl = obj.c;
        var ph = obj.p * 1;
        var cm = obj.c * 1;
        var ma = obj.m * 1;

        console.log(
          rn +
            ":" +
            nm +
            ":" +
            fes +
            ":" +
            mob +
            ":" +
            cl +
            ":" +
            ph +
            ":" +
            cm +
            ":" +
            ma +
            ":"
        );
      }
    }
  };

  deleteStudentData = (index) => {
    const updatedStudents = [...this.state.std];
    updatedStudents.splice(index, 1);
    this.setState({ std: updatedStudents });
  };

  render() {
    return (
      <div className="container">
        <AddStudent addStudentData={this.addStudentData} />
        <hr />
        <ShowStudent
          stud={this.state.std}
          editStud={this.editStudentData}
          delStud={this.deleteStudentData}
        />
        <EditStudent />
      </div>
    );
  }
}
export default App;


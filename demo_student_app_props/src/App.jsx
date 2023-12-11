import React from "react";
import ShowStudent from "./Components/ShowStudent";
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
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

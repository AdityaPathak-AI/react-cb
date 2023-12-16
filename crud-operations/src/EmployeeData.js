import React from "react";
class EmployeeData extends React.Component
{
  
  state = {emp:[{ id:101, nameBox:'Richa', salaryBox:10000, deptBox:"developer",}],
          update:[]
}

  addData = (event)=>{

    event.preventDefault();

    var id = this.id.value;
    var nameBox = this.nameBox.value;
    var salaryBox = this.salaryBox.value;
    var deptBox = this.deptBox.value;

    var data = {id,nameBox,salaryBox,deptBox}

    console.log(data)

   var arr = this.state.emp;
   arr.push(data)

   this.setState({emp:arr})
   var arr1 = [...this.state.emp,arr]
   localStorage.setItem("setdata",JSON.stringify(arr1));

  }

  
  delete=(id)=>{
    this.setState({emp: this.state.emp.filter(n => n.id !== id)})  
  }

  update = (id) =>{

    console.log(id)

    var getData = this.state.emp.find((n) => n.id === id);
    console.log(getData)

    this.setState({update : getData})
    // console.log(this.state.update)
  }

  EditData = (event)=>{

    event.preventDefault()
    var id =this.state.update.id
    // console.log("dara= ", id)

    
    var obj = {id : this.uid.value, nameBox : this.uname.value,  salaryBox: this.usalary.value, deptBox: this.udept.value }

    console.log(obj)

    var ind = this.state.emp.findIndex(n => n.id === id)
    console.log(ind)
    var arr = [...this.state.emp];
    console.log(arr)

    arr.splice(ind, 1, obj) // splice : (index, delete, update value)

    this.setState({emp:arr});

  }

  render() {

    var ar = this.state.update.id;
    console.log(ar)

    return<>
    
    <div className="container">
    <h1 style={{color:"red", textAlign:"center"}}>Add Employee Data</h1>
      <form onSubmit={this.addData} >
        <input type="text" placeholder="Enter your id"  ref={(data) => this.id = data} />&nbsp;&nbsp;

        <input type="text" placeholder="Enter your name" ref={(data) => this.nameBox = data} />&nbsp;&nbsp;

        <input type="Number" placeholder="Enter your Salary"  ref={(data) => this.salaryBox = data} />&nbsp;&nbsp;

        <input type="text" placeholder="Enter Department" ref={(data) => this.deptBox = data} />
        <br/><br/>
        <button className="btn btn-danger " type="submit" >Add Data</button>
      </form>
    </div>

      <div className="conatainer">
      <h1 style={{color:"red", textAlign:"center"}}>Employee Data</h1>

        <table className="table table-responsive">
          <thead >
            <tr>
              <th>S.no</th>
              <th>Employee id</th>
              <th>Employee Name</th>
              <th>Employee Salary</th>
              <th>Employee Department</th>
              <th>Oprations</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emp.map((data,index)=>{
              return<tr>
                <td>{index+1}</td>
                <td>{data.id}</td>
                <td>{data.nameBox}</td>
                <td>{data.salaryBox}</td>
                <td>{data.deptBox}</td>
                <td><button className="btn btn-success " onClick={() => this.update(data.id)}>Update</button>&nbsp;&nbsp;
                  <button className="btn btn-danger " onClick={() => this.delete(data.id)}>Delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>

      <div className="container">
      <h1 style={{color:"red", textAlign:"center"}}>Update Data</h1>

      <form onSubmit={this.EditData} >

        <input type="text" value={this.state.update.id} placeholder="Enter your id"  ref = {(data) => this.uid = data} />&nbsp;&nbsp;

        <input type="text" defaultValue={this.state.update.nameBox} placeholder="Enter your name" ref = {(data) => this.uname = data} />&nbsp;&nbsp;

        <input type="Number" defaultValue={this.state.update.salaryBox} placeholder="Enter your Salary" ref = {(data) => this.usalary=data}  />&nbsp;&nbsp;

        <input type="text" defaultValue={this.state.update.deptBox} placeholder="Enter Department" ref = {(data) => this.udept = data }/>
        <br/><br/>
        <button className="btn btn-danger " type="submit" >Update Data</button>
      </form>
    </div>
    </>

    }
}
export default EmployeeData
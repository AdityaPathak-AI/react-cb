import React from "react";
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = { x:10 , name: "Aditya"}
  }
  changeData = ()=>{
    this.setState({ x:100 , name: "Sumit"});
  }
  render()
  {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "red" }}> Events </h1>
        <b>Value of x is: {this.state.x}</b> &nbsp;&nbsp;
        <b>Name is: {this.state.name}</b> <br />
        <br />
        <button onClick={this.changeData}> Change Data</button> &nbsp;&nbsp;
        <button onClick={() => alert("Hello...")}> Click Here</button>{" "}
        &nbsp;&nbsp;
        <button onClick={()=> this.setState({x: 200, name :"Vilamidir"})}> Click Here</button>
      </>
    );

  }
}
export default App
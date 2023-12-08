import React from "react";
import Display from "./Component/Display";
class Addition extends React.Component {
  constructor() 
  {
    super();
    this.state = { x: 0 , y:0 };
  }
  getUserData = () => {
    var a = this.x.value*1;
    var b = this.y.value*1;

    this.setState({ x: a , y:b });
  };

  render() {
    return (
      <div>
        <h1>App1:</h1>
        <input
          type="text"
          placeholder="Enter Value of x:"
          ref={(data) => (this.x = data)}
        /> 
        <input type="text" 
        placeholder="Enter Value of y:"
        ref={(data) => (this.y = data)}
        />
        <button onClick={this.getUserData}>Get User Data</button>
        <Display a={this.state.x + this.state.y} />
      </div>
    );
  }
}
export default Addition;

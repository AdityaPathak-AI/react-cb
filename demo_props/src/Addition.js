import React from "react";
import Display1 from "./Component/AdditionComponent";
class Addition extends React.Component {
  constructor() {
    super();
    this.state = { x: 0 , y:0 };
  }
  getUserData = () => {
    var a = this.x.value;
    var b = this.y.value;

    this.setState({ x: a ,y:b });
  };

  render() {
    return (
      <div>
        <h1>App1:</h1>
        <input
          type="text"
          placeholder="Enter Value of x is:"
          ref={(data) => (this.x = data)}
        />
        <button onClick={this.getUserData}>Get User Data</button>
        <Display1 a={this.state.x} />
      </div>
    );
  }
}
export default Addition;

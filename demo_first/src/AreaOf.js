import React from "react";
class AreaOf extends React.Component {
  constructor() {
    super();
    this.state = {
      length: 5,
      breadth: 6,
      height: 8,
      radius: 2,
      a: 4,
      pi: 3.14,
    };
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "red" }}>
          Areas of Some Shapes
        </h1>
        <b>Area of Circle is: {this.state.pi * (this.state.radius * 2)}</b>
        <br />
        <hr />
        <b>Area Of Rectangle is: {this.state.length * this.state.breadth}</b>
        <br />
        <hr />
        <b>Area of Square is : {this.state.a ** 2}</b>
        <br />
        <hr />
        <b>Area of Triangle is: {1/2*this.state.breadth*this.state.height}</b>
      </>
    );
  }
}
export default AreaOf;

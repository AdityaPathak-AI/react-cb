import React from "react";
class SimpleInterest extends React.Component {
  constructor() {
    super();
    this.state = { principal: 50000, rate: 6, time: 2 };
  }
  render() {
    return (
      <>
        <b>Principal Amount : {this.state.principal}</b>
        <br />
        <b>Rate Amount : {this.state.rate}</b>
        <br />
        <b>Time : {this.state.time}</b>
        <br />
        <h1 style={{ textAlign: "center" }}>
          Simple Interest is :
          {(this.state.principal * this.state.rate * this.state.time) / 100}
        </h1>
      </>
    );
  }
}
export default SimpleInterest;

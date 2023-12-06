import React from "react";
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { x: 0, y: 0, add: 0 };
  }
  showResult = () => {
    var a = this.x.value * 1;
    var b = this.y.value * 1;
    var add = a + b;
    var substract = a - b;
    var multiply = a * b;
    var division = a / b;

    this.setState({
      x: a,
      y: b,
      z: add,
      l: substract,
      m: multiply,
      n: division,
    });
  };
  render() {
    return (
      <>
        <button>1</button> &nbsp;
        <button>2</button> &nbsp;
        <button>3</button> <br />
        <button>4</button> &nbsp;
        <button>5</button> &nbsp;
        <button>6</button> <br />
        <button>7</button> &nbsp;
        <button>8</button> &nbsp;
        <button>9</button> <br />
        <button>Addition</button> &nbsp;
        <button>Substraction</button> &nbsp;
        <button>Multiplication</button> &nbsp;
        <button>Division</button> &nbsp;
        <h1 style={{ textAlign: "center", color: "red" }}>Enter Data</h1>
        <input
          type="text"
          placeholder="Enter value of x"
          ref={(data) => (this.x = data)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Value of y"
          ref={(data) => (this.y = data)}
        />
        &nbsp;&nbsp;
        <button onClick={this.showResult}>Click to perform operations</button>
        <h1>Value of x is: {this.state.x}</h1>
        <h1>Vaue of y is:{this.state.y}</h1>
        <h1>Addition is: {this.state.z}</h1>
        <h1>Subtraction is: {this.state.l}</h1>
        <h1>Multiplication is: {this.state.m}</h1>
        <h1>Division is: {this.state.n}</h1>
      </>
    );
  }
}

export default Calculator;

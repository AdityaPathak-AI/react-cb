import React from "react";
class Calculator extends React.Component
{
    constructor()
    {
        super();
        this.state = { x: 0, y: 0, add: 0 };
    }
    showResult = () =>
    {
        var a = this.x.value * 1;
        var b = this.y.value * 1;
        var add = a + b;
        var substract = a-b;
        var multiply = a*b;
        var division = a/b;
        
        this.setState({ x: a, y: b, z: add , l:substract , m:multiply , n:division });

    }
    render()
    {
        return (
          <>
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

export default Calculator
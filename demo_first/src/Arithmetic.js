import React from "react";
class Arithmetic extends React.Component
{
    constructor(){
        super()
        this.state = {x:10 , y:20}
    }
    render()
    {
        return (
          <>
            <h1 style={{ textAlign: "center", color: "red" }}>
              Perform Arithmetic Operation
            </h1>
            <b>Value of x is : {this.state.x}</b>
            <br />
            <br />
            <b>Value of y is : {this.state.y}</b>
            <h1>Addition is : {this.state.x + this.state.y}</h1>
            <br/>
            <h1>Substraction is : {this.state.x - this.state.y}</h1>
            <br/>
            <h1>Multiplication is : {this.state.x * this.state.y}</h1>
            <br/>
            <h1>Division is : {this.state.x / this.state.y}</h1>
            <br/>
            <h1>Modulus is : {this.state.x % this.state.y}</h1>
            <br/>
          </>
        );
    }
}
export default Arithmetic;
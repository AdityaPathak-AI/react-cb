import React from 'react'
class Addition extends React.Component
{
    constructor()
    {
        super();
        this.state = {x:0 , y:0 , z:0}
    }
    showData = () => 
    {
        var a = this.x.value*1;
        var b = this.y.value*1;
        var c = a+b
        this.setState({x:a , y:b , z:c})
    }
    render() {
        return (
          <>
            <h1 style={{ textAlign: "center", color: "red" }}>
              Enter Data or User Input:
            </h1>
            <input
              type="text"
              placeholder="Enter Value of x"
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
            <button onClick={this.showData}>Click to Add</button>
            <h1> Value of x is: {this.state.x}</h1>
            <h1>Value of y is: {this.state.y}</h1>
            <h1>Addition is : {this.state.z}</h1>
            <h1>Addition is :{this.state.x + this.state.y}</h1>
          </>
        );
    }

}
export default Addition
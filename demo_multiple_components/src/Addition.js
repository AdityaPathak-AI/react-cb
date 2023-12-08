import React from "react";
class Addition extends React.Component
{
    constructor()
    {
        super()
        this.state = {x:0,y:0}
    }
    add = () =>
    {
        var a = this.x.value*1;
        var b = this.y.value*1;

        this.setState({x:a,y:b});
    }


    render() {
        return (
          <>
            <h1>Addition: </h1>
            <input
              type="number"
              placeholder="Enter Value of x"
              ref={(data) => (this.x = data)}
            />
            &nbsp;&nbsp;
            <input
              type="number"
              placeholder="Enter Value of y"
              ref={(data) => (this.y = data)}
            />
            &nbsp;&nbsp;
            <input type="button" value="Addition" onClick={this.add} />
            <br/>
            <h1>Addition is : {this.state.x + this.state.y}</h1>
          </>
        );
    }

}
export default Addition;

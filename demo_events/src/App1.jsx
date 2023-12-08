import React from "react";
class App1 extends React.Component
{
    constructor()
    {
        super();
        this.state = {x:0 , data : ''}
    }
    showData = () =>
    {
        var a = this.x.value;
        var cont = this.content.value;

        console.log(a + ":" + cont);

        this.setState({x:a , data:cont})
    }

    render()
    {
        return (
          <>
            <h1 style={{ textAlign: "center", color: "red" }}>
              {" "}
              Enter Data or User Input:
            </h1>
            <input
              type="text"
              placeholder="Enter value of x"
              ref={(data) => (this.x = data)}
            />
            <br />
            <br />
            <input type="text" placeholder="Enter any Data"  ref={(res)=>this.content = res}/>
            &nbsp;&nbsp;
            <button onClick={this.showData}>Send Data</button>

            <h1>Age is: {this.state.x}</h1>
            <h1>Name is: {this.state.data}</h1>
          </>
        );
    }

}
export default App1
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello",
    };
  }
  changeHandeler = (event) => {
    var data = event.target.value;
    this.setState({ msg: data });
  };
  show = (event) => {
    alert(event.target.innerHTML);
  };
  render() {
    return (
      <div>
        <h1>App Component : {this.state.msg}</h1>
        <input
          type="text"
          value={this.state.msg}
          onChange={this.changeHandeler}
        />
        <hr />
        <b>Indore</b> &nbsp;
        <b>Jaipur</b> &nbsp; 
        <b>Pune</b> &nbsp;
        <b>Srinagar</b> &nbsp;
      </div>
    );
  }
}
  
export default App
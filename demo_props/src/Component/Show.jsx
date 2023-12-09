import React from "react";
class Show extends React.Component 
{
  render() {
    return (
      <div>
        <button onClick={this.props.wishData}>Show Called...</button>
        &nbsp; &nbsp;
        <button onClick={() => this.props.sendData("Thala")}>
          Show Called...
        </button>
      </div>
    );
  }
}
export default Show;

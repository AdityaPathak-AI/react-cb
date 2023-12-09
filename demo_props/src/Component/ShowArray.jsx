import React from "react";
class ShowArray extends React.Component {
  render() {
    return (
      <>
        {this.props.ar.map((data, index) => {
          return (
            <b>
              {index+1} &nbsp;&nbsp;{data} <br />
            </b>
          );
        })}
      </>
    );
  }
}
export default ShowArray;

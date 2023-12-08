import React from "react";
import Show from "./Component/Show";
class App3 extends React.Component 
{
  
  wish = () => {
    console.log("Hello");
    alert("wish called...");
  };

  getData = (name) => {
    console.log(name);
    alert(name);
  };

  render() {
    return (
      <div>
        <h1>App:</h1>
        <Show wishData={this.wish} sendData={this.getData} />
      </div>
    );
  }
}
export default App3;

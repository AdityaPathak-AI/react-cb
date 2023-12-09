import React from "react";
import ShowArray from "./Component/ShowArray";
class App4 extends React.Component {
  constructor() {
    super();
    this.state = { arr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] };
  }
  render() {
    return (
      <>
        <ShowArray ar={this.state.arr} />
      </>
    );
  }
}
export default App4;

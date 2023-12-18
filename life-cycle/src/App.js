import React from 'react';
import Show from "./Show";


/*
Mounting : component is shown at first time
  constructor
  render
  componentDidMount

Updating : component state change
  shouldComponentUpdate
  render
  componentDidUpdate
  

Unmounting : component Destruction  
  componentWillUnmount
*/

class App extends React.Component
{
  constructor(){
    super();
    console.log("Test");

  }
  render() {
    return (
       <div>

       </div>
    );
  }

}
export default App
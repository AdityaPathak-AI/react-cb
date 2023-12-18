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
    this.state = {
      showVisible : false
    }
  }
  render() {
    return <div>
        <button onClick={()=> this.state({showVisible:true})}>Show</button>
        <button onClick={()=> this.state({showVisible:false})}>Hide</button>
        <hr/>
        {this.state.showVisible?<Show/>:"No Component Found!"} 
  </div>

}
}
export default App;
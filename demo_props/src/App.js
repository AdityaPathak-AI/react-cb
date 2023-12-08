import React from 'react';
import Display from './Component/Display';

class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {x:10};
  }
  render() {
    return (
      <>
      <h1>App</h1>
      <Display a = {this.state.x}/>
      </>
       
    );
  }
}

export default App


/* 
Data Passing: From Parent to Child
<ChildTag key = {value or state}/>

key: It is Unique
   : Can not be duplicate in the child Tag.


  We can pass any type of data and Function.

 */
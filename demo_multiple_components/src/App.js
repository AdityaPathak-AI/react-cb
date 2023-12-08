import React from 'react'
import Display from './Display';
import Home from './Home';
import Addition from './Addition'
import Student from './Component/Student';
class App extends React.Component
{
  render()
  {
    return(
    <>
    <h1>App Component Called...</h1>
    <Display/>
    <Home/>
    <hr/>
    <Addition/>
    <hr/>
    <Student/>
    </>
    )
  }
}
export default App;
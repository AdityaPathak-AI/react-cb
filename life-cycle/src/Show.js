import React from 'react';
class Show extends React.Component
{
    constructor()
    {
        super();
        console.log("Show Component: Contructor Called...");
        this.state = {num:50}
    }
}

    componentDidUpdate(){
        console.log("Show Component:Did Mount");
    }
    componentWillMount(){
        console.log("Show Component : Will Mount");
    }
    componentDidUpdate(){
        console.log("Show Component : Did Update");
    }
    shouldComponentUpdate(newProps , newState)
    {
        console.log("Show Component : Should Component");
        console.log("State:" , newState)
        console.log("Props:", newProps);
        if(newState.num%2 == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
        render() {
       console.log("Show Component : Render");
       return<div>
        <h2>Show Component : {this.state.num}</h2>
        <button onClick={()=> this.setState({num:this.state.num++})}>Increment</button>
       </div>
    }
    }
    


export default Show;
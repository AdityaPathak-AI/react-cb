import React from "react";
class Show extends React.Component{
    constructor()
    {
        super();
        console.log("Show Component : constructor called....");
        this.state = {num : 50}
    }
    componentDidMount(){
        console.log("Show Component : Did Mount")
    }

    componentWillUnmount(){
        console.log("Show Component : Will Un-Mount")
    }

    componentDidUpdate(){
        console.log("Show Component : Did Update")
    }

    shouldComponentUpdate(newProps,newState)
    {
        console.log("Show Component : Should component")
        console.log("state : " , newState)
        console.log("Props : " , newProps)

        if(newState.num%2===0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    render()
    {
        console.log("Show Component : Render called")
        return<div>
            <h2>Show Component : {this.state.num}</h2>
            <button onClick={()=>this.setState({num:this.state.num+1})}>Increment</button>
        </div>
    }
}
export default Show;
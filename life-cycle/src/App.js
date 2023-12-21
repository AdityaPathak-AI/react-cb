import React from "react";
import Show from "./Show";
//import { render } from "@testing-library/react";
/* mounting : components is show at first time

constructor
render
componentDidMount

updating : components state ChannelMergerNode
shouldcomponentupdate
render
componentDidUpdate

unmounting : component destroy

componentwillunmount

*/



class App extends React.Component{
    constructor()
    {               
        super();
        this.state = {
            showvisible : false
        }
    }
    render()
    {
        return<div>
            <button onClick={()=>this.setState({showvisible:true})}>Show</button>
            &nbsp;&nbsp;
            <button onClick={()=>this.setState({showvisible:false})}>Hide</button>
            &nbsp;&nbsp;
            <hr/>
            {this.state.showvisible?<Show/>:"No Component Found !"}
        </div>
    }
}
export default App
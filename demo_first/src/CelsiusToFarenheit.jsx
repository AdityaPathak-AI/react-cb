import React from "react";
class CelsiusToFarenheit extends React.Component{
    constructor(){
        super();
        this.state = {Farenheit : 92}
    }
    render(){
        return<>
            <h1 style={{textAlign:'center' , color:'red' , backgroundColor:'yellow'}}>Temperature in Farenheit is: {this.state.Farenheit}</h1>
            <b>Tempertaure in Celsius is: {(this.state.Farenheit-32)*5/9}</b>
        </>
    }

}
export default CelsiusToFarenheit
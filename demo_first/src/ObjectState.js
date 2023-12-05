import React from "react";
class ObjectState extends React.Component
{
    constructor()
    {
        super()
        this.state = {roll:101 , name:"Rudrapratap" , fees:1234.5 , mobile : '9893180362'}
    }
    render()
    {
        return (
          <div>
            <b>{this.state.roll}</b> &nbsp;&nbsp;
            <b>{this.state.name}</b> &nbsp;&nbsp;
            <b>{this.state.fees}</b> &nbsp;&nbsp;
            <b>{this.state.mobile}</b>
          </div>
        );
    }


}
export default ObjectState
import React from "react";
class ArrayReverse extends React.Component
{
    constructor()
    {
        super();
        this.state = {Array : [1,2,3,4,5]};
    }
    
    render()
    {
        const originalArray = this.state.Array
        const reversedArray = [];

        for (let i = originalArray.length-1 ; i >= 0; i--) {
            reversedArray.push(originalArray[i]); 
        }

        return (
          <div>
            <h1 style= {{ textAlign: "center", marginTop: "25px"}}> Original Array is :{this.state.Array} </h1>
            <h1 style= {{ textAlign: "center", marginTop: "20px"}}> Reversed Array is :{reversedArray} </h1>
          </div>
        );
    }
}
export default ArrayReverse
import React from "react";
class ArraySum extends React.Component
{
    constructor(){
        super()
        this.state = {numbers: [1, 2, 3, 4, 5]};
    }
    calculateSum = () =>{
        const {numbers} = this.state;
        return numbers.reduce((acc,current)=> acc + current,0);
    };
    render(){
        const sum = this.calculateSum();
        return (
          <div>
            <b>The sum of Array{this.state.numbers} is: {sum}</b>
          </div>
        );
    }
}
export default ArraySum;
import React from "react";
class ArrayState extends React.Component
{
    constructor(){
        super()
        this.state = {arr: [10,20,30,40,50,60,70,80,90,100]}
    }
    render(){
        return (
          <>
            <div>
              <h1 style={{ textAlign: "center", color: "red" }}>Array State</h1>
            </div>
            <i>
              {this.state.arr[0]} &nbsp;&nbsp; {this.state.arr[1]} &nbsp;&nbsp;
              {this.state.arr[2]} &nbsp;&nbsp; {this.state.arr[3]} &nbsp;&nbsp;
              {this.state.arr[4]} &nbsp;&nbsp; {this.state.arr[5]} &nbsp;&nbsp;
              {this.state.arr[6]} &nbsp;&nbsp; {this.state.arr[7]} &nbsp;&nbsp;
              {this.state.arr[8]} &nbsp;&nbsp; {this.state.arr[9]} &nbsp;&nbsp;
            </i>
            <br />
            <hr />
            {/* Data Fetch Using Array State using map Function */}
            {this.state.arr.map((element) => {
              return (
                <i>
                  {element} <br />
                </i>
              );
            })}
            <br />
            <hr />
            {/* Data fetch with indexing from Array State using Map Function */}
            {this.state.arr.map((element, index) => {
              return (
                <i>
                  {index} : {element} <br />
                </i>
              );
            })}
            <br />
            <hr />
            {/* Data Fetch with correct numbering */}
            {this.state.arr.map((element, index) => {
              return (
                <i>
                  {index + 1} : {element} <br />
                </i>
              );
            })}
          </>
        );
           
        
    }
}
export default ArrayState
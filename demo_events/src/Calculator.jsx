import React from "react";
class Calculator extends React.Component {
  
  render() {
    return (
      <>
       

        <div>
          <table>
            <thead>
              <tr>
                <td>
                  <button>1</button>
                </td>
                <td>
                  <button>2</button>
                </td>
                <td>
                  <button>3</button>
                </td>
                <td>
                  <button>+</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button>4</button>
                </td>
                <td>
                  <button>5</button>
                </td>
                <td>
                  <button>6</button>
                </td>
                <td>
                  <button>-</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button>7</button>
                </td>
                <td>
                  <button>8</button>
                </td>
                <td>
                  <button>9</button>
                </td>
                <td>
                  <button>x</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button>.</button>
                </td>
                <td>
                  <button>0</button>
                </td>
                <td>
                  <button>=</button>
                </td>
                <td>
                  <button>/</button>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <input
                    style={{
                      border:'none',
                      height:'100px' ,
                      width : '600px',
                      backgroundColor: "rgb(243, 62, 62)",
                    }}
                  ></input>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </>
    );
  }
}

export default Calculator;

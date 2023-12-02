/*
import React from "react";
class App extends React.Component
{
  render()
  {
    return (
      <div>
        <h1>Aditya Pathak</h1>
        <h1 style={{ textAlign: "center" }}>In Center</h1>
        <h1 style={{ color: "red", textAlign: "right" }}>Test</h1>
        <h1 style={{ color: "blue", textTransform: "uppercase" }}>
          Green Uppercase Text
        </h1>
        <h1 style={{ textAlign: "center",color:'green' }}>In Center</h1>
      </div>
    );
  }
}
export default App
*/
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "15%",
          marginLeft: "25%",
          width: "50%",
        }}
      >
        {/*
        <h1
          style={{
            color: "red",
            textTransform: "uppercase",
          }}
        >
          Hello My name is Aditya Pathak
        </h1>
        <h1 style={{ color: "red", textAlign: "center" }}>I'm 21 years old.</h1>
        <h2 style={{ color: "blue", textAlign: "center" }}>
          My email id is sumitpathak861@gmail.com
        </h2>
        <h2
          style={{
            color: "blue",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Call me at +91-6261210849
        </h2>
        <h2 style={{  textAlign: "center" }}>Thankyou!!!</h2>
        */}

        <table style={{ marginLeft: "35%" }}>
          <tr>
            <td style={{ border: "2px solid black", fontFamily: "cursive" }}>
              Name
            </td>
            <td style={{ border: "2px solid red" }}>Aditya Pathak</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", fontFamily: "cursive" }}>
              Age
            </td>
            <td style={{ border: "2px solid red" }}>21</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", fontFamily: "cursive" }}>
              Email
            </td>
            <td style={{ border: "2px solid red" }}>
              sumitpathak861@gmail.com
            </td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", fontFamily: "cursive" }}>
              Phone
            </td>
            <td style={{ border: "2px solid red" }}>+91-6261210849</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", fontFamily: "cursive" }}>
              City
            </td>
            <td style={{ border: "2px solid red" }}>Indore</td>
          </tr>
        </table>
        <h3>Thanks For Visiting!</h3>
      </div>
    );
  }
}
export default App;

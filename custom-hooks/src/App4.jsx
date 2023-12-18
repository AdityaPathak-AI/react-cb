import { useRef, useState } from "react";
import Custom2 from "./Custom Hooks/Custom2";
function App4() {
  const data = Custom2(); // Custom hooks
  const [fir, setFir] = useState();
  const [sec, setSec] = useState();
  var first = useRef();
  var second = useRef();
  var change = () => {
    var f = first.current.value * 1;
    var s = second.current.value * 1;

    setFir(f);
    setSec(s);
  };
  return (
    <div>
      {/** <h1>
            <h1>{fir}</h1>
            <h1>{sec}</h1>
        </h1> */}
      <input
        style={{
          color: "blue",
          background: "lightBlue",
          textAlign: "center",
          fontSize: "50px",
        }}
        type="number"
        placeholder="enter 1st"
        ref={first}
      />
      <input
        style={{
          color: "blue",
          background: "lightBlue",
          textAlign: "center",
          fontSize: "50px",
        }}
        type="number"
        placeholder="enter 2st"
        ref={second}
      />
      <br></br>
      <button
        style={{
          color: "blue",
          background: "lightBlue",
          textAlign: "center",
          fontSize: "50px",
        }}
        onClick={change}
      >
        change
      </button>
      <br></br>
      <button
        style={{
          color: "blue",
          background: "lightBlue",
          marginLeft: "45%",
          fontSize: "30px",
        }}
        onClick={() => data.Add(fir, sec)}
      >
        Add
      </button>
      <h1
        style={{ color: "blue", background: "lightBlue", textAlign: "center" }}
      >
        this number is Add :{data.count}
      </h1>
      <button
        style={{
          color: "blue",
          background: "lightBlue",
          textAlign: "center",
          marginLeft: "40%",
          fontSize: "30px",
        }}
        onClick={() => data.Subtraction(fir, sec)}
      >
        Subtraction
      </button>
      <br></br>
      <h1
        style={{ color: "blue", background: "lightBlue", textAlign: "center" }}
      >
        this is Subtraction :{data.counts}
      </h1>
      <button
        style={{
          color: "blue",
          background: "lightBlue",
          textAlign: "center",
          marginLeft: "40%",
          fontSize: "30px",
        }}
        onClick={() => data.multipication(fir, sec)}
      >
        multipication
      </button>
      <br></br>
      <h1
        style={{ color: "blue", background: "lightBlue", textAlign: "center" }}
      >
        this is mu divided :{data.counte}
      </h1>
      <button
        style={{
          color: "blue",
          background: "lightBlue",
          textAlign: "center",
          marginLeft: "45%",
          fontSize: "30px",
        }}
        onClick={() => data.divided(fir, sec)}
      >
        divided
      </button>
      <h1
        style={{ color: "blue", background: "lightBlue", textAlign: "center" }}
      >
        this is mu divided :{data.countr}
      </h1>
    </div>
  );
}
export default App4;

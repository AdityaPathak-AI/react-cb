import { useState } from "react";

const App2 = () => {
  const [name, setName] = useState("Aditya");
  return (
    <div>
      <h1>Name is : {name}</h1>
      <button onClick={() => setName("Sumit")}>Change Name</button>
      <Show uname={name} />
    </div>
  );
};
export default App2;

const Show = (props) => {
  return (
    <div>
      <h1>Show Component Called: {props.uname}</h1>
      <Wish unm={props.uname} />
    </div>
  );
};

const Wish = (props) => {
  return (
    <div>
      <h1>Wish Component Called: {props.unm}</h1>
      <Demo nm={props.unm} />
    </div>
  );
};

const Demo = (props) => {
  return (
    <div>
      <h1>Demo Component Called: {props.nm}</h1>
      <Display />
    </div>
  );
};

const Display = () => {
  return (
    <div>
      <h1>Display Component Called...</h1>
    </div>
  );
};

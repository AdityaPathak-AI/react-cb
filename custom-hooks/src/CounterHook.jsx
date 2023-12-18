import { useState } from "react";

const CounterHook = () => {
  let [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter++);
  };
  const Decrement = () => {
    if (counter === 0) {
      setCounter(0);
      alert("Counter Reached Zero.")
    } else {
      setCounter(counter--);
    }
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};
export default CounterHook;

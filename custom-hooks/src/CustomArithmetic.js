import React, { useState } from "react";
import Arithmetic from "./Custom Hooks/Arithmetic";

const CustomArithmetic = () => {
  const {
    handleAddition,
    handleSubtraction,
    handleMultiplication,
    handleDivision,
  } = Arithmetic();

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(null);

  const handleOperation = (operationFunction) => {
    const result = operationFunction(firstValue, secondValue);
    setResult(result);
  };

  return (
    <div style={{ marginTop: "50px", marginLeft: "30px" }}>
      <input
        type="number"
        placeholder="Enter First Value"
        value={firstValue}
        onChange={(e) => setFirstValue(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter Second Value"
        value={secondValue}
        onChange={(e) => setSecondValue(Number(e.target.value))}
      />
      <br /> <br />
      <button onClick={() => handleOperation(handleAddition)}>
        Addition
      </button>{" "}
      &nbsp;&nbsp;
      <button onClick={() => handleOperation(handleSubtraction)}>
        Subtraction
      </button>{" "}
      &nbsp;&nbsp;
      <button onClick={() => handleOperation(handleMultiplication)}>
        Multiplication
      </button>{" "}
      &nbsp;&nbsp;
      <button onClick={() => handleOperation(handleDivision)}>Division</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Result of the operation is:"
        value={result}
        readOnly
      />
    </div>
  );
};

export default CustomArithmetic;

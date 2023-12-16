import { useState } from "react";

const Arithmetic = () => {
  const [count, setCount] = useState(); 
  const [count1] = useState(); 

  const handleAddition = () => {
    const result = count + count1;
    setCount(result);
  };

  const handleSubtraction = () => {
    const result = count - count1;
    setCount(result);
  };

  const handleMultiplication = () => {
    const result = count * count1;
    setCount(result);
  };

  const handleDivision = () => {
    const result =  count / count1 
    setCount(result);
  };

  return {
    count,
    count1,
    handleAddition,
    handleSubtraction,
    handleMultiplication,
    handleDivision,
  };
};

export default Arithmetic;

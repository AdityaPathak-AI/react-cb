import { useState } from "react";

function Custom2() {
  const [count, setcount] = useState();
  const [counts, setcounts] = useState();
  const [counte, setcounte] = useState();
  const [countr, setcountr] = useState();

  var Add = (x, y) => 
  {
    setcount(x + y);
  };
  var Subtraction = (x, y) =>
  {
    setcounts(x - y);
  };
  var multipication = (x, y) => 
  {
    setcounte(x * y);
  };
  var divided = (x, y) => 
  {
    setcountr(x / y);
  };
  
  return {
    count,
    counts,
    counte,
    countr,
    Add,
    Subtraction,
    multipication,
    divided,
  };
}

export default Custom2;

import React, { useState, useCallback } from "react";
import Child1 from "./Child1";

function Parent() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const increase = useCallback(() => {
    setNum(num + 1);
  }, [num, setNum]);

  console.log(increase);

  const decrease = () => {
    setNum2(num2 - 1);
  };

  //   console.log("Parent");

  return (
    <>
      <p>{num + ", " + num2}</p>
      <Child1 increase={increase} />
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default Parent;

import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me to increase by one
      </button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>
        Click me to decrease one
      </button>
      <br></br>
      <button onClick={() => setCount(0)}>Click me to reset</button>
      <Button text="Like me" color="red" />
      <Button text="Like me" color="green" />
    </div>
  );
};

export default Counter;

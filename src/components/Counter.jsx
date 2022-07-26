import React, { useState } from "react";

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
      <button onClick={() => setCount(0)}>Click me to reset</button>
    </div>
  );
};

export default Counter;

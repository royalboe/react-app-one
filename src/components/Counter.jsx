import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState("");
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
      <Button text="Like me" color="red" count={count} setCount={setCount} />
      <Button text="Like me" color="green" />
      <input type="text" onChange={(e) => setDesc(e.target.value)}></input>
      <h3>{desc}</h3>
    </div>
  );
};

export default Counter;

import React from "react";

const Button = ({ text, color, count, setCount }) => {
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

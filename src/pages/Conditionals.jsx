import React, { useState } from "react";

const Conditionals = () => {
  const [cond, setCond] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <h1>This is Full Stack</h1>
      <button onClick={() => setCond((prevCond) => !prevCond)}>
        {" "}
        Show Text
      </button>
      {cond && (
        <p>
          This is to learn how to use conditionals in React by using the ternary
          operator
        </p>
      )}
      {isLoggedIn ? (
        <p> Welcome you are logged in</p>
      ) : (
        <p> You are not logged in, please go and log in</p>
      )}
    </div>
  );
};

export default Conditionals;

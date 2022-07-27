import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, []);
  return (
    <div>
      <h1>These are my todos</h1>
      {todos &&
        todos.map((todo, index) => {
          return (
            <div>
              <h3 key={todo.id}>{`Title: ${todo.title}`}</h3>
              <p>{`Completed: ${todo.completed}`}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Todos;

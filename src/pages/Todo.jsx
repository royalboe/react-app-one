import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((todos) => setTodos(todos));
  //   }, []);

  const fetchPosts = async () => {
    let todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    todos = await todos.json();
    setTodos(todos);
  };
  useEffect(() => {
    fetchPosts();
  }, [todos]); // useEffect second parameter is used to track changes in state and rerun
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
};;

export default Todos;

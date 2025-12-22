import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched todos:", data); // 🔍 debug
        setTodos(data.slice(0, 10));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h2>Todos</h2>

      {todos.length === 0 && <p>Loading...</p>}

      <div className="todo-grid">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              {todo.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;

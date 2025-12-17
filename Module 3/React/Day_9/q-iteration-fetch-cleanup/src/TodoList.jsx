import React, { useEffect, useState } from 'react'
import TodoCard from "./TodoCard";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
    console.log("Compount Mounted");
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            setTodos(data.slice(0, 15));
        });

    return () => {
        alert("cleanup worked");
        console.log("Component Unmounted");
    };
}, []);

return (
    <div>
        <h2>TodoList</h2>

        {todos.map((todo) => (
            <TodoCard
                key={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
            />

        ))}
    </div>
);
}

export default TodoList
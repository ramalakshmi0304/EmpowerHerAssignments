import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}        // ✅ unique key
          item={todo.text}
          todo={todo}          // optional: pass full todo
        />
      ))}
    </div>
  );
};

export default TodoList;

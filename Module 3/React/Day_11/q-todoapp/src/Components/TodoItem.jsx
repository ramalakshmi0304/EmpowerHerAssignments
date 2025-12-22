import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;

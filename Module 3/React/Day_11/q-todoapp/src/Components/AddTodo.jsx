import { useContext, useState } from 'react';
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleTodo = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>Add</button>
    </div>
  );
};

export default AddTodo;

import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleTodo = () => {
    if (!text.trim()) return;   // ✅ prevent empty todo
    addTodo(text);
    setText("");
  };

  return (
    <div style={{ border: "1px solid red", marginTop: 50 }}>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;

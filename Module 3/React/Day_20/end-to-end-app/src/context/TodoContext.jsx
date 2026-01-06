import { createContext, useContext, useEffect, useState } from "react";
import { todoService } from "../services/todo.service";
import { useAuth } from "./AuthContext";
import { getAuth } from "firebase/auth";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const loadTodos = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const idToken = await auth.currentUser.getIdToken();
      const data = await todoService.getTodos(user.uid, idToken);
      setTodos(data);
    } catch (err) {
      console.error("Failed to load todos:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    if (!title.trim()) return;
    const idToken = await auth.currentUser.getIdToken();
    await todoService.createTodo(user.uid, { title, completed: false, createdAt: Date.now() }, idToken);
    await loadTodos();
  };

  const updateTodo = async (todoId, updates) => {
    if (!todoId) return;
    const idToken = await auth.currentUser.getIdToken();
    await todoService.updateTodo(user.uid, todoId, updates, idToken);
    await loadTodos();
  };

  const removeTodo = async (todoId) => {
    if (!todoId) return;
    const idToken = await auth.currentUser.getIdToken();
    await todoService.deleteTodo(user.uid, todoId, idToken);
    await loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, [user]);

  return (
    <TodoContext.Provider value={{ todos, loading, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

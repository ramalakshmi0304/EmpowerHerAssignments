import fs from "fs";

const DB_PATH = "./db.json";

const readData = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

export const getAllTodos = () => {
  return readData().todos;
};

export const getTodoById = (id) => {
  return readData().todos.find(todo => todo.id === id);
};

export const addTodo = (todo) => {
  const data = readData();
  data.todos.push(todo);
  writeData(data);
};

export const updateTodo = (id, updatedData) => {
  const data = readData();
  const index = data.todos.findIndex(todo => todo.id === id);

  if (index === -1) return false;

  data.todos[index] = { ...data.todos[index], ...updatedData };
  writeData(data);
  return true;
};

export const deleteTodo = (id) => {
  const data = readData();
  const filteredTodos = data.todos.filter(todo => todo.id !== id);

  if (filteredTodos.length === data.todos.length) return false;

  data.todos = filteredTodos;
  writeData(data);
  return true;
};

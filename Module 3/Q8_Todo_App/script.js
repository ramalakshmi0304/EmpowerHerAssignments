const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const LOCAL_STORAGE_KEY = 'todos';

// Fetch todos from API and store first 20 in Local Storage
async function fetchAndStoreTodos() {
  try {
    const response = await fetch(API_URL);
    const todos = await response.json();
    const first20 = todos.slice(0, 20);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(first20));
    renderTodos();
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

// Retrieve todos from Local Storage
function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

// Save updated todos to Local Storage
function saveTodosToStorage(todos) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

// Delete a specific todo
function deleteTodo(id) {
  let todos = getTodosFromStorage();
  todos = todos.filter(todo => todo.id !== id);
  saveTodosToStorage(todos);
  renderTodos();
}

// Toggle completed status
function toggleComplete(id) {
  const todos = getTodosFromStorage();
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    saveTodosToStorage(todos);
    renderTodos();
  }
}

// Render todos on UI
function renderTodos() {
  const todos = getTodosFromStorage();
  const todoList = document.getElementById('todoList');
  const noTodoMessage = document.getElementById('noTodoMessage');

  todoList.innerHTML = '';

  if (todos.length === 0) {
    noTodoMessage.style.display = 'block';
    return;
  } else {
    noTodoMessage.style.display = 'none';
  }

  todos.forEach(todo => {
    const li = document.createElement('li');

    const title = document.createElement('span');
    title.textContent = todo.title;
    title.className = `title ${todo.completed ? 'completed' : ''}`;

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = todo.completed ? 'Mark Incomplete' : 'Mark Complete';
    toggleBtn.className = 'toggle-btn';
    toggleBtn.onclick = () => toggleComplete(todo.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(title);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

// Initialize the app
function init() {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    fetchAndStoreTodos();
  } else {
    renderTodos();
  }
}

init();
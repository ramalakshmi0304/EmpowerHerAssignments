import React from 'react'
import AddTodo from './Components/AddTodo'
import { TodoProvider } from './context/TodoContext';
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <div className='App'>
      <TodoProvider>
        <AddTodo />
        <TodoList/>

      </TodoProvider>

    </div>
  );
}

export default App
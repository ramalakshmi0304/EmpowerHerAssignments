import { TodoProvider } from "./context/TodoContext"
import Todos from "./components/Todos"

const App = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  )
}

export default App
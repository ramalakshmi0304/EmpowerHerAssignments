import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import ProtectedRoute from './components/ProtectedRoute';
import TodoDetails from './pages/TodoDetails'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />


                    <Route path='/todos' element={<ProtectedRoute>
                        <Todos />
                    </ProtectedRoute>} />
                    <Route path='/todos/:todoId' element={<ProtectedRoute>

                        <TodoDetails />
                    </ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
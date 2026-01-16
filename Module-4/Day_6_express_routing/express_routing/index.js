import express from "express";
import usersRouter from "./routes/users.routes.js"
import todosRouter from "./routes/todos.routes.js"


const app = express();
const PORT = 3550;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/todos", todosRouter)


app.listen(PORT,()=>{

    console.log(`server is running on http://localhost:${PORT}`)
});
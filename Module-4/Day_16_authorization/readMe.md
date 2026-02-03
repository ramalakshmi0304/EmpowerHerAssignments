Install dependencies
Create .env file
Run the Server
### API Endpoints
✅ Signup
POST /auth/signup
✅ Login
POST /auth/login

🔐 Authorization Header (IMPORTANT)

For all protected routes, include this header:

Authorization: Bearer <JWT_TOKEN>

✅ Todo APIs (Protected)
➕ Create Todo
POST /todos
📄 Get All Todos (User-specific)

Update Todo
Delete Todo
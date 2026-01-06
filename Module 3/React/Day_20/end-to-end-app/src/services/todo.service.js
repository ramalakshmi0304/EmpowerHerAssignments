// src/services/todo.service.js
import axios from "axios";

const BASE_URL =
  "https://end-to-end-todos-app-default-rtdb.asia-southeast1.firebasedatabase.app";

const getHeaders = (idToken) => ({
  params: { auth: idToken },
});

export const todoService = {
  getTodos: async (userId, idToken) => {
    const res = await axios.get(`${BASE_URL}/todos/${userId}.json`, getHeaders(idToken));
    if (!res.data) return [];
    return Object.entries(res.data).map(([id, todo]) => ({ id, ...todo }));
  },

  createTodo: async (userId, todo, idToken) => {
    await axios.post(`${BASE_URL}/todos/${userId}.json`, todo, getHeaders(idToken));
  },

  updateTodo: async (userId, todoId, updates, idToken) => {
    await axios.patch(`${BASE_URL}/todos/${userId}/${todoId}.json`, updates, getHeaders(idToken));
  },

  deleteTodo: async (userId, todoId, idToken) => {
    await axios.delete(`${BASE_URL}/todos/${userId}/${todoId}.json`, getHeaders(idToken));
  },
};

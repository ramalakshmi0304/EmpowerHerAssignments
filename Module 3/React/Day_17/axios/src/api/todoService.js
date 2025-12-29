import axiosInstance from "../api/axiosInstance";

export const getTodos = async () => {
  const res = await axiosInstance.get("/todos");
  return res.data;
};

export const getTodoById = async (id) => {
  const res = await axiosInstance.get(`/todos/${id}`);
  return res.data;
};

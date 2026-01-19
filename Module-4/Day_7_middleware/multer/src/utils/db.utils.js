import fs from "fs";
import path from "path";

const dbPath = path.join("src", "db.json");

export const readDB = () => {
  if (!fs.existsSync(dbPath)) return { users: [] };
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};

export const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export const getUsers = () => {
  const data = readDB();
  return data.users || [];
};

export const addUser = (user) => {
  const data = readDB();
  if (!data.users) data.users = [];
  data.users.push(user);
  writeDB(data);
};

import { getUsers } from "../utils/db.utils.js";

const uniqueEmail = (req, res, next) => {
  const { email } = req.body;
  const users = getUsers();

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(409).json({ error: "Email already exists" });
  next();
};

export default uniqueEmail;

## Table schema
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  age INT CHECK(age>=18),
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT now()
);

select * from users
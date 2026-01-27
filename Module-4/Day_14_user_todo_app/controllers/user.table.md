## schema for users table
CREATE TABLE users1(
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() 
);

ALTER TABLE users1
ALTER COLUMN id SET DEFAULT gen_random_uuid();
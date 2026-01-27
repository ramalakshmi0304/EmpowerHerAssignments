## schema for todos table
CREATE TABLE todos(
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT false,
  user_id UUID NOT NULL,
  create_at TIMESTAMPTZ DEFAULT now(),

  CONSTRAINT fk_users1_todos
  FOREIGN KEY (user_id) references users1(id)
  ON DELETE CASCADE
);

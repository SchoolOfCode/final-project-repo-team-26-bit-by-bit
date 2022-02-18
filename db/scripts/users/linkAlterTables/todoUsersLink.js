import db from "../../../connection.js";

const response = db.query(
  `ALTER TABLE todo_list ADD FOREIGN KEY (todo_id) REFERENCES users (user_id);`
  );

  console.log(response);
  db.end();


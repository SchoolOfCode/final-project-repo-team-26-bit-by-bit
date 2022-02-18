import db from "../../../connection.js";

const response = db.query(
  `ALTER TABLE goals ADD FOREIGN KEY (goals_id) REFERENCES users (user_id);`
  );

  console.log(response);
  db.end();


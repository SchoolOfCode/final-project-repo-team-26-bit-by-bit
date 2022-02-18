import db from "../../../connection.js";

const response = db.query(

  `ALTER TABLE customise ADD FOREIGN KEY (customise_id) REFERENCES users (user_id);`
  );

  console.log(response);
  db.end();


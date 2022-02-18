import db from "../../../connection.js";

const response = db.query(

  `CREATE TABLE IF NOT EXISTS users  (
    user_id int PRIMARY KEY,
    full_name varchar(255),
    created_at datetime`
  );

  console.log(response);
  db.end();






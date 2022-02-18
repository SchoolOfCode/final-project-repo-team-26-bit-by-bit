import db from "../../../connection.js";

const response = db.query(

 `CREATE TABLE IF NOT EXISTS todo_list (
    todo_id int,
    text varchar(255),
    priority varchar(255),
    created_at datetime,
    frequency datetime,
    due_date datetime,
    isCompleted boolean,
    isRecurring boolean,
    amount int
  );`
);

console.log(response);
db.end();
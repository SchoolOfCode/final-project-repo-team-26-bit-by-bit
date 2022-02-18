
import db from "../../../connection.js";

  const response = db.query(
    `CREATE TABLE IF NOT EXISTS goals (
      goals_id int,
      text varchar(255),
      priority varchar(255),
      created_at datetime,
      due_date datetime,
      isCompleted boolean,
      isRecurring boolean,
      amount int
    );`
    );

    console.log(response);
db.end();
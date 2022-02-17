import db from "../../connection.js";

const response = db.query(

  `CREATE TABLE users IF NOT EXISTS (
    user_id int PRIMARY KEY,
    full_name varchar(255),
    created_at datetime
  );
  
  CREATE TABLE todo_list IF NOT EXISTS (
    todo_id int,
    text varchar(255),
    priority varchar(255),
    created_at datetime,
    frequency datetime,
    due_date datetime,
    isCompleted boolean,
    isRecurring boolean,
    amount int
  );
  
  CREATE TABLE goals IF NOT EXISTS (
    goals_id int,
    text varchar(255),
    priority varchar(255),
    created_at datetime,
    due_date datetime,
    isCompleted boolean,
    isRecurring boolean,
    amount int
  );
  
  CREATE TABLE customise IF NOT EXISTS (
    customise_id int,
    medication boolean,
    appointment boolean,
    exercise boolean,
    isDark boolean,
    isSimple boolean
  );
  
  ALTER TABLE todo_list ADD FOREIGN KEY (todo_id) REFERENCES users (user_id);
  
  ALTER TABLE goals ADD FOREIGN KEY (goals_id) REFERENCES users (user_id);
  
  ALTER TABLE customise ADD FOREIGN KEY (customise_id) REFERENCES users (user_id);`
  );


console.log(response);

db.end();

import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users(
  user_id SERIAL PRIMARY KEY,
  full_name varchar(255),
  created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS todo_list(
  user_id int,
  todo_id int,
  text varchar(255),
  priority varchar(255),
  created date not null default CURRENT_DATE,
  frequency int,
  due_date  DATE,
  isCompleted boolean,
  amount int
);

CREATE TABLE IF NOT EXISTS reminder_list(
  user_id int, 
  reminder_id int, 
  text varchar(255),
  due_date DATE, 
  isCompleted boolean 
);

CREATE TABLE IF NOT EXISTS goals (
  user_id int,
  goals_id int ,
  text varchar(255),
  priority varchar(255),
  created date not null default CURRENT_DATE,
  due_date  DATE,
  isCompleted boolean,
  amount int
);

CREATE TABLE IF NOT EXISTS custom_section(
  id int,
  user_id int,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS custom_section_item(
  id int,
  section_id int,
  text varchar(255),
  due_date DATE
);

ALTER TABLE todo_list ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE reminder_list ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE goals ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE customise ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE custom_section_item ADD FOREIGN KEY (section_id) REFERENCES section (id);`

async function createTable (){

    const res = await query(sqlString);

    console.log('Created new Table', res)
    //calling the res through console log this is the result for query array

}

createTable();


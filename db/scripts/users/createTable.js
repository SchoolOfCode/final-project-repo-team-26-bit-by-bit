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
  isCompleted boolean,
  created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reminder_list(
  user_id int, 
  reminder_id int, 
  text varchar(255),
  due_date DATE, 
  isCompleted boolean,
  created timestamp not null default CURRENT_TIMESTAMP 

);

CREATE TABLE IF NOT EXISTS goals (
  user_id int,
  goals_id int ,
  text varchar(255),
  priority varchar(255),
  due_date  DATE,
  isCompleted boolean,
  amount int,
  created date not null default CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS custom_section(
user_id int,
 custom_id int,
 custom_name varchar(255),
 created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS custom_section_item(
  user_id int,
  section_id int,
  text varchar(255),
  due_date DATE,
  created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings(
  user_id int,
  settings_id int,
  is_dark boolean,
  created timestamp not null default CURRENT_TIMESTAMP
);

ALTER TABLE todo_list ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE reminder_list ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE goals ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE custom_section ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE custom_section_item ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE settings ADD FOREIGN KEY (user_id) REFERENCES users (user_id);`


async function createTable (){

    const res = await query(sqlString);

    console.log('Created new Table', res)
    //calling the res through console log this is the result for query array

}

createTable();


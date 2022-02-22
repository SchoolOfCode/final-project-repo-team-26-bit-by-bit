import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  full_name varchar(255),
  created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS todo_list(
  id int,
  user_id int,
  text varchar(255),
  priority varchar(255),
  isCompleted boolean,
  created date not null default CURRENT_DATE,
);

CREATE TABLE IF NOT EXISTS reminder_list(
  id int, 
  user_id int, 
  text varchar(255),
  due_date TIMESTAMP,
  isCompleted boolean
);

CREATE TABLE IF NOT EXISTS goals (
  id int ,
  user_id int,
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

ALTER TABLE todo_list ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE reminder_list ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE goals ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE customise ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE custom_section_item ADD FOREIGN KEY (section_id) REFERENCES section (id);`

async function createTable (){

    const res = await query(sqlString);

    console.log('Created new Table', res)
    //calling the res through console log this is the result for query array

}

createTable();

// TODO:
// 1. Reoccuring
// removied frequency from todo_list table,
// figure out how to store reoccuring tasks

// 2. Amount
// removed from amount from todo_list table,
// figure out how to track completed tasks
// (maybe can use SELECT COUNT to generate "amount" of completions)

// 3. reminder_list due_date TIMESTAMP,
// https://www.postgresqltutorial.com/postgresql-timestamp/
// Can create an input field of type "datetime-local"
// to collect specific date and time
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local
// Will need to format date time from JavaScript to SQL format

// 4. Goals
// Have kept the same, but not part of the MVP
// Can add after

// 5. Custom sections (Customaisation)
// Menu option = customisation.
// custom_section and custom_section_item tables 
// which correlate to our chosen customisation optons

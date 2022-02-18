import query from "../connection.js"

const sqlString = `CREATE TABLE users(
  user_id int PRIMARY KEY,
  full_name varchar(255),
  created timestamp not null default CURRENT_TIMESTAMP
);
CREATE TABLE todo_list(
  todo_id int,
  text varchar(255),
  priority varchar(255),
  created date not null default CURRENT_DATE,
  frequency int,
  due_date  DATE,
  isCompleted boolean,
  isRecurring boolean,
  amount int
);
CREATE TABLE goals (
  goals_id int,
  text varchar(255),
  priority varchar(255),
  created date not null default CURRENT_DATE,
  due_date  DATE,
  isCompleted boolean,
  isRecurring boolean,
  amount int
);
CREATE TABLE customise(
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


async function createTable (){

    const res = await query(sqlString);

    console.log('Created new Table', res)
    //calling the res through console log this is the result for query array

}

createTable();

import query  from "../db/connection.js";

export async function getAllUsers() {
  const result = await query(`SELECT * FROM users;`);
  return result.rows;
}

export async function createUser(body) {
  const user_id = body.user_id;  
  const full_name= body.full_name;
    const data = await query(
    `INSERT INTO users(user_id, full_name) VALUES ($1, $2) RETURNING full_name;`,
    [user_id, full_name]
  );
 

  return data.rows;
}


export async function getAllToDo() {
  const result = await query(`SELECT * FROM todo_list;`);
  return result.rows;
}

export async function createToDoList(body) {
  const todo_id = body.todo_id;
  const text= body.text;
  const priority= body.priority;
  const frequency = body.frequency;
  const due_date = body.due_date;
  const iscompleted = body.iscompleted;
  const isrecurring = body.isrecurring;
  const amount = body.amount;
    const data = await query(
    `INSERT INTO todo_list (todo_id, text, priority,  frequency,
      due_date, isCompleted, isRecurring, amount) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING text;`,
    [todo_id,
      text,
      priority,
      frequency,
      due_date,
      iscompleted,
      isrecurring,
       amount]
  );
 

  return data.rows;
}

export async function getAllCustomise() {
  const result = await query(`SELECT * FROM customise;`);
  return result.rows;
}


export async function createCustomise(body) {
  const customise_id = body.customise_id;
  const medication= body.medication;
  const appointment= body.appointment;
  const exercise = body.exercise;
  const isdark = body.isdark;
  const issimple = body.issimple;
    const data = await query(
    `INSERT INTO customise (customise_id,medication, appointment,exercise, isDark, isSimple) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING exercise;`,
    [customise_id,
      medication,
     appointment,
     exercise,
     isdark,
     issimple]
  );
 

  return data.rows;
}

export async function getAllGoals() {
  const result = await query(`SELECT * FROM goals;`);
  return result.rows;
}

export async function createGoals(body) {
  const goals_id = body.goals_id;
  const text= body.text;
  const priority= body.priority;
  const due_date = body.due_date;
  const iscompleted = body.iscompleted;
  const isrecurring = body.isrecurring;
  const amount = body.amount;
    const data = await query(
    `INSERT INTO goals (goals_id, text, priority, due_date, isCompleted, isRecurring, amount) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING text;`,
    [goals_id,
      text,
      priority,
      due_date,
      iscompleted,
      isrecurring,
       amount]
  );
 

  return data.rows;
}


export async function updateGoals(body) {
  
  const text= body.text;
  const priority= body.priority;
  const iscompleted = body.iscompleted;
  const isrecurring = body.isrecurring;
  const amount = body.amount;
  const goals_id = body.goals_id;
    const data = await query(
    `UPDATE goals SET text=$1, priority=$2, isCompleted=$3, isRecurring=$4, amount=$5 WHERE goals_id = $6 RETURNING text;`,
    [
      text,
      priority,
      iscompleted,
      isrecurring,
       amount,
       goals_id,]
  );
 

  return data.rows;
}
export async function DeleteGoals(id){

  const data = await query(`DELETE FROM goals WHERE goals_id = $1`, [id])

  return data.rows

}
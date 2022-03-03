import query from "../../db/connection.js";

export async function getAllToDo(user_id) {
  const result = await query(`SELECT * FROM todo_list WHERE user_id=$1;`, [
    user_id,
  ]);

  return result.rows;
}

export async function getToDoByID(todo_id, user_id) {
  const result = await query(
    `SELECT * FROM todo_list WHERE todo_id = $1 AND user_id=$2;`,
    [todo_id, user_id]
  );

  return result.rows;
}

// I think this needs to return more columns other than text?
export async function createToDoList(body) {
  const user_id = body.user_id;
  const todo_id = body.todo_id;
  const text = body.text;
  const time = body.time;
  const priority = body.priority;
  const ismonday = body.ismonday;
  const istuesday = body.istuesday;
  const iswednesday = body.iswednesday;
  const isthursday = body.isthursday;
  const isfriday = body.isfriday;
  const issaturday = body.issaturday;
  const issunday = body.issunday;
  const iscompleted = body.iscompleted;

  const data = await query(
    `INSERT INTO todo_list (user_id, todo_id, text, priority, time, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday, isCompleted) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;`,
    [
      user_id,
      todo_id,
      text,
      priority,
      time,
      ismonday,
      istuesday,
      iswednesday,
      isthursday,
      isfriday,
      issaturday,
      issunday,
      iscompleted,
    ]
  );
  return data.rows;
}

export async function updateToDo(body) {
  const user_id = body.user_id;
  const text = body.text;
  const priority = body.priority;
  const time = body.time;
  const ismonday = body.ismonday;
  const istuesday = body.istuesday;
  const iswednesday = body.iswednesday;
  const isthursday = body.isthursday;
  const isfriday = body.isfriday;
  const issaturday = body.issaturday;
  const issunday = body.issunday;
  const iscompleted = body.iscompleted;
  const created = body.created;
  const todo_id = body.todo_id;
  const data = await query(
    `UPDATE todo_list SET user_id = $1, text=$2, priority=$3, time=$4, isMonday=$5, isTuesday=$6, isWednesday=$7, isThursday=$8, isFriday=$9, isSaturday=$10, isSunday=$11, isCompleted=$12, created=$13  WHERE todo_id = $14 RETURNING *;`,
    [
      user_id,
      text,
      priority,
      time,
      ismonday,
      istuesday,
      iswednesday,
      isthursday,
      isfriday,
      issaturday,
      issunday,
      iscompleted,
      created,
      todo_id,
    ]
  );
  return data.rows;
}

export async function deleteToDo(todo_id, user_id) {
  const data = await query(
    `DELETE FROM todo_list WHERE todo_id = $1 AND user_id=$2`,
    [todo_id, user_id]
  );
  return data.rows;
}

export async function deleteToDoByUser(user_id) {
  const data = await query(`DELETE FROM todo_list WHERE user_id=$1`, [user_id]);
  return data.rows;
}

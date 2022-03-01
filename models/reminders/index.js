import query from "../../db/connection.js";
export async function getAllReminder(user_id) {
  const result = await query(`SELECT * FROM reminder_list WHERE user_id= $1;`, [
    user_id,
  ]);
  return result.rows;
}

export async function getReminderByID(reminder_id, user_id) {
  const result = await query(
    `SELECT * FROM reminder_list WHERE reminder_id = $1 AND user_id=$2;`,
    [reminder_id, user_id]
  );
  return result.rows;
}

export async function createReminderList(body) {
  const user_id = body.user_id;
  const reminder_id = body.reminder_id;
  const text = body.text;
  const due_date = body.due_date;
  const time = body.time;
  const iscompleted = body.iscompleted;
  const data = await query(
    `INSERT INTO reminder_list (user_id, reminder_id, text,
        due_date, time, isCompleted) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;`,
    [user_id, reminder_id, text, due_date, time, iscompleted]
  );

  return data.rows;
}
// I think we only want to update if it's changed?

export async function updateReminder(body) {
  const user_id = body.user_id;
  const text = body.text;
  const due_date = body.due_date;
  const time = body.time;
  const iscompleted = body.iscompleted;
  const reminder_id = body.reminder_id;
  const data = await query(
    `UPDATE reminder_list SET user_id = $1, text=$2, due_date=$3, time=$4, isCompleted=$5 WHERE reminder_id = $6 RETURNING *;`,
    [user_id, text, due_date, time, iscompleted, reminder_id]
  );
  return data.rows;
}

export async function deleteReminder(reminder_id, user_id) {
  const data = await query(
    `DELETE FROM reminder_list WHERE reminder_id = $1 AND user_id=$2`,
    [reminder_id, user_id]
  );
  return data.rows;
}

export async function deleteReminderByUser(user_id) {
  const data = await query(`DELETE FROM reminder_list WHERE user_id=$1`, [
    user_id,
  ]);
  return data.rows;
}

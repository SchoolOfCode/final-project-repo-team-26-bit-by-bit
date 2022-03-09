import query from "../../db/connection.js";

export async function getAllGoals(user_id) {
  const result = await query(`SELECT * FROM goals WHERE user_id = $1;`, [
    user_id,
  ]);
  return result.rows;
}

export async function getGoalsById(goals_id, user_id) {
  const result = await query(
    `SELECT * FROM goals WHERE goals_id = $1 and user_id = $2;`,
    [goals_id, user_id]
  );
  return result.rows;
}

export async function createGoals(body) {
  const user_id = body.user_id;
  const goals_id = body.goals_id;
  const text = body.text;
  const amount = body.amount;
  const currentAmount = body.currentamount;
  const iscompleted = body.iscompleted;

  const data = await query(
    `INSERT INTO goals (user_id, goals_id, text, amount, currentAmount, isCompleted) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;`,
    [user_id, goals_id, text, amount, currentAmount, iscompleted]
  );

  return data.rows;
}

export async function updateGoals(body) {
  const user_id = body.user_id;
  const goals_id = body.goals_id;
  const text = body.text;
  const amount = body.amount;
  const currentamount = body.currentamount;
  const iscompleted = body.iscompleted;
  const data = await query(
    `UPDATE goals SET user_id = $1, text=$2, amount=$3, currentAmount= $4, isCompleted=$5 WHERE goals_id = $6 RETURNING *;`,
    [user_id, text, amount, currentamount, iscompleted, goals_id]
  );

  return data.rows;
}


export async function deleteGoals(goals_id, user_id) {
  const data = await query(
    `DELETE FROM goals WHERE goals_id = $1 AND user_id=$2`,
    [goals_id, user_id]
  );

  return data.rows;
}

export async function deleteGoalsByUser(user_id) {
  const data = await query(`DELETE FROM goals WHERE user_id=$1`, [user_id]);

  return data.rows;
}

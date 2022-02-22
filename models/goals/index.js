import query from "../../db/connection.js";

export async function getAllGoals(id) {
    const result = await query(`SELECT * FROM goals WHERE user_id = $1;`, [id]);
    return result.rows;
  }


  export async function getGoalsById(goals_id, user_id) {

    const result = await query(`SELECT * FROM goals WHERE goals_id  = $1 and user_id = $2;`, [goals_id, user_id]);
    return result.rows;
  }
  
  export async function createGoals(body) {
    const user_id = body.user_id;
    const goals_id = body.goals_id;
    const text= body.text;
    const priority= body.priority;
    const due_date = body.due_date;
    const iscompleted = body.iscompleted;
    const isrecurring = body.isrecurring;
    const amount = body.amount;
      const data = await query(
      `INSERT INTO goals (user_id, goals_id, text, priority, due_date, isCompleted, isRecurring, amount) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING text;`,
      [user_id,
        goals_id,
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
    const user_id = body.user_id;
    const text= body.text;
    const priority= body.priority;
    const due_date = body.due_date;
    const iscompleted = body.iscompleted;
    const isrecurring = body.isrecurring;
    const amount = body.amount;
    const goals_id = body.goals_id;
      const data = await query(
      `UPDATE goals SET user_id = $1, text=$2, priority=$3, due_date= $4, isCompleted=$5, isRecurring=$6, amount=$7 WHERE goals_id = $8 RETURNING text;`,
      [user_id,
        text,
        priority,
        due_date,
        iscompleted,
        isrecurring,
         amount,
         goals_id,]
    );
   
  
    return data.rows;
  }
  export async function DeleteGoals(goals_id, user_id){
  
    const data = await query(`DELETE FROM goals WHERE goals_id = $1 AND user_id=$2`, [goals_id, user_id])
  
    return data.rows
  
  }
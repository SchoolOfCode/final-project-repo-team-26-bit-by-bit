import query from "../../db/connection";

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
import query from "../../db/connection.js";
export async function getAllToDo(id) {
    const result = await query(`SELECT * FROM todo_list WHERE user_id= $1;`, [id]);
    return result.rows;
  }
  
  export async function getTodoByID(todo_id, user_id) { 
    const result = await query(`SELECT * FROM todo_list WHERE todo_id = $1 AND user_id=$2;`, [todo_id, user_id]);
    return result.rows;
  }
  

  export async function createToDoList(body) {
    const user_id = body.user_id;
    const todo_id = body.todo_id;
    const text= body.text;
    const priority= body.priority;
    const frequency = body.frequency;
    const due_date = body.due_date;
    const iscompleted = body.iscompleted;
    const isrecurring = body.isrecurring;
    const amount = body.amount;
      const data = await query(
      `INSERT INTO todo_list (user_id, todo_id, text, priority,  frequency,
        due_date, isCompleted, isRecurring, amount) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING text;`,
      [user_id,
        todo_id,
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

    export async function updateToDo(body) {
    const user_id = body.user_id;
    const text= body.text;
    const priority= body.priority;
    const frequency = body.frequency;
    const due_date = body.due_date;
    const iscompleted = body.iscompleted;
    const isrecurring = body.isrecurring;
    const amount = body.amount;
    const todo_id = body.todo_id;
    const data = await query(
  `UPDATE todo_list SET user_id = $1, text=$2, priority=$3, frequency=$4, due_date=$5, isCompleted=$6, isrecurring = $7, amount = $8 WHERE todo_id = $9 RETURNING text;`,
      [user_id,
        text,
        priority,
        frequency,
        due_date,
        iscompleted,
        isrecurring,
         amount, todo_id]
    );
   
  
    return data.rows;
      }
    

  export async function DeleteToDo(todo_id, user_id){
  
    const data = await query(`DELETE FROM todo_list WHERE todo_id = $1 AND user_id=$2`, [todo_id, user_id])
  
    return data.rows
  
  }
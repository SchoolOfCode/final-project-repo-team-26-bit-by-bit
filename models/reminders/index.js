import query from "../../db/connection.js";
export async function getAllToDo() {
    const result = await query(`SELECT * FROM todo_list;`);
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
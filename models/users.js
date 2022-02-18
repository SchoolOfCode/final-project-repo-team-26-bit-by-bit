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







import query from "../db/connection.js";

export async function getAllUsers() {
  const result = await query(`SELECT * FROM users;`);
  return result.rows;
}
//
export async function getUserById(id) {
  const result = await query(`SELECT * FROM users WHERE user_id = $1;`, [id]);
  return result.rows;
}

// user_id added to the create user//
export async function createUser(body) {
  const user_id = body.user_id;
  const full_name = body.full_name;
  const data = await query(
    `INSERT INTO users( user_id, full_name) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *;`,
    [user_id, full_name]
  );
  return data.rows;
}

// NOT SURE IF WE NEED THIS? //
export async function updateUser(body) {
  const user_id = body.user_id;
  const full_name = body.full_name;
  const data = await query(
    `UPDATE users SET full_name = $1 WHERE user_id = $2 RETURNING *;`,
    [full_name, user_id]
  );

  return data.rows;
}

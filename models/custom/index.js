import query from "../../db/connection.js";

export async function getCustomByUsers(user_id) {
  const result = await query(`SELECT * FROM custom_section WHERE user_id = $1;`, [
    user_id,
  ]);
  return result.rows;
}

export async function getCustomByID(custom_id, user_id) {
  const result = await query(
    `SELECT * FROM custom_section WHERE custom_id = $1 AND user_id = $2;`,
    [custom_id, user_id]
  );
  return result.rows;
}


export async function createCustom(body) {
  const user_id = body.user_id;
  const custom_id = body.custom_id;
  const custom_name = body.custom_name;
  const data = await query(
    `INSERT INTO custom_section (user_id,
      custom_id,
      custom_name) VALUES ( $1, $2, $3) RETURNING custom_name;`,
    [user_id,
      custom_id,
      custom_name]
  );

  return data.rows;
}

export async function updateCustom(body) {
  const user_id = body.user_id;
  const custom_name = body.custom_name;
  const custom_id = body.custom_id;

  const data = await query(
    `UPDATE custom_section SET user_id = $1,
    custom_name= $2 WHERE custom_id = $3 RETURNING custom_name;`,
    [user_id,
      custom_id,
      custom_name]
  );

  return data.rows;
}
export async function deleteCustom(custom_id, user_id) {
  const data = await query(
    `DELETE FROM custom_section WHERE custom_id = $1 AND user_id = $2`,
    [custom_id, user_id]
  );

  return data.rows;
}

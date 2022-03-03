import query from "../../db/connection.js";

export async function getCustomSectionItemByUsers(user_id) {
  const result = await query(
    `SELECT * FROM custom_section_item WHERE user_id = $1;`,
    [user_id]
  );
  return result.rows;
}
////
export async function getCustomSectionItemByID(section_id, user_id) {
  const result = await query(
    `SELECT * FROM custom_section_item WHERE section_id = $1 AND user_id = $2;`,
    [section_id, user_id]
  );
  return result.rows;
}

//////
export async function createCustomSectionItem(body) {
  const user_id = body.user_id;
  const section_id = body.section_id;
  const text = body.text;
  const due_date = body.due_date;
  const data = await query(
    `INSERT INTO custom_section_item (user_id, section_id, text, due_date) VALUES ( $1, $2, $3, $4) RETURNING *;`,
    [user_id, section_id, text, due_date]
  );

  return data.rows;
}

export async function updateCustomSectionItem(body) {
  const user_id = body.user_id;
  const text = body.text;
  const due_date = body.due_date;

  const section_id = body.section_id;
  const data = await query(
    `UPDATE custom_section_item SET user_id = $1, text=$2, due_date=$3 WHERE section_id = $4 RETURNING *;`,
    [user_id, text, due_date, section_id]
  );

  return data.rows;
}
export async function deleteCustomSectionItem(section_id, user_id) {
  const data = await query(
    `DELETE FROM custom_section_item WHERE section_id = $1 AND user_id = $2`,
    [section_id, user_id]
  );

  return data.rows;
}

export async function deleteCustomSectionItemByUser(user_id) {
  const data = await query(
    `DELETE FROM custom_section_item WHERE user_id = $1`,
    [user_id]
  );

  return data.rows;
}

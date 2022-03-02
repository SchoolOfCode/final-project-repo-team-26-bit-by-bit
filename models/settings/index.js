import query from "../../db/connection.js";

export async function getAllSettingsByUser(user_id) {
  const result = await query(`SELECT * FROM settings WHERE user_id = $1;`, [
    user_id,
  ]);
  return result.rows;
}

export async function getSettingsBySettingId(settings_id, user_id) {
  const result = await query(
    `SELECT * FROM settings WHERE settings_id = $1 AND user_id = $2;`,
    [settings_id, user_id]
  );
  return result.rows;
}

// setting_id does not exist? Have these been updated?
export async function createSettings(body) {
  const user_id = body.user_id;
  const settings_id = body.settings_id;
  const is_dark = body.is_dark;
  const data = await query(
    `INSERT INTO settings (user_id, settings_id, is_dark) VALUES ( $1, $2, $3) ON CONFLICT DO NOTHING RETURNING *;`,
    [user_id,
      settings_id,
      is_dark]
  );

  return data.rows;
}

export async function updateSettings(body) {
  const user_id = body.user_id;
  const is_dark = body.is_dark;
  const settings_id = body.settings_id;

  const data = await query(
    `UPDATE settings SET user_id = $1,
    is_dark= $2 WHERE settings_id = $3 RETURNING *;`,
    [user_id,
      is_dark,
      settings_id]
  );

  return data.rows;
}
export async function deleteSettings(settings_id, user_id) {
  const data = await query(
    `DELETE FROM settings WHERE settings_id = $1 AND user_id = $2`,
    [settings_id, user_id]
  );

  return data.rows;
}

export async function deleteSettingsByUser(user_id) {
    const data = await query(
      `DELETE FROM settings WHERE user_id = $1`,
      [user_id]
    );
    return data.rows;
  }

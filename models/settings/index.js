import query from "../../db/connection.js";

export async function getAllSettingsByUser(user_id) {
  const result = await query(`SELECT * FROM settings WHERE user_id = $1;`, [
    user_id,
  ]);
  return result.rows;
}

export async function getSettingsBySettingId(setting_id, user_id) {
  const result = await query(
    `SELECT * FROM settings WHERE setting_id = $1 AND user_id = $2;`,
    [setting_id, user_id]
  );
  return result.rows;
}


export async function createSettings(body) {
  const user_id = body.user_id;
  const setting_id = body.setting_id;
  const isdark = body.isdark;
  const data = await query(
    `INSERT INTO settings (user_id,
      setting_id,
      isDark) VALUES ( $1, $2, $3) RETURNING isDark;`,
    [user_id,
      setting_id,
      isdark]
  );

  return data.rows;
}

export async function updateSettings(body) {
  const user_id = body.user_id;
  const isdark = body.isdark;
  const setting_id = body.setting_id;

  const data = await query(
    `UPDATE settings SET user_id = $1,
    isDark= $2 WHERE setting_id = $3 RETURNING isDark;`,
    [user_id,
      isdark,
      setting_id]
  );

  return data.rows;
}
export async function deleteSettings(setting_id, user_id) {
  const data = await query(
    `DELETE FROM settings WHERE setting_id = $1 AND user_id = $2`,
    [setting_id, user_id]
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

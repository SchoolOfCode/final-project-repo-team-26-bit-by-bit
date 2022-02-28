import { pool } from "../../../connection.js";
//this function only works when all other tables are drops because relational database
async function dropTable() {
  const dropped = await pool.query("DROP TABLE IF EXISTS users CASCADE;");

  console.log("users table deleted", dropped.command);
}
try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

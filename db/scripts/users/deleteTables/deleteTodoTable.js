import { pool } from "../../../connection.js";
async function dropTable() {
  const dropped = await pool.query("DROP TABLE IF EXISTS todo_list;");
  console.log("todo table deleted", dropped.command);
}
try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

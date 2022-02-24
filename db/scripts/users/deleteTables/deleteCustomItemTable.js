import {pool} from "../../../connection.js"
async function dropTable() {
  const dropped = await pool.query("DROP TABLE IF EXISTS custom_section_item;");
  console.log("users table deleted", dropped.command);
}
try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
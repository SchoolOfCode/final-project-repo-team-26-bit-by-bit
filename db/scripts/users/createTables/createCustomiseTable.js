
  import db from "../../../connection.js";
  const response = db.query(
  `CREATE TABLE IF NOT EXISTS customise (
    customise_id int,
    medication boolean,
    appointment boolean,
    exercise boolean,
    isDark boolean,
    isSimple boolean
  );`
  );
  console.log(response);
  db.end();
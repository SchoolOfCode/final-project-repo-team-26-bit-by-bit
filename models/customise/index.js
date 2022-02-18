import query from "../../db/connection";

export async function getAllCustomise() {
    const result = await query(`SELECT * FROM customise;`);
    return result.rows;
  }
  
  
  export async function createCustomise(body) {
    const customise_id = body.customise_id;
    const medication= body.medication;
    const appointment= body.appointment;
    const exercise = body.exercise;
    const isdark = body.isdark;
    const issimple = body.issimple;
      const data = await query(
      `INSERT INTO customise (customise_id,medication, appointment,exercise, isDark, isSimple) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING exercise;`,
      [customise_id,
        medication,
       appointment,
       exercise,
       isdark,
       issimple]
    );
   
  
    return data.rows;
  }
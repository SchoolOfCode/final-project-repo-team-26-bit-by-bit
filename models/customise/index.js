import query from "../../db/connection.js";

export async function getCustomiseByUsers(id) {
    const result = await query(`SELECT * FROM customise WHERE user_id = $1;`, [id]);
    return result.rows;
  }
  
  export async function getCustomiseByID(id) { 
    const result = await query(`SELECT * FROM customise WHERE customise_id = $1;`, [id]);
    return result.rows;
  }
  
  
  export async function createCustomise(body) {
    const user_id = body.user_id;
    const customise_id = body.customise_id;
    const medication= body.medication;
    const appointment= body.appointment;
    const exercise = body.exercise;
    const isdark = body.isdark;
    const issimple = body.issimple;
      const data = await query(
      `INSERT INTO customise (user_id,customise_id,medication, appointment,exercise, isDark, isSimple) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING exercise;`,
      [user_id,
        customise_id,
        medication,
       appointment,
       exercise,
       isdark,
       issimple]
    );
   
  
    return data.rows;
  }

  export async function updateCustomise(body) {
    const user_id = body.user_id;
    const medication= body.medication;
    const appointment= body.appointment;
    const  exercise = body.exercise;
    const isdark = body.isdark;
    const issimple = body.issimple;
    const customise_id = body.customise_id;
      const data = await query(
      `UPDATE customise SET user_id = $1, medication=$2, appointment=$3, exercise=$4, isDark=$5, isSimple=$6 WHERE customise_id = $7 RETURNING appointment;`,
      [user_id,
        medication,
appointment,
exercise,
isdark,
 issimple,
customise_id,]
    );
   
  
    return data.rows;
  }
  export async function DeleteCustomise(id){
  
    const data = await query(`DELETE FROM customise WHERE customise_id = $1`, [id])
  
    return data.rows
  
  }
import pg from "pg";
import {db} from "../config.js"

<<<<<<< HEAD
const pool = new pg.Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {rejectUnauthorized:false}
=======
export const pool = new pg.Pool({
    connectionString: db.database,
    ssl: {rejectUnauthorized: false}
>>>>>>> 29152041bfce1355be0fbdb69d044faee54f56c3
});


export default function query (text, params){

    return pool.query(text, params)
}



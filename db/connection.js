import pg from "pg";
import {db} from "../config.js"

const pool = new pg.Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {rejectUnauthorized:false}
});


export default function query (text, params){

    return pool.query(text, params)
}



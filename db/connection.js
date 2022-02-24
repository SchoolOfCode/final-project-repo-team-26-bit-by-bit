import pg from "pg";
import {db} from "../config.js"
//import { success, failure } from './handler';

export const pool = new pg.Pool({
    connectionString: db.database,
    ssl: {rejectUnauthorized: false}
});


export default function query (text, params){

    return pool.query(text, params)
}



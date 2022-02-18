import pg from "pg";

import { DB_HOST } from "../config";
const pool = new pg.Pool(
{
    connectionString: DB_HOST,
    ssl: {rejectUnauthorized: false}


}
);

export default pool;

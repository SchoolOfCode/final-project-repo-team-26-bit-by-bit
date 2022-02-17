import pg from "pg";
import { connectionString } from "pg/lib/defaults";
import { DB_HOST } from "../config";
const pool = new pg.Pool(
{
    connectionString: DB_HOST,
    ssl: {rejectUnauthorized: false}


}
);

export default pool;

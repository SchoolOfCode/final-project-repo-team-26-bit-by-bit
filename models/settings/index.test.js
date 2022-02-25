import supertest from "supertest";
import app from "../../app.js";
import { pool } from "../../db/connection.js";
import { test, expect, afterAll} from "@jest/globals";

const user_id = 1;
const setting_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

// maybe something wrong with setting_id?
// Only 1 route works
// Having trouble with /users/1/settings/1 route

describe("Routes for settings", () => {
  test("GET /users/1/settings", async () => {
    const response = await request.get("/users/1/settings");
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  
test("GET /users/1/settings/1", async () => {
    const response = await request.get("/users/1/settings/1");
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });

  test("POST /users/1/settings", async () => {
    const body = {
        user_id: user_id,
        setting_id: setting_id,
        isdark: true
    }
    const response = await request.post("/users/1/settings").send(body);
    console.log(response);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  
  test("PUT /users/1/settings/1", async () => {
    const body = {
        user_id: user_id,
        setting_id: setting_id,
        isdark: false
    }
    const response = await request.put("/users/1/settings/1").send(body);
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("DELETE /users/1/settings/1", async () => {
    const response = await request.delete("/users/1/settings/1");
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
 });

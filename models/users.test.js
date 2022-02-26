import supertest from "supertest";
import app from "../app.js";
import { pool } from "../db/connection.js";
import { test, expect, afterAll, beforeEach } from "@jest/globals";

const user_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("/user routes", () => {
  test("GET /users", async () => {
    const response = await request.get("/users");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    //assert array
  });

  test("POST /users", async () => {
    const body = { full_name: "Kat" };
    const response = await request.post("/users").send(body);
    console.log(response.body);
    expect(response.body.payload[0].full_name).toBe(body.full_name);
    //should this return an array of object, when it's only creating one user?
    //test shape of object
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
});

describe("/users/1 routes", () => {
  test("GET /users/1", async () => {
    const response = await request.get("/users/1");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });

  test("PUT /users/1", async () => {
    const body = {
      user_id: user_id,
      full_name: "Kat T",
    };
    const initResponse = await request.get("/users/1");
    const response = await request.put("/users/1").send(body, user_id);
    console.log("response", response.body);
    console.log("initResponse", initResponse.body);
    expect(response.body.payload[0].full_name).toBe(body.full_name);
    //expect(initResponse.body.payload[0].full_name).not.toBe(body.full_name)
    //should this return an array of object, when it's only creating one user?
    //test shape of object
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
});

//should there be a delete user?

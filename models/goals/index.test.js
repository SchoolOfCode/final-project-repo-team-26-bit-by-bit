import supertest from "supertest";
import app from "../../app.js";
import { pool } from "../../db/connection.js";
import { test, expect, afterAll } from "@jest/globals";

const goals_id = 1;
const user_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("goals routes", () => {
  test("GET /users/1/goals", async () => {
    const response = await request.get("/users/1/goals");
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("GET /users/1/goals/1", async () => {
    const response = await request.get("/users/1/goals/1");
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("POST /users/1/goals", async () => {
    const body = {
      user_id: user_id,
      goals_id: goals_id,
      text: "text",
      priority: "medium",
      due_date: "2022-11-11",
      iscompleted: true,
      amount: 3,
    };
    const response = await request.post("/users/1/goals").send(body);
    console.log("goals post", response.body);
    expect(Object.keys(response.body)).toContain("payload");
    expect(Object.keys(response.body.payload[0]).length).toBe(8);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("PUT /users/1/goals/1", async () => {
    const body = {
      user_id: user_id,
      goals_id: goals_id,
      text: "text2",
      priority: "high",
      due_date: "2022-10-10",
      iscompleted: true,
      amount: 3,
    };
    const initResponse = await request.get("/users/1/goals/1");
    const response = await request.put("/users/1/goals/1").send(body);
    console.log("goals put", response.body);
    expect(Object.keys(response.body.payload[0]).length).toBe(8);
    expect(Object.keys(response.body)).toContain("payload");
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(initResponse.body.payload[0].text).not.toBe(body.text);
    expect(initResponse.body.payload[0].priority).not.toBe(body.priority);
  });
  test("DELETE /users/1/goals", async () => {
    const response = await request.delete("/users/1/goals");
    console.log("goals delete", response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]);
  });
  test("DELETE /users/1/goals/1", async () => {
    const response = await request.delete("/users/1/goals/1");
    console.log("goals delete 1", response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]);
  });
});

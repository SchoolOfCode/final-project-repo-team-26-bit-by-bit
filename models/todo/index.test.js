import supertest from "supertest";
import app from "../../app.js";
import { pool } from "../../db/connection.js";
import { test, expect, afterAll } from "@jest/globals";
import { updateReminder } from "../reminders/index.js";

const todo_id = 1;
const user_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("/users/1/todo routes", () => {
  test("GET /users/1/todo", async () => {
    const response = await request.get("/users/1/todo");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("GET /users/1/todo/1", async () => {
    const response = await request.get("/users/1/todo/1");
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("POST /users/1/todo", async () => {
    const body = {
      user_id: user_id,
      todo_id: todo_id,
      text: "text",
      priority: "high",
      iscompleted: true,
    };
    const response = await request.post("/users/1/todo").send(body);
    expect(response.body.payload[0].text).toBe(body.text);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    //console.log("rb", response.body);
  });
  test("PUT /users/1/todo/1", async () => {
    const body = {
      user_id: user_id,
      text: "new text",
      priority: "low",
      iscompleted: false, //set from true
      todo_id: todo_id,
    };
    const initialResponse = await request.get("/users/1/todo/1");
    const updatedResponse = await request.put("/users/1/todo/1").send(body);
    console.log(updatedResponse.body);
    expect(initialResponse.body.payload[0].text).not.toBe(body.text);
    expect(updatedResponse.body.success).toBe(true);
    //expect(Object.keys(updatedResponse.body.payload[0]).length).toBe(1);
    expect(Object.keys(updatedResponse.body.payload[0])).toContain("text");
    expect(updatedResponse.body.payload[0].text).toBe(body.text);
    // ToDo: change createToDo/updateToDo
    // expect(before.iscompleted).not.toBe(after.iscompleted);
    // expect(before.priority).not.toBe(after.priority);
  });
  test("DELETE /users/1/todo", async () => {
    const body = {
      user_id: user_id,
      todo_id: todo_id,
    };
    const response = await request.delete("/users/1/todo").send(body);
    expect(response.body.success).toBe(true);
    expect(response.body.payload).toEqual([]); // return empty array
  });
  test("DELETE /users/1/todo/1", async () => {
    const body = {
      user_id: user_id,
      todo_id: todo_id,
    };
    const response = await request.delete("/users/1/todo/1").send(body);
    expect(response.body.success).toBe(true);
    expect(response.body.payload).toEqual([]); // return empty array
  });
});

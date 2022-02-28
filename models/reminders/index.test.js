import supertest from "supertest";
import app from "../../app.js";
import { pool } from "../../db/connection.js";
import { test, expect, afterAll } from "@jest/globals";

const reminder_id = 1;
const user_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("/users/1/reminders routes", () => {
  test("GET /users/1/reminders", async () => {
    const response = await request.get("/users/1/reminders");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });

  test("POST /users/1/reminders", async () => {
    const body = {
      user_id: user_id,
      reminder_id: reminder_id,
      due_date: "2022-10-10",
      text: "mop the floors",
      iscompleted: true,
    };
    const response = await request.post("/users/1/reminders").send(body);
    //console.log("reminder post", response.body);
    expect(Object.keys(response.body.payload[0]).length).toBe(6);
    expect(Object.keys(response.body.payload[0])).toContain("text");
  });

  test("GET /users/1/reminders/1", async () => {
    const response = await request.get("/users/1/reminders/1");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });

  test("PUT /users/1/reminders/1", async () => {
    const body = {
      user_id: user_id,
      reminder_id: reminder_id,
      text: "text2",
      due_date: "2022-11-11",
      iscompleted: false,
    };
    const initResponse = await request.get("/users/1/reminders/1");
    const response = await request.put("/users/1/reminders/1").send(body);
    //console.log("reminder put", response.body.payload[0]);
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Object.keys(response.body.payload[0]).length).toBe(6);
    expect(Object.keys(response.body.payload[0])).toContain("text");
    expect(initResponse.body.payload[0].text).not.toBe(body.text);
  });
  test("DELETE /users/1/reminders", async () => {
    const body = {
      user_id: user_id,
      reminder_id: reminder_id,
    };
    const response = await request.delete("/users/1/reminders").send(body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]); // return empty array
  });
  test("DELETE /users/1/reminders/1", async () => {
    const body = {
      user_id: user_id,
      reminder_id: reminder_id,
    };
    const response = await request.delete("/users/1/reminders/1").send(body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]); // return empty array
  });
});

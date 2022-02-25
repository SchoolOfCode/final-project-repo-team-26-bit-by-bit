import supertest from "supertest";
import app from "../../app.js";
import { pool } from "../../db/connection.js";
import { test, expect, afterAll } from "@jest/globals";

const custom_id = 1;
const user_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("/users/1/custom_section routes", () => {
  test("GET /users/1/custom_section", async () => {
    const response = await request.get("/users/1/custom_section");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("GET /users/1/custom_section/1", async () => {
    const response = await request.get("/users/1/custom_section/1");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("POST /users/1/custom_section", async () => {
    const body = {
      user_id: user_id,
      custom_id: custom_id,
      custom_name: "exercise",
    };
    const response = await request.post("/users/1/custom_section").send(body);
    //console.log(response.body);
    expect(response.body.payload[0].text).toBe(body.text);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    //expect(response.body.payload.length + 1).toBe(response2.body.payload.length)
  });
  test("PUT /users/1/custom_section/1", async () => {
    const body = {
      user_id: user_id,
      custom_id: custom_id,
      custom_name: "meditate",
    };
    const initResponse = await request.get("/users/1/custom_section/1");
    const response = await request.put("/users/1/custom_section/1").send(body);
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(initResponse.body.payload[0].custom_name).not.toBe(body.custom_name);
  });
  test("DELETE /users/1/custom_section", async () => {
    const response = await request.delete("/users/1/custom_section");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]);
  });
  test("DELETE /users/1/custom_section/1", async () => {
    const response = await request.delete("/users/1/custom_section/1");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]);
  });
});

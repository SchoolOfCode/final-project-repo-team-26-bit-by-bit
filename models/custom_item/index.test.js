import supertest from "supertest";
import app from "../../app.js";
import { pool } from "../../db/connection.js";
import { test, expect, afterAll } from "@jest/globals";




const section_id = 1;
const user_id = 1;
const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("/users/1/custom_item routes", () => {
  test("GET /users/1/custom_item", async () => {
    const response = await request.get("/users/1/custom_item");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("GET /users/1/custom_item/1", async () => {
    const response = await request.get("/users/1/custom_item/1");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });
  test("POST /users/1/custom_item", async () => {
    const body = {
      user_id: user_id,
      section_id: section_id,
      text: "new custom",
      "due_date": "2022/05/13"
    };
    const response = await request.post("/users/1/custom_item").send(body);
    //console.log(response.body);
    expect(response.body.payload[0].text).toBe(body.text);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    //expect(response.body.payload.length + 1).toBe(response2.body.payload.length)
  });
  test("PUT /users/1/custom_item/1", async () => {
    const body = {
      user_id: user_id,
      section_id: section_id,
      text: "meditate",
    };
    const initResponse = await request.get("/users/1/custom_item/1");
    const response = await request.put("/users/1/custom_item/1").send(body);
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(initResponse.body.payload[0].text).not.toBe(body.text);
  });
  test("DELETE /users/1/custom_item", async () => {
    const response = await request.delete("/users/1/custom_item");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]);
  });
  test("DELETE /users/1/custom_item/1", async () => {
    const response = await request.delete("/users/1/custom_item/1");
    //console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.body.payload).toEqual([]);
  });
});

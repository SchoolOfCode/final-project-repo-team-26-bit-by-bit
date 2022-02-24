import supertest from "supertest";
import app from "../app.js";
import router from "./users.js";
import { pool } from "../db/connection.js";
import { test, expect, afterAll, beforeEach } from "@jest/globals";

//test
const user_id = 1;
const todo_id = 1;
const reminder_id = 1;
const custom_id = 1;

const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("/user routes", () => {
  test("GET /users", async () => {
    const response = await request.get("/users");
    console.log(response.body);
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
  });
});

describe("/user/1 routes", () => {
  test("GET /user/1s", async () => {
    const response = await request.get("/users/1");
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.statusCode).toBe(200);
  });

  test("POST /users/1", async () => {
    const body = {
      user_id: 1,
      full_name: "Kat T",
    };
    const response = await request.put("/users/1").send(body, user_id);
    console.log(response.body);
    //expect(response.body.payload[0].full_name).toBe(body.full_name);
    //should this return an array of object, when it's only creating one user?
    //test shape of object
  });
});

describe("Path methods", function () {
  test("has routes", () => {
    const routes = [
      { path: "/", method: "post" },
      { path: "/", method: "get" },
      { path: "/:user_id", method: "get" },
      { path: "/:user_id", method: "put" },
      { path: "/:user_id/reminders", method: "get" },
      { path: "/:user_id/reminders", method: "post" },
      { path: "/:user_id/custom_section", method: "get" },
      { path: "/:user_id/custom_section", method: "post" },
      { path: "/:user_id/todo", method: "get" },
      { path: "/:user_id/todo", method: "post" },
      { path: "/:user_id/goals", method: "get" },
      { path: "/:user_id/goals", method: "post" },
      { path: "/:user_id/settings", method: "get" },
      { path: "/:user_id/settings", method: "post" },
      { path: "/:user_id/reminders/:reminder_id", method: "get" },
      { path: "/:user_id/reminders/:reminder_id", method: "put" },
      { path: "/:user_id/reminders/:reminder_id", method: "delete" },
      { path: "/:user_id/todo/:todo_id", method: "get" },
      { path: "/:user_id/todo/:todo_id", method: "put" },
      { path: "/:user_id/todo/:todo_id", method: "delete" },
    ];
    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      );
      expect(match).toBeTruthy();
    });
  });
});

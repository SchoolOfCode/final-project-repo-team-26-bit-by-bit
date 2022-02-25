import router from "./users.js";
import { pool } from "../db/connection.js";
import { test, expect, afterAll} from "@jest/globals";

afterAll(async () => {
  await pool.end();
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

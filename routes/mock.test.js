import supertest from "supertest";
import makeApp from "../app.js";
import { pool } from "../db/connection.js";
import { test, expect, afterAll, beforeEach } from "@jest/globals";

const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

const createUser = jest.fn();
const app = makeApp({ createUser });

describe("POST /users using mock", () => {
  beforeEach(() => {
    createUser.mockReset();
  });

  describe("when passed a full_name", () => {
    test("should save the full_name", async () => {
      const body = {
        full_name: "full name",
      };
      const response = await request(app).post("/users").send(body);
      expect(createUser.mock.calls[0][0]).toBe(body.username);
      //createUser.mock.calls[0] represents the data that gets passed in the first time it’s called.
    });
  });
});

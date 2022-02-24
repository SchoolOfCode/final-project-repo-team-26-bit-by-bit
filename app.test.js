import request from "supertest";
import app from "./app.js"

describe("Test the root path", () => {
  test("It should response the GET method", async function () {
    const expectedBody = {
      message: "Welcome to the future 🔮"
   };
   const response = await request(app).get("/");
    expect(typeof response).toBe('object')
    expect(response.statusCode).toBe(200);
  });
  test("gives us back 404, with a message", async function () {
    const expectedBody = {
      message: "We couldn't find what you were looking for 😞"
    };
    const response = await request(app).get("/foo/bar");
    expect(response.body).toStrictEqual(expectedBody);
    expect(response.statusCode).toBe(404);
  });
});

// why doesn't users work?

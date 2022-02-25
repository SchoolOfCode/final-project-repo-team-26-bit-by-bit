import supertest from "supertest";
import app from "./app.js";
import { pool } from "./db/connection.js";
import { test, expect, afterAll, beforeEach } from "@jest/globals";

const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

describe("Test the root path", () => {
  test("It should response the GET method", async function () {
    //  const expectedBody = 
    //  '<html>\n' +
    //  '  <head>\n' +
    //  '    <title>Your Generated Front-end</title>\n' +
    //  '    <link rel="stylesheet" href="/stylesheets/style.css" />\n' +
    //  '  </head>\n' +
    //  '\n' +
    //  '  <body>\n' +
    //  '    <h1>Express + ES6 Imports</h1>\n' +
    //  '    <p>Welcome to the future 🔮</p>\n' +
    //  '  </body>\n' +
    //  '</html>\n'

   const response = await request.get("/");
   //console.log(response.text)
    expect(typeof response).toBe('object')
    expect(response.statusCode).toBe(200);
    //expect(response.text).toBe(expectedBody);
  });
  test("gives us back 404, with a message", async function () {
    const expectedBody = {
      message: "We couldn't find what you were looking for 😞"
    };
    const response = await request.get("/foo/bar");
    expect(response.body).toStrictEqual(expectedBody);
    expect(response.statusCode).toBe(404);
  });
});



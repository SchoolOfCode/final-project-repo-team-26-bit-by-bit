import request from "supertest";
import makeApp from "./app.js"
import { jest } from '@jest/globals'
// import { createUser } from "./models/users.js"; 


const createUser = jest.fn()
const app = makeApp({createUser})

describe("POST /users", () => {
  beforeEach(() => {
    createUser.mockReset()
  })

  describe("when passed a username and password", () => {
    test("should save the username and password in the database", () => {
      const body = {
        username: "username",
        password: "password"
      }
      const response = await request(app).post("/users").send(body)
      expect(createUser.mock.calls[0][0]).toBe(body.username)
      expect(createUser.mock.calls[0][1]).toBe(body.password)
    })
    test("should contain the userId from the database in the json body", () => {

      createUser.mockResolvedValue(1)
    
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
      expect(response.body.user_id).toBe(1)
    })
    test("should contain the userId from the database in the json body", () => {
      for (let i = 0; i < 5; i++) {
        createUser.mockResolvedValue(i)
        const response = await request(app).post("/users").send({
          username: "username",
          password: "password"
        })
        expect(response.body.user_id).toBe(i)
      }
    })
  })
})



describe("GET /users", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      message: "I wish we had some information to give you ☹️"
    };
    const actual = await request(app).get("/users");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});



describe("GET /", function () {
  test("gives us back 200, with a message", async function () {

    //arrange;
    const expectedBody = `Express + ES6 Imports
Welcome to the future 🔮`
       
    
    //act;
    const actual = await request(app).get("/");
    //assert;
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);

    // const expectedBody = {
    //   message: "Welcome to the future 🔮"
    // };

    // const actual = await request(app).get("/");
    // expect(actual.body).toStrictEqual(expectedBody);
    // expect(actual.statusCode).toBe(200);


  });
});
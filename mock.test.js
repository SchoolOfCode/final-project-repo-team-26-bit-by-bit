// import request from "supertest"
// import makeApp from "./app.js"
// import { jest } from '@jest/globals'

// const createUser = jest.fn()
// const app = makeApp({createUser})

// describe("POST /users", () => {

//   beforeEach(() => {
//     createUser.mockReset()
//   })

//   describe("when passed a username and password", () => {
//     test("should save the username and password in the database", () => {
//       const body = {
//         username: "username",
//         password: "password"
//       }
//       const response = request(app).post("/users").send(body)
//       expect(createUser.mock.calls[0][0]).toBe(body.username) //createUser.mock.calls[0] represents the data that gets passed in the first time it’s called.
//       expect(createUser.mock.calls[0][1]).toBe(body.password) //The server should call the function with the username and password like this createUser(username, password), so createUser.mock.calls[0][0] should be the username and createUser.mock.calls[0][0] should be the password.
//     })
//   })

// })
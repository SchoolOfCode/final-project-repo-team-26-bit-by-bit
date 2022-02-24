import supertest from 'supertest';
import router from './users.js'
import app from '../app.js'
import { pool } from '../db/connection.js'
import { test, expect, afterAll } from "@jest/globals";

//test
const user_id = 1;
const todo_id = 1;
const reminder_id = 1;
const custom_id = 1;

const request = supertest(app)

afterAll(async ()=>{
 await pool.end();
})

test("GET /users", async ()=>{
const response = await request.get('/users')
console.log(response.body)
expect(response.body.success).toBe(true)
expect(response.statusCode).toBe(200)
//assert array
})

test("POST /users", async ()=>{
  const body = {full_name:'Kat'}
  const response = await request.post('/users')
  .send(body)
  console.log(response.body)
  expect(response.body.payload[0].full_name).toBe(body.full_name)

})


// describe('Path methods', function() {
// test('has routes', () => {

//   const routes = [
//     { path: '/', method: 'post' },
//     { path: '/', method: 'get' },
//     { path: '/:user_id', method: 'get' },
//     { path: '/:user_id', method: 'put' },
//     { path: '/:user_id/reminders', method: 'get' },
//     { path: '/:user_id/reminders', method: 'post' },
//     { path: '/:user_id/custom_section', method: 'get' },
//     { path: '/:user_id/custom_section', method: 'post' },
//     { path: '/:user_id/todo', method: 'get' },
//     { path: '/:user_id/todo', method: 'post' },
//     { path: '/:user_id/goals', method: 'get' },
//     { path: '/:user_id/goals', method: 'post' },
//     { path: '/:user_id/settings', method: 'get' },
//     { path: '/:user_id/settings', method: 'post' },
//     { path: '/:user_id/reminders/:reminder_id', method: 'get' },
//     { path: '/:user_id/reminders/:reminder_id', method: 'put' },
//     { path: '/:user_id/reminders/:reminder_id', method: 'delete' },
//     { path: '/:user_id/todo/:todo_id', method: 'get' },
//     { path: '/:user_id/todo/:todo_id', method: 'put' },
//     { path: '/:user_id/todo/:todo_id', method: 'delete' },

//   ]

//   routes.forEach((route) => {
//     const match = router.stack.find(
//       (s) => s.route.path === route.path && s.route.methods[route.method]
//     );
//     expect(match).toBeTruthy();
//   });
// });
// });

// describe('loading express', function () {
//   it('responds to /', function (done) {
//   request(app)
//     .get('/')
//     .expect(200, done);
//   });
//   // it('responds to /:user_id', function (done) {
//   //   request(app)
//   //     .get('/:user_id')
//   //     .expect(200, done);
//   //   }); Not found?
//   it('404 everything else', function (done) {
//     request(app)
//       .get('/foo/bar')
//       .expect(404, done);
//   });
//   it('should return message', async function (){
//     const expected = "We couldn't find what you were looking for 😞"
//     const actual = await request(app).get("/foo/bar");
//     expect(actual.body.message).toEqual(expected)
//   })
//   it('should return success=true', async function (){
//     const actual = await request(app).get("/users");
//     expect(actual.body.success).toEqual(true)
//   })
//   it('should return success=true', async function (){
//     //const user_id = 1;
//     const actual = await request(app).get("/users/1");
//     expect(actual.body.sucess).toEqual(true)
//   })
// });


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

// describe('POST /', function(){
//   it('', async function () {
//     request(app)
//         .post('/')
//         .send({
//             'username' : 'Kat T'
//         })
//         .expect(200)
//         .end(function(err, res){
//             done();
//         })
//   })
// });
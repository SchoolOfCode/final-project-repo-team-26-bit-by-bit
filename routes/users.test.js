import request from 'supertest';
import app from '../app.js'; //reference to you app.js file
import router from './users.js'
import {jest} from '@jest/globals';



describe('GET /users', function () {
  it('respond with json containing a list of all users', function (done) {
      request(app)
          .get('/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

describe('', function() {
  it('', async function (){
    const expected = "We couldn't find what you were looking for 😞"
    const actual = await request(app).get("/nodata");
    // expect(actual.success).toBe(expected)
    // expect(actual.statusCode).toBe(200)
    console.log(actual.body)
    expect(actual.body.message).toEqual(expected)
  })
})


describe('', function() {
  it('', async function (){

const expected = true
const requestWithSupertest = supertest(app);
const res = await requestWithSupertest.get('/users');
expect(res.body.success).toEqual(expected)
  })
});


// describe('', function() {
//   it('', async function (){
//     const expected = true
//     const actual = await request(app).get("/users");
//     // expect(actual.success).toBe(expected)
//     // expect(actual.statusCode).toBe(200)
//     console.log(actual)
//     expect(actual.success).toBeTruthy()
//   })
// })


describe('', function() {
  it('', async function (){

const expected = true
const requestWithSupertest = supertest(app);
const res = await requestWithSupertest.get('/users/1');
expect(res.body.success).toEqual(expected)
  })
});


describe('', function() {
  it('', async function (){

const expected = true
const requestWithSupertest = supertest(app);
const res = await requestWithSupertest.post('/users');
expect(res.body.success).toEqual(expected)
  })
});




describe('', function() {
  it('', async function (){

const expected = true
const requestWithSupertest = supertest(app);
const res = await requestWithSupertest.get('/users/1/reminders');
expect(res.body.success).toEqual(expected)
  })
});



describe('', function() {
  it('', async function (){

const expected = true // make false to make sure it fails
const requestWithSupertest = supertest(app);
const res = await requestWithSupertest.post('/users/1/reminders');
expect(res.body.success).toEqual(expected)
  })
});


describe('', function() {
  it('', async function (){

const expected = true // make false to make sure it fails
const requestWithSupertest = supertest(app);
const res = await requestWithSupertest.delete('/users/1/reminders');
expect(res.body.success).toEqual(expected)
  })
});



// router.get("/:id/customise", async function (req, res) {
//   const id = Number(req.params.id)
//   const customise = await getAllCustomise(id);

//   res.json({
//     success: true,
//     payload: customise,
//   });
// });

// router.post("/:id/customise", async function (req, res) {
//   const body = req.body;
//   const created = await createCustomise(body);

//   res.json({
//     success: true,
//     payload: created,
//   });
// });

// router.put("/:id/customise/:id", async function (req, res ){
//   const body = req.body;
//   const update = await updateCustomise(body);

//   res.json({
//     success: true,
//     payload: update,
//   })
// })

// router.delete("/:id/customise/", async function (req, res){
//   const id = Number(req.params.id);
//   const remove = await DeleteCustomise(id);

//   res.json({
//     success: true,
//     payload: remove,
//   })
// })

// router.get("/:id/goals", async function (req, res) {
//   const id = Number(req.params.id)
//   const goals = await getAllGoals(id);

//   res.json({
//     success: true,
//     payload: goals,
//   });
// });

// router.post("/:id/goals", async function (req, res) {
//   const body = req.body;
//   const create = await createGoals(body);
//   res.json({
//     success: true,
//     payload: create,
//   });
// });

// router.put("/:id/goals/:id", async function (req, res) {
//   const body = req.body;
//   const update = await updateGoals(body);
//   res.json({
//     success: true,
//     payload: update,
//   });
// });

// router.delete("/:id/goals/", async function (req, res) {
//   const id = Number(req.params.id);
//   const removed = await DeleteGoals(id);

//   res.json({
//     success: true,
//     payload: removed,
//   });
// });
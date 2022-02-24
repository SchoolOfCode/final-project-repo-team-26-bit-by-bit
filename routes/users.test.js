import request from 'supertest';
import app from '../app.js'; //reference to you app.js file
import router from './users.js'
import {jest} from '@jest/globals';

// import a mock app here

jest.mock('/app')

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




import request from 'supertest';
import router from './users.js'
import app from '../app.js'
import pool from '../db/connection.js'

//test
const user_id = 1;
const todo_id = 1;
const reminder_id = 1;
const custom_id = 1;

describe('Path methods', function() {
test('has routes', () => {

  const routes = [
    { path: '/', method: 'post' },
    { path: '/', method: 'get' },
    { path: '/:user_id', method: 'get' },
    { path: '/:user_id', method: 'put' },
    { path: '/:user_id/reminders', method: 'get' },
    { path: '/:user_id/reminders', method: 'post' },
    { path: '/:user_id/custom_section', method: 'get' },
    { path: '/:user_id/custom_section', method: 'post' },
    { path: '/:user_id/todo', method: 'get' },
    { path: '/:user_id/todo', method: 'post' },
    { path: '/:user_id/goals', method: 'get' },
    { path: '/:user_id/goals', method: 'post' },
    { path: '/:user_id/settings', method: 'get' },
    { path: '/:user_id/settings', method: 'post' },
    { path: '/:user_id/reminders/:reminder_id', method: 'get' },
    { path: '/:user_id/reminders/:reminder_id', method: 'put' },
    { path: '/:user_id/reminders/:reminder_id', method: 'delete' },
    { path: '/:user_id/todo/:todo_id', method: 'get' },
    { path: '/:user_id/todo/:todo_id', method: 'put' },
    { path: '/:user_id/todo/:todo_id', method: 'delete' },

  ]

  routes.forEach((route) => {
    const match = router.stack.find(
      (s) => s.route.path === route.path && s.route.methods[route.method]
    );
    expect(match).toBeTruthy();
  });
});
});

describe('loading express', function () {
  it('responds to /', function (done) {
  request(app)
    .get('/')
    .expect(200, done);
  });
  // it('responds to /:user_id', function (done) {
  //   request(app)
  //     .get('/:user_id')
  //     .expect(200, done);
  //   }); Not found?
  it('404 everything else', function (done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
  it('should return message', async function (){
    const expected = "We couldn't find what you were looking for 😞"
    const actual = await request(app).get("/foo/bar");
    expect(actual.body.message).toEqual(expected)
  })
  it('should return success=true', async function (){
    const actual = await request(app).get("/users");
    expect(actual.body.success).toEqual(true)
  })
});



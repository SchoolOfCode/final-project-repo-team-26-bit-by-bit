
import request from 'supertest';
import app from '../app.js'; //reference to you app.js file

describe('GET /users', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

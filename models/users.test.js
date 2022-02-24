import pool from "../db/connection.js";
import app from '../app.js'
import router from "../routes/users.js";
import request from 'supertest';
import { jest } from '@jest/globals'

// const createUser = jest.fn()
// const app = makeApp({createUser})


describe('POST /', function(){
    it('', function(done){
      request(app)
          .post('/')
          .send({
              'username' : 'Kat T'
          })
          .expect(200)
          .end(function(err, res){
              done();
          })
    })
  });

// describe("when passed a username", () => {
//     beforeEach(() => {
//         createUser.mockReset()
//       })
//     test("should save the username in the database", async () => {
//       const body = {
//         username: "username"
//       }
//       const response = await request(app).post("/").send(body)
//       expect(createUser.mock.calls[0][0]).toBe(body.username)
//     })
//   })







//   export async function getUserById(id) {
//     const result = await query(`SELECT * FROM users WHERE user_id = $1;`, [id]);
//     return result.rows;
//   }
  

   
  
//     return data.rows;
//   }
  
//   export async function updateUser(body) { 
//     const full_name= body.full_name;
//       const data = await query(
//       `UPDATE users SET full_name = $1 WHERE user_id = $2 RETURNING full_name;`,
//       [ full_name]
//     );
   
  
//     return data.rows;
//   }
  
  
  
import express from 'express';
import path from 'path';
import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import createError from 'http-errors'
import usersRouter  from './routes/users.js';

//export default function(database) {

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/users', usersRouter);
 

// app.post('/users', async (req, res) => {
//   const { username, password } = req.body
//   if (!username || !password) {
//     res.send(400)
//     return
//   }
//   const user_id = database.createUser(username, password)
//   res.send({user_id: 0})
// })

// app.use(function (req, res, next) {
//   if (!req.user_id) return next(createError(401, 'Please login to view this page.'))
//   next()
// })
 
app.use(async function (req, res) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

//return app}

export default app;

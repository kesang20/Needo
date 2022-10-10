// require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
// const { getAllreviews, getMeta, incrementHelpful, reportReview, insertReview, loaderio } = require('./controller.js')
const db = require('../db/index.js')

const TWO_HOURS = 1000 * 60 * 60 * 2;

const {
  PORT = 3000,
  NODE_ENV = 'development',
  SESS_NAME = 'sid',
  SESS_SECRET = 'shh!quiet',
  SESS_LIFETIME = TWO_HOURS
} = process.env;

const IN_PROD = NODE_ENV === 'production';

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, '../Client/dist')));

app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUnitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }
}))



app.get('/movie', (req, res) => {
  const {genre, year} = req.query;
  console.log(year, genre);

  const query = `SELECT * from movies
                where genre='${genre}'`;
  db.query(query)
    .then(({rows}) => {
      const number = Math.floor(Math.random() * rows.length);
      console.log(rows);
      res.status(200).send(rows[number]);
    })
    .catch(err => console.log(err));
})


app.post('/addMovie', (req, res) => {
  const{username, movies_id} = req.body;
  console.log(username);
  const query = 'SELECT id from users where username = $1';
  const query1 = 'INSERT INTO users (username) VALUES ($1) returning id'
  const query2 = 'INSERT INTO favorites (user_id, movies_id) VALUES ($1, $2)'

  db.query(query, [username])
    .then(({rows}) => {
      if(rows.length === 0) {
        db.query(query1, [username])
          .then(({rows}) => {
            let {id} = rows[0];
            return db.query(query2, [id, movies_id]);
          })
      } else {
        let {id} = rows[0];
        return db.query(query2, [id, movies_id]);
      }

    })
    .then((response) => {
          res.status(201).send(response);
        })
    .catch((error) => {
      res.send(error);
    })
})

app.get('/favorites', (req, res) => {
  const {username} = req.query;
  const query = `SELECT id from users where username = $1`;

  const query1 = `SELECT movies.*, favorites.movies_id
                  FROM favorites
                  INNER JOIN movies
                  ON movies.id = favorites.movies_id
                  WHERE favorites.user_id = $1;`

  db.query(query, [username])
    .then(({rows}) => {
      const id  = rows[0]?.id;
      db.query(query1, [id])
        .then(({rows}) => {
          res.status(200).send(rows);
        })
    })
    .catch((error) => console.log(error));
})

app.listen(3000);
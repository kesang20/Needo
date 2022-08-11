const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'kesang',
  database: 'movies',
  password: 'kesang2021',
  port: 5432
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  }
}
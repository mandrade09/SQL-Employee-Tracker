const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee-management',
  password: 'berkeley9',
  port: 5432,
});

module.exports = pool;

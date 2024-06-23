const pool = require('../db');

async function getAllDepartments() {
  const result = await pool.query('SELECT * FROM department');
  return result.rows;
}

async function addDepartment(name) {
  await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
}

module.exports = { getAllDepartments, addDepartment };

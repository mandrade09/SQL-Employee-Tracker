const pool = require('../db');

async function getAllEmployees() {
  const result = await pool.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager_first_name, manager.last_name AS manager_last_name 
                                    FROM employee 
                                    JOIN role ON employee.role_id = role.id 
                                    JOIN department ON role.department_id = department.id 
                                    LEFT JOIN employee manager ON employee.manager_id = manager.id`);
  return result.rows;
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
}

async function updateEmployeeRole(employee_id, role_id) {
  await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
}

module.exports = { getAllEmployees, addEmployee, updateEmployeeRole };

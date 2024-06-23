const inquirer = require('inquirer');
const { getAllDepartments, addDepartment } = require('./queries/departments');
const { getAllRoles, addRole } = require('./queries/roles');
const { getAllEmployees, addEmployee, updateEmployeeRole } = require('./queries/employees');

async function mainMenu() {
  console.log('Main menu is being called'); // Debugging statement
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ],
    },
  ]);

  console.log(`Action selected: ${action}`); // Debugging statement

  switch (action) {
    case 'View all departments':
      const departments = await getAllDepartments();
      console.table(departments);
      break;
    case 'View all roles':
      const roles = await getAllRoles();
      console.table(roles);
      break;
    case 'View all employees':
      const employees = await getAllEmployees();
      console.table(employees);
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:',
        },
      ]);
      await addDepartment(departmentName);
      console.log('Department added successfully.');
      break;
    case 'Add a role':
      const departmentsForRole = await getAllDepartments();
      const departmentChoices = departmentsForRole.map(dep => ({ name: dep.name, value: dep.id }));
      const { roleName, roleSalary, roleDepartmentId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleName',
          message: 'Enter the name of the role:',
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'Enter the salary of the role:',
        },
        {
          type: 'list',
          name: 'roleDepartmentId',
          message: 'Select the department for the role:',
          choices: departmentChoices,
        },
      ]);
      await addRole(roleName, roleSalary, roleDepartmentId);
      console.log('Role added successfully.');
      break;
    case 'Add an employee':
      const rolesForEmployee = await getAllRoles();
      const employeesForManager = await getAllEmployees();
      const roleChoices = rolesForEmployee.map(role => ({ name: role.title, value: role.id }));
      const managerChoices = employeesForManager.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
      managerChoices.unshift({ name: 'None', value: null });
      const { firstName, lastName, employeeRoleId, employeeManagerId } = await inquirer.prompt([
        {
          type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the employee:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the employee:',
      },
      {
        type: 'list',
        name: 'employeeRoleId',
        message: 'Select the role of the employee:',
        choices: roleChoices,
      },
      {
        type: 'list',
        name: 'employeeManagerId',
        message: 'Select the manager of the employee:',
        choices: managerChoices,
      },
    ]);
    await addEmployee(firstName, lastName, employeeRoleId, employeeManagerId);
    console.log('Employee added successfully.');
    break;
  case 'Update an employee role':
    const employeesForUpdate = await getAllEmployees();
    const roleChoicesForUpdate = rolesForEmployee.map(role => ({ name: role.title, value: role.id }));
    const employeeChoicesForUpdate = employeesForUpdate.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
    const { employeeId, newRoleId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: 'Select the employee to update:',
        choices: employeeChoicesForUpdate,
      },
      {
        type: 'list',
        name: 'newRoleId',
        message: 'Select the new role for the employee:',
        choices: roleChoicesForUpdate,
      },
    ]);
    await updateEmployeeRole(employeeId, newRoleId);
    console.log('Employee role updated successfully.');
    break;
  case 'Exit':
    console.log('Exiting application'); // Debugging statement
    process.exit();
  }

  mainMenu();
}

console.log('Starting application'); // Debugging statement
mainMenu();

# SQL-Employee-Tracker
Application to manage a company's employee database


# SQL Challenge: Employee Tracker (Week 12 Challenge)

## Summary of Task

This week my task was to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.

Because this application is deployed, I have provided a link to a walkthrough video at the end of this README that demonstrates its functionality and passes all of the tests. 

Below are the following Challenge requirements according to the 
**User Story** & **Acceptance Criteria**

### User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```


## Additional Requirements

My application uses the [pg package](https://www.npmjs.com/package/pg) to connect to your PostgreSQL database and perform queries, and the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line. 


The application may be invoked by using the following command:

```bash
node index.js
```

Here is the schema with the following three tables:

* `department`

  * `id`: `SERIAL PRIMARY KEY`

  * `name`: `VARCHAR(30) UNIQUE NOT NULL` to hold department name

* `role`

  * `id`: `SERIAL PRIMARY KEY`

  * `title`: `VARCHAR(30) UNIQUE NOT NULL` to hold role title

  * `salary`: `DECIMAL NOT NULL` to hold role salary

  * `department_id`: `INTEGER NOT NULL` to hold reference to department role belongs to

* `employee`

  * `id`: `SERIAL PRIMARY KEY`

  * `first_name`: `VARCHAR(30) NOT NULL` to hold employee first name

  * `last_name`: `VARCHAR(30) NOT NULL` to hold employee last name

  * `role_id`: `INTEGER NOT NULL` to hold reference to employee role

  * `manager_id`: `INTEGER` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

I also include a `seeds.sql` file to pre-populate my database, which makes the development of individual features much easier.


## Project View

![Employee Tracker Application Run](<employee-management/images/Application Run in Terminal Screenshot.jpg>)

## Contact Information
Thanks for visiting!

If you would like to learn more, or contact me, feel free to reach me at the following:

<ul>
    <li>Video Walkthrough URL: https://drive.google.com/file/d/1M1Cdpsq5dmHgX8GO1Zv9JA6tXHddjUWH/view </li>
    <li>GitHub URL: https://github.com/mandrade09/SQL-Employee-Tracker </li>
    <li>E-mail: mattandrade09@gmail.com </li>
    <li>Phone: 310.903.9150</li>
</ul>

<p>
<footer> &ndash; Matthew Andrade</footer>
</p>
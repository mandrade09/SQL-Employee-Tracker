INSERT INTO department (name) VALUES ('Engineering'), ('Legal Department'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000, 1),
('In-House Counsel', 60000, 2),
('Stock Broker', 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Bill', 'Gates', 1, NULL),
('Vincent', 'Gambini', 2, NULL),
('Jordan', 'Belfort', 3, NULL);

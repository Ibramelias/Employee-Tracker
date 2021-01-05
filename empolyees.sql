DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;


-- Create the department table
CREATE TABLE department(
id int NOT NULL AUTO_INCREMENT,
name varchar(30) NOT NULL,
PRIMARY KEY (id)
);


-- Create the role table
CREATE TABLE role(
id int NOT NULL AUTO_INCREMENT,
title varchar(30) NOT NULL,
salary decimal,
department_id Int,
PRIMARY KEY (id)
);


-- Create the Employee table.
CREATE TABLE employee(
id int NOT NULL AUTO_INCREMENT,
first_name varchar(30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id int,
PRIMARY KEY (id)
);


-- Inset data (empolyee table).
INSERT INTO employee (first_name , last_name, role_id) VALUES ("Ibram","Elias", 1);
INSERT INTO employee (first_name , last_name, role_id) VALUES ("Mina","Makram",2);
INSERT INTO employee (first_name , last_name, role_id) VALUES ("Joe","Habib",3);
INSERT INTO employee (first_name , last_name, role_id) VALUES ("Mark","William", 4);
INSERT INTO employee (first_name , last_name, role_id) VALUES ("Geroge","Edwar",5);
INSERT INTO employee (first_name , last_name, role_id) VALUES ("Jack","Edwar",6);

-- Inset data (role table).
INSERT INTO role (title , salary, department_id) VALUES ("accountant","8000",1);
INSERT INTO role (title , salary, department_id) VALUES ("developer","12000",2);
INSERT INTO role (title , salary, department_id) VALUES ("desginer","15000",3);
INSERT INTO role (title , salary, department_id) VALUES ("doctor","1000",4);
INSERT INTO role (title , salary, department_id) VALUES ("engineer","13000",5);
INSERT INTO role (title , salary, department_id) VALUES ("auditor","7000",6);

-- Inset data (department table).
INSERT INTO department (name) VALUES ("finance");
INSERT INTO department (name) VALUES ("IT");                    
INSERT INTO department (name) VALUES ("design");
INSERT INTO department (name) VALUES ("health");
INSERT INTO department (name) VALUES ("civic");
INSERT INTO department (name) VALUES ("finance");

SELECT * from department;
SELECT * from role;
SELECT * from employee;

select employee.first_name, employee.last_name, role.title, role.salary, department.name from employee 
INNER join role  on employee.role_id = role.id
INNER join department  on role.department_id = department.id
order by department.name;


DROP DATABASE IF EXISTS employee_tracker_DB;
CREATE DATABASE employee_tracker_DB;
USE employee_tracker_DB;

-- Create the Employee table.
CREATE TABLE empolyee(
id int NOT NULL AUTO_INCREMENT,
first_name varchar(30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);

-- Create the role table
CREATE TABLE role(
id int NOT NULL AUTO_INCREMENT,
title varchar(30) NOT NULL,
salary decimal,
PRIMARY KEY (id)
);

-- Create the department table
CREATE TABLE department(
id int NOT NULL AUTO_INCREMENT,
name varchar(30) NOT NULL,
PRIMARY KEY (id)
);


-- Inset data (empolyee table).
INSERT INTO empolyee (first_name , last_name) VALUES ("Ibram","Elias");
INSERT INTO empolyee (first_name , last_name) VALUES ("Mina","Makram");
INSERT INTO empolyee (first_name , last_name) VALUES ("Joe","Habib");
INSERT INTO empolyee (first_name , last_name) VALUES ("Dan","Sedral");
INSERT INTO empolyee (first_name , last_name) VALUES ("Steven","Kesh");
INSERT INTO empolyee (first_name , last_name) VALUES ("Archil","Kesh");



-- Inset data (role table).
INSERT INTO role (title , salary) VALUES ("accountant","8000");
INSERT INTO role (title , salary) VALUES ("developer","12000");
INSERT INTO role (title , salary) VALUES ("desginer","15000");
INSERT INTO role (title , salary) VALUES ("marketing specialist","9000");
INSERT INTO role (title , salary) VALUES ("sales agent","10000");
INSERT INTO role (title , salary) VALUES ("HR coordinator","11000");


-- Inset data (department table).
INSERT INTO department (name) VALUES ("finance");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("design");
INSERT INTO department (name) VALUES ("marketing");
INSERT INTO department (name) VALUES ("sales");
INSERT INTO department (name) VALUES ("human resources");




SELECT * from empolyee;
select * From role;
select * from department;



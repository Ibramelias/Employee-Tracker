
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// create the connection information for the sql database
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "UserOptions",
      type: "list",
      message: "What would you like to do ?",
      choices: ["View", "Add", "Update"]
    })
    .then(function (answer) {
      // based on their answer, either call Add, View or post functions
      if (answer.UserOptions === "View") {
        view();
      } else if (answer.UserOptions === "Add") {
        add();
      } else if (answer.UserOptions === "Update") {
        update();
      }
      else {
        connection.end();
      }
    });
}

// View all date.
function view() {
  inquirer
    .prompt({
      name: "View",
      type: "list",
      message: "What would you like to see ?",
      choices: ["Department", "Employees", "Roles", "All"]
    }).then(function (answer) {
      // based on their answer, either View department, view roles, view employee or view all data functions
      switch (answer.View) {
        // View department.....
        case "Department":
          connection.query("SELECT * FROM department", function (err, result) {
            console.table(result)
            start();
          });
          break;
          //View employees data ......
        case "Employees":
          connection.query("SELECT * FROM employee", function (err, result) {
            console.table(result)
            start();
          });
          break;
          // View roles.......
        case "Roles":
          connection.query("SELECT * FROM role", function (err, result) {
            console.table(result)
            start();
          });
          break;
          // View all data.......
        case "All":
          connection.query("select employee.first_name, employee.last_name, role.title, role.salary, department.name from employee INNER join role  on employee.role_id = role.id INNER join department  on role.department_id = department.id order by department.name;", function (err, result) {
            console.table(result)
            start();
          });
          break;
        case "Start":
          start();
          break;

      }
    });
}

// Insert New data to tables....
function add() {
  inquirer.prompt(
    {
      name: "add",
      type: "list",
      message: "Select what you want to add",
      choices: ["Add Employee", "Add Role", "Add Departmet"]
    }
  ).then(function (answer) {
    // INSERT NEW EMPLOYEE....
    if (answer.add === "Add Employee") {
      inquirer.prompt([
        {
          name: "first_name",
          type: "input",
          message: "First Name"
        },
        {
          name: "last_name",
          type: "input",
          message: "Last Name"
        },
        {
          name: "role_id",
          type: "number",
          message: "Role ID"
        }
      ]).then(function (answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id
          },
          function (err) {
            if (err) throw err;
            console.log(`Added employee ${answer.first_name} ${answer.last_name}`);
            start();
          }
        )
      });
      // INSERT NEW ROLE....
    } else if (answer.add === "Add Role") {
      inquirer.prompt([
        {
          name: "title",
          type: "input",
          message: "Title"
        },
        {
          name: "salary",
          type: "input",
          message: "Salary"
        },
        {
          name: "department_id",
          type: "number",
          message: "Department ID"
        }
      ]).then(function (answer) {
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id
          },
          function (err) {
            if (err) throw err;
            console.log(`Added employee role ${answer.title} ${answer.salary}`);
            start();
          }
        )
      });
      // INSERT NEW DEPARTMENT....
    } else if (answer.add === "Add Departmet") {
      inquirer.prompt(
        {
          name: "name",
          type: "input",
          message: "Name"
        }
      ).then(function (answer) {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.name,
          },
          function (err) {
            if (err) throw err;
            console.log(`Added department ${answer.name}`);
            start();
          }
        )
      });
    }
  })
}

// UDPATED EMPLOYEE ROLE DATA.....
function update() {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "New title"
    },
    {
      name: "salary",
      type: "number",
      message: "New salary"
    }
  ]).then(function (answer) {
    connection.query(
      "UPDATE role SET title = ? SET salary = ?",
      {
        title: answer.title,
        salary: answer.salary
      },
      function (err) {
        if (err) throw err;
        console.log(`Updated ${answer.first_name} ${answer.last_name}' title and salary to ${answer.title} ${answer.salary}`);
        start();
      }
    )

  });

}
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_tracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "addOrviewOrupdate",
      type: "list",
      message: "What would you like to do in Departments, Roles and Employees?",
      choices: ["View", "Add", "Update"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.addOrviewOrupdate === "VIEW") {
        viewDepartment();
      }
      else if(answer.addOrviewOrupdate === "ADD") {
        addDepartment();
      } else if (answer.addOrviewOrupdate === "UPDATE"){
          updateDepartment();
    }else{
        connection.end();
      }
    });
}

const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees_DB"
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
      // based on their answer, either call the bid or the post functions
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

function view() {
  inquirer
    .prompt({
      name: "Views",
      type: "list",
      message: "What would you like to see ?",
      choices: ["Department", "Empolyees", "Roles", "All"]
    })
  .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      switch (answer.Views) {
        case "Department":
          con.query("SELECT * FROM department", function (err, results) {
            if (err) throw err;
            // once you have the items, prompt the user for which they'd like to bid on
            else {
              console.table(results)
              start();
            }
          });
          break;
        case "Empolyees":
          con.query("SELECT * FROM empolyee", function (err, results) {
            if (err) throw err;
            // once you have the items, prompt the user for which they'd like to bid on
            else {
              console.table(results)
              start();
            }
          });
          break;
        case "Roles":
          con.query("SELECT * FROM role", function (err, results) {
            if (err) throw err;
            // once you have the items, prompt the user for which they'd like to bid on
            else {
              console.table(results)
              start();
            }
          });
          break;
        case "All":
          con.query("", function (err, results) {
            if (err) throw err;
            // once you have the items, prompt the user for which they'd like to bid on
            else {
              console.table(results)
              start();
            }
          });
          break;
      }
    });
}









// function viewDepartment() {
//   // query the database for all items being auctioned

// }
// function viewEmpolyee() {
//   // query the database for all items being auctioned
//   connection.query("SELECT * FROM empolyee", function (err, results) {
//     if (err) throw err;
//     // once you have the items, prompt the user for which they'd like to bid on
//     else {
//       console.table(results)
//       start();
//     }
//   });
// }
// function viewRole() {
//   // query the database for all items being auctioned
//   connection.query("SELECT * FROM role", function (err, results) {
//     if (err) throw err;
//     // once you have the items, prompt the user for which they'd like to bid on
//     else {
//       console.table(results)
//       start();
//     }
//   });
// }
// function viewAll() {
//   // query the database for all items being auctioned
//   connection.query("", function (err, results) {
//     if (err) throw err;
//     // once you have the items, prompt the user for which they'd like to bid on
//     else {
//       console.table(results)
//       start();
//     }
//   });
// }























// function viewDepartment() {
//   // query the database for all items being auctioned
//   connection.query("SELECT * FROM department", function (err, results) {
//     if (err) throw err;
//     // once you have the items, prompt the user for which they'd like to bid on
//     else {
//       console.table(results)
//       start();
//     }
//   });
// };





























// /////////////////////////////////////////////////////////////////////////////
function viewRole() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    else {
      console.table(results)
      start();
    }
  });
};
function viewEmpolyee() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM empolyee", function (err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    else {
      console.table(results)
      start();
    }
  });
};

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "What is employee's first name ?"
      },
      {
        type: "input",
        name: "What is employee's last name ?"
      },
      {

        type: "input",
        name: "What is empolyee's department ?"
      },
      {

        type: "input",
        name: "What is empolyee's role ?"
      },
    ])
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (table.answer === "department") {
        addDepartment();
      }
      else if (answer.answe === "role") {
        addRole();
      } else if (answer.answe === "empolyee") {
        updateEmpolyee();
      } else {
        connection.end();
      }
    });
}
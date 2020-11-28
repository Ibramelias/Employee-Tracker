# Employee-Tracker.

We are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems.




# Descriptin.

This applicaticon makes you able to view and manage the departments, roles, and employees in your company
So that you can organize and plan your business.


# How it works.
* Clone the repo.
* Paste the employee_sql file into MYSQL Workbench and run the queries.
* Make sur you lines 7-13 from server.js file (This is you database connector) 
Like this let connection = mysql.createConnection({
  host: "localhost",
  port: (Put your own port number),
  user: "root",
  password: "password",
  database: "employees_db"
});


# How to run this app.
Ensure your database is setup and run ```node server.js```    to start the application.


## Supporting image
![](img/Screen%20Shot%202020-11-28%20at%2012.48.38%20PM.png)






```javascript
node server.js
```
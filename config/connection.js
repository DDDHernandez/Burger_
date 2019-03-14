//Require MYSQL
var mysql = require("mysql");

//Require dotenv for our password
require("dotenv").config();

  
  //Create connection to database
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "burgers_db"
  });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;

"use strict";

const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "thiru_crud",
});

dbConnection.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected !");
});

module.exports = dbConnection;

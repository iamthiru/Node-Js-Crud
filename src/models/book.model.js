"use strict";

const dbConnection = require("../../config/db.config");

var Book = function (book) {
  this.id = book.id;
  this.title = book.title;
  this.author = book.author;
};

Book.create = function (newBook, result) {
  dbConnection.query("INSERT INTO books set ?", newBook, function (error, res) {
    if (error) {
      console.log("Something went wrong in create method !");
      result(null, error);
    } else {
      result(null, res);
    }
  });
};

Book.findAll = function (result) {
  dbConnection.query("Select * from books", function (error, res) {
    if (error) {
      console.log("Something went wrong in findAll method!");
      result(null, error);
    } else {
      result(null, res);
    }
  });
};

Book.update = function (id, newBook, result) {
  dbConnection.query(
    "UPDATE books SET title=?, author=? WHERE id = ?",
    [newBook.title, newBook.author, id],
    function (error, res) {
      if (error) {
        console.log("Something went wrong in update method!");
        result(null, error);
      } else {
        result(null, res);
      }
    }
  );
};

Book.delete = function (id, result) {
  dbConnection.query(
    "DELETE FROM books WHERE id=?",
    [id],
    function (error, res) {
      if (error) {
        console.log("Something went wrong in delete method!");
        result(null, error);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Book;

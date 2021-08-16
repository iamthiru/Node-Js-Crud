const dbConnection = require("../../config/db.config");

var Book = function (book) {
  this.id = book.id;
  this.title = book.title;
  this.author = book.author;
};

Book.create = function (newBook, result) {
  dbConnection.query(
    "INSERT INTO books id = ?, title = ?, author = ?",
    [newBook.id, newBook.title, newBook.author],
    function (error, res) {
      if (error) {
        console.log("Something went wrong in create method !");
        result.send(null, error);
      } else {
        result.send(null, res);
      }
    }
  );
};

Book.findAll = function (result) {
  dbConnection.query("SELECT * FROM books", function (error, res) {
    if (error) {
      console.log("Something went wrong in findAll method!");
      result.send(null, error);
    } else {
      result.send(null, res);
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
        result.send(null, error);
      } else {
        result.send(null, res);
      }
    }
  );
};

Book.delete = function (id) {
  dbConnection.query(
    "DELETE FROM books WHERE id=?",
    [id],
    function (error, res) {
      if (error) {
        console.log("Something went wrong in delete method!");
        result.send(null, error);
      } else {
        result.send(null, res);
      }
    }
  );
};

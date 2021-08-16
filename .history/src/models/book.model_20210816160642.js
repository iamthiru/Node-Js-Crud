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
        if(error) {
            console.log("Something went wrong !");
            result.send(null, error);
        }else{
            result.send(null, res);
        }
    }
  );
};

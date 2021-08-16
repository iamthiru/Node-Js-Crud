const dbConnection = require('../../config/db.config');

var Book = function (book) {
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
}
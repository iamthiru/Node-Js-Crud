"use strict";
const Book = require("../models/book.model");


exports.findAll = function (req, res) {
  Book.findAll(function (err, books) {
    if (err) {
      console.log("Error : ", err);
      res.status(400).send(err);
    }
    console.log("Result : ", books);
    res.status(200).send(books);
  });
};

exports.createBook = function (req, res) {
    const newBook = new Book(req.body);
    debugger;
    Book.create(newBook, function (err, book) {
        if (err) {
            console.log("Error : ", err);
            res.status(400).send(err);
          }
          console.log("Result : ", book);
          res.status(200).send(book);
    })
}

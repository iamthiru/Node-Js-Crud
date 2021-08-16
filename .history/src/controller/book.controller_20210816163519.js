"use strict";
const Book = require("../models/book.model");


exports.findAll = function (req, res) {
  Book.findAll(function (err, books) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    console.log(books);
    res.status(200).send(books);
  });
};

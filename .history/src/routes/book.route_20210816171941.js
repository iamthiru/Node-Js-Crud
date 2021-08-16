const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.post("/create-book", bookController.createBook);

router.get("/view-all", bookController.findAll);

router.put('/update-book', bookController.updateBook);

module.exports = router;

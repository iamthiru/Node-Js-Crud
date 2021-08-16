const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.post("/create-book", bookController.createBook);

router.get("/view-all", bookController.findAll);

module.exports = router;

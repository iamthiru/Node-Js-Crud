const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.post("/create", bookController.createBook);

router.get("/view-all", bookController.findAll);

router.put('/update/:id', bookController.updateBook);

router.delete('/delete/:id', bookController.deleteBook);

module.exports = router;

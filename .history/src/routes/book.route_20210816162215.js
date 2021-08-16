const express = require("express");
const router = express.Router();
const bookController = require('../controller/book.controller');

router.get('/view-all', bookController.findAll);


module.exports = router;

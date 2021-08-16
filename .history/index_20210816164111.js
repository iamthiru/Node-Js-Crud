const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Demo Text !");
});

const bookRoutes = require("./src/routes/book.route");
app.use("/book", bookRoutes);

const server = app.listen(2021, function () {
  console.log("Server run on port : 2021");
});

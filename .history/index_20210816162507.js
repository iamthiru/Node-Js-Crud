const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Demo Text !");
});

const bookRoutes = require("./src/routes/book.route");
app.use("/book", bookRoutes);

const server = app.listen(2021, function () {
  console.log("Server run on port : 2021");
});

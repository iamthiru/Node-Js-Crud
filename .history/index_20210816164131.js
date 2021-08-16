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

var server = app.listen(2021, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
  });
  

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Demo Text !");
})

const server = app.listen(2020, function () {
    console.log("Server run on port : 2020");
})
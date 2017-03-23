var express = require("express");
var app = express();

// app.get pushes data from serverto localhost front end

app.get('/greeting', function (req, res) {
  res.send("You found the greeting endpoint")
});

app.get('/happy', function (req, res) {
  res.send("Your Happy")
});

app.get('/sad', function (req, res) {
  res.send("Your Sad")
});

var server = app.listen(3000, function () {
  console.log("App fired up on port 3000")
});

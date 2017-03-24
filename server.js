var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var data = [2, 5, 82, 67, 5];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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

app.post('/login', function (req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var user = { name: name, password: password}
  res.json(user);
});

app.get('/postdata', function (req, res) {
  req.data ={};
  req.data.test = 1;
  res.send(req.data);
});

app.post('/postdata/:_id', function (req, res) {
  var num = req.params._id;
  data.push(num);
  res.send(data);
});

app.get('/testquery', function (req, res) {
  var test = req.query;
  data.push(test);
  res.send(data);
});

var server = app.listen(3000, function () {
  console.log("App fired up on port 3000")
});

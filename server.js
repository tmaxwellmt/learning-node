var http = require('http');

http.createServer(function(req, res) {
  response.end("hello world");
  console.log("Your server is running on port 3000");
}).listen(3000);

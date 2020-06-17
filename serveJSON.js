var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    firstName: "Ashok",
    lastName: "Sudagani",
    age: 24,
  };
  res.end(JSON.stringify(myObj));
});

server.listen(8888);
console.log("server started");

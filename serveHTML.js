var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(
    __dirname + "/exampleHtml.html",
    "utf-8"
  );
  myReadStream.pipe(res);
});
server.listen("8888");
console.log("server started");

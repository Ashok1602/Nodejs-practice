var fs = require("fs");
var http = require("http");

// this is create rad stream
// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

// this is create write stream
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

//using pipe
// myReadStream.pipe(myWriteStream);

//using with out pipe
// myReadStream.on(function (chunk) {
//   myWriteStream.write(chunk);
// });

//same above thing using server
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  //here writable sream is response
  myReadStream.pipe(res);
});
server.listen(8888);

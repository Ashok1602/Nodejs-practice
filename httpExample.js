var http = require("http");
// var url = require("url");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/palin" });
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write("Hello World");
    res.end("Hi Ashok");
  })
  .listen(8888);
console.log("server started");

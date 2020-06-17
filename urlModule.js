var url = require("url");
var adr = "http://localhost:8080/exmple.html?year=2020&month=june";
var q = url.parse(adr, true);
console.log(q.host); //localhost:8080
console.log(q.pathname); //"/example.html"
console.log(q.search); //?year=2020&month=june
var qdata = q.query; //{year: 2020,month: 'june'}
console.log(qdata.month); //june

// var varialeName = function() {      syntax of function expression.
//   body
// }
// varialeName();
//here require works like import in reactjs
var stuff = require('./stuff');

var funExp = function(){
  console.log("Hey Node Js");
setTimeout(() => {
  console.log("3 sec have passed");
}, 3000);
let time = 0;
timer = setInterval(() => {
  time = time + 2;
  console.log(time + "sec have been passed");
  if (time > 6) {
    clearInterval(timer);
    console.log("directory name command(__dirname):",__dirname);
    console.log("file name command(__filename):",__filename);
    console.log(stuff.counter([1,2,3,5,6]));
    console.log(stuff.adder(5,6));
    console.log(stuff.pi);
  }
}, 2000);
};
 funExp();

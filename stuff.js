// here moudle.exports works like export default in reactjs
module.exports.counter = function(arr) {
return `this array contains the ${arr.length} elements`;
}

module.exports.adder = function(a,b) {
return `the count of ${a} and ${b} is ${a+b}`;
}

module.exports.pi = 3.142;

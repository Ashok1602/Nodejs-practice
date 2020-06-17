// //events is the default module provided by node js.
// const events = require('events');
// const utils = require("util");

// var Person = function(name) {
//   this.name = name
// };

// utils.inherits(Person, events.EventEmitter);

// var james = new Person("james");
// var david = new Person("david");
// var kim = new Person("kim");

// var peoples = [james, david, kim];

// peoples.forEach((person) => {
//   person.on("speak", (mesg) => {
//     console.log(`${person.name} said: ${mesg}`);
//   })
// });

// james.emit("speak", "hello world");

var events = require("events");
var eventEmitter = new events.EventEmitter();

var myNewEvent = function () {
  console.log("fired first new event");
};

eventEmitter.on("myNewEvent", myNewEvent);

eventEmitter.emit("myNewEvent");

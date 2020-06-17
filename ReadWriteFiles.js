var fs = require("fs");

// var readMe = fs.readFileSync("simpleFile.txt", 'utf8');
// console.log(readMe);
// fs.writeFileSync("simpleFile2.txt", readMe);
//readFileSync and writeFileSync is synchronous functions

fs.readFile("simpleFile.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
//readFile is asynchrouns functions

var fs = require("fs");

//create file with Async methods

// fs.mkdir("stuff", function () {
//   fs.readFile("simpleFile.txt", "utf8", function (err, data) {
//     fs.writeFileSync("./stuff/writeMe.txt", data);
//   });
// });

//delete file with async methods
//before delete folder you need to delete inside folder data then you can remove folder
fs.unlink("./stuff/writeMe.txt", function (err, data) {
  console.log(data);
});
fs.rmdir("stuff", function (err, data) {
  console.log(err);
  console.log(data);
});

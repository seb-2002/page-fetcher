const request = require("request");
const fs = require("fs");

// creates a new file with the new file name
const touch = (newFileName) => {
  fs.open(newFileName, "w", function (err, file) {
    if (err) throw err;
  });
};

// write file
const writeItInto = (filePath, data) => {
  touch(filePath);
  fs.writeFile(filePath, data, "utf8", (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
};

const log = (data) => console.log(data);
// returns the body of the site
const writeBodyInto = (site, filePath) => {
  request(site, (error, response, body) => writeItInto(filePath, body));
};

writeBodyInto("http://www.example.edu", "dogs.txt");

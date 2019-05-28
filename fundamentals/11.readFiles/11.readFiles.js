/*
This code read all files from a directory and shows its content.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var fs = require("fs");
var path = require("path");

var file = "./lorem_ipsum.md";

fs.readdir('.', function(err, content){
  content.forEach(function(fileName){
    var filePath = path.join(__dirname, fileName);
    var stats = fs.statSync(filePath);
    if(stats.isFile() && fileName !== "11.readFiles.js"){
      var fileContent = fs.readFileSync(filePath, "UTF-8");
      console.log(`File: ${fileName}\n-----------------------------------\n`);
      console.log(fileContent);
    }
  });
});

// //Asynchronous file reading
// fs.readFile(file, "UTF-8", function(err, fileContent){
//   console.log("Asynchronous File Reading\n-----------------------------------\n");
//   console.log(fileContent);
// });

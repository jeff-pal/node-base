/*
This code read directory content in two ways, Asynchronous and
Synchronous.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var fs = require("fs");

var directoryToReading = ".";

//Asynchronous directory content reading
fs.readdir(directoryToReading, function(err, directoryContent){
  console.log("Asynchronous Directory Reading");
  console.log(directoryContent);
});

//Synchronous directory content reading
var directoryContent = fs.readdirSync(directoryToReading);
console.log("Synchronous Directory Reading");
console.log(directoryContent);

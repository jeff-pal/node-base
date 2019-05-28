/*
This code must be used as a child process for test spawn.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var sayings = [
  `today is ${(new Date()).toLocaleDateString()}`,
  "Sir Trump is the US president",
  "Stephen Hawking is gone",
  "node js is cool"
]

var interval = setInterval(function(){
  var i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[i]}\n`);
}, 1000);

process.stdin.on('data', function(data){
  console.log(`STDIN data received -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});

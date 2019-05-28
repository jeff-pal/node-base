/*
This code run a child process using spawn function.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var spawn = require("child_process").spawn;

//spawn ('command', ['array with command's arguments'])
var cp = spawn("node", ["alwaystalking"]);

//takes the child process output
cp.stdout.on("data", function(data){
  console.log(`STDOUT from Child Process: ${data.toString()}`);
});

//when the child process dies this current process dies too
cp.on("close", function(){
   console.log("Child Process has ended");
   process.exit();
});

//after 4 sec it sends an input for the child process
setTimeout(function(){
  cp.stdin.write("stop");
}, 4000);

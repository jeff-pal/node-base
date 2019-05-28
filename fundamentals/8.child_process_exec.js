/*
This code execute Terminal commands using exec function,
receive the output and logs it on the current output process.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var exec = require('child_process').exec;

exec('pwd', function(err, stdout){
  if(err)
    throw err;
  console.log(`Terminal messages: \n${stdout}`);
});

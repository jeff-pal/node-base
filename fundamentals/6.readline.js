/*
This code make questions using readline module and saves the answers
in an array.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/


var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
  name: '',
  sayings: []
}

rl.question("what is the name of a real person?", function(answer){
  realPerson.name = answer;
  rl.setPrompt(`what would ${realPerson.name} say `);
  rl.prompt();
    rl.on('line', function(saying){
      realPerson.sayings.push(saying.trim());
      if (saying.toLowerCase().trim() === 'exit'){
        rl.close();
      }
      else{
        rl.setPrompt(`what elese ${realPerson.name} say? ('exit to leave')`);
        rl.prompt();
      }
    });
});

rl.on('close', function(){
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});

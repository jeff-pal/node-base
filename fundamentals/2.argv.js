/*
This code receive arguments from the execution and identify them by flags.
Each flag must be followed by its value.

Execution and args:
-------------------
    node 2.argv --greeting <greeting_content> --user <user_content>
    - greeting_content: the content of for flag
    - user_content: the content of for flag

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

function grab(flag)
{
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

function main(){
  var greeting = grab('--greeting');
  var user = grab('--user');

  if(!greeting || !user)
      console.log("You Blew It!");
  else
      console.log(`Welcome ${user}, ${greeting}`);
}

main();
//console.log(process.argv);

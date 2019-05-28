/*
This code print questions, waits for answers and in the end assemble
a phrase and show it in the screen.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var questions = ["what is your name?",
                 "what is your fav hobby?",
                 "what is your preferred programming language?"];
var answers = [];

function ask(i){
  process.stdout.write(`\n ${questions[i]} > `);
}

function pushData(data){
    //process.stdout.write('\n' + data.toString().trim() + '\n'); //The trim() method removes whitespace from both sides of a string.
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
      ask(answers.length);
    }
    else {
      process.exit();
    }
}

function finish(){
  process.stdout.write(`\n Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later \n`);
}


process.stdin.on('data', pushData);
process.on('exit', finish);

ask(0);

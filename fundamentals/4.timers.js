/*
This code shows a perecenting progress process and finish it when
the timeout is over.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/


var timeout = 3000;
var currentTime = 0;
var waitingInterval = 100;
var percentWaited = 0;

function writeWaitingPercent(p){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p} %`);
}

function countInterval(){
  currentTime += waitingInterval;
  percentWaited = Math.floor((currentTime/timeout)*100);
  writeWaitingPercent(percentWaited);
}

function finish(){
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\ndone");
  //process.exit();

}

var interval = setInterval(countInterval, waitingInterval) //on each 'waitingInterval' counted it call the callback countInterval.
setTimeout(finish, timeout); //when the 'timeout' is over it calls the callback 'finish'.

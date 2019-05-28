/*
This code is just a little sample to show some global variables.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var path = require("path");
var msg = "Hello world from Node JS";
var sub_msg = msg.slice(17);
var template_string = "Hello! I am a template string";
console.log("msg: "+msg);
console.log("sub_msg: "+sub_msg);
console.log(`template_string: ${template_string}`);
console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);
console.log(`__filename: ${path.basename(__filename)}`);

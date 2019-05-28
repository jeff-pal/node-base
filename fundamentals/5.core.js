/*
This code just shows some Core modules usage.

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/

var path = require('path');
var util = require('util');
var v8 = require('v8');

var dirTogether = path.join(__dirname, 'www', 'files', 'uploads');

console.log(path.basename(__filename));
console.log(dirTogether);

util.log(path.basename(__filename));
util.log(dirTogether);

util.log(v8.getHeapStatistics());
